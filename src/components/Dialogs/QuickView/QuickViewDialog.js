import {
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { hideQuickViewDialog } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { QuickViewDialogState$ } from "../../../redux/selectors";
import ShowMainImage from "../../ProductDetail/ShowMainImage";
import InfoProduct from "../../ProductDetail/InfoProduct";
function QuickViewDialog({ sanPham }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const open = useSelector(QuickViewDialogState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideQuickViewDialog());
  }, [dispatch]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle sx={{ textAlign: "center" }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display={"flex"}>
            <Box
              alignContent="center"
              width="60%"
              height="100%"
              display={"flex"}
            >
              <ShowMainImage
                sizeMainImg={500}
                sizeSubImg={115}
                isMobile={isMobile}
                sanPham={sanPham}
              />
            </Box>
            <Box width="40%" marginLeft={3}>
              <InfoProduct sanPham={sanPham} isMobile={isMobile} />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default QuickViewDialog;
