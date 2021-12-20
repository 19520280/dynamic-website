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
import { useHistory } from "react-router-dom";
function QuickViewDialog({ sanPham }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const open = useSelector(QuickViewDialogState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideQuickViewDialog());
  }, [dispatch]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
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
          <Box display={isMobile ? null : "flex"}>
            <Box
              alignContent="center"
              width="55%"
              height="100%"
              display={"flex"}
            >
              <ShowMainImage
                sizeMainImg={490}
                sizeSubImg={113}
                isMobile={isMobile}
                sanPham={sanPham}
              />
            </Box>
            <Box width="45%" marginLeft={3}>
              <InfoProduct
                sanPham={sanPham}
                isMobile={isMobile}
                size="middle"
              />
              <Button onClick={() => history.push(sanPham.path)} variant="text">
                Xem chi tiết
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default QuickViewDialog;
