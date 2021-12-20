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
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle sx={{ textAlign: "center" }} marginBottom={1}>
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
              width="60%"
              height="100%"
              display={"flex"}
            >
              <ShowMainImage
                sizeSubImg={86}
                isMobile={isMobile}
                sanPham={sanPham}
                selectedColor={selectedColor}
              />
            </Box>
            <Box width="40%" marginLeft={3}>
              <InfoProduct
                sanPham={sanPham}
                isMobile={isMobile}
                size="middle"
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
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
