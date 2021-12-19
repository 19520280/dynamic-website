import "./MixMatchDialog.css";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import ImageHover from "../../ProductCard/ImageHover";
import { MixMatchDialogState$ } from "../../../redux/selectors";
import PriceTypography from "./../../Typographys/PriceTypography";
import ProductCard from "../../ProductCard/ProductCard";
import React from "react";
import { hideMixMatchDialog } from "../../../redux/actions";
import { products } from "../../../dataSources/Products";

const Actions = () => (
  <div>
    <Stack
      direction="row"
      justifyContent="stretch"
      alignItems="flex-start"
      spacing={2}
    >
      <Typography fontSize="1rem" fontWeight="bold" color="primary">
        Số lượng
      </Typography>
      <Typography fontSize="1rem" fontWeight="bold" color="primary">
        2 sản phẩm
      </Typography>
    </Stack>
    <Stack
      direction="row"
      justifyContent="stretch"
      alignItems="flex-start"
      spacing={2}
    >
      <Typography fontSize="1rem" fontWeight="bold" color="primary">
        Tổng cộng
      </Typography>
      <PriceTypography gia={370000} fontSize="1rem" />
    </Stack>
    <Button>Thêm tất cả vào giỏ hàng</Button>
  </div>
);

const MixMatchDialog = ({ sanPham }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [listProducts, setlistProducts] = React.useState([]);

  /* #region  handleOpen/Close */
  const dispatch = useDispatch();
  const open = useSelector(MixMatchDialogState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideMixMatchDialog());
  }, [dispatch]);
  /* #endregion */

  /* #region  MixMatchDialog */
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  /* #endregion */
  React.useEffect(() => {
    if (sanPham) {
      const newList = [];
      sanPham.productIds.forEach((id) => {
        const newProduct = products.filter((product) => product.id === id);
        newList.push(newProduct[0]);
      });
      setlistProducts(newList);
    }
  }, [sanPham]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={isMobile}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{ maxHeight: "100%" }}
    >
      <DialogTitle id="scroll-dialog-title">
        Phối đồ
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
      <DialogContent sx={{ width: "100%" }}>
        <Stack
          direction={isMobile ? "column" : "row"}
          sx={{ width: isMobile ? "100%" : "55vw" }}
          spacing={2}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <ImageHover imgs={[sanPham.imgs[0], sanPham.imgs[1]]} />{" "}
          </Box>
          <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
            <Stack direction="row" spacing={2}>
              {listProducts.map((product, index) => (
                <ProductCard sanPham={product} key={index} />
              ))}
            </Stack>
            <Actions />
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default MixMatchDialog;