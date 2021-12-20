import "./MixMatchDialog.css";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ImageHover from "../../ProductCard/ImageHover";
import { MixMatchDialogState$ } from "../../../redux/selectors";
import ModalWithButton from "./../../Modal/ModalWithButton";
import PriceTypography from "./../../Typographys/PriceTypography";
import ProductCard from "../../ProductCard/ProductCard";
import React from "react";
import { SystemColor } from "../../../color";
import { hideMixMatchDialog } from "../../../redux/actions";
import { products } from "../../../dataSources/Products";
import { useHistory } from "react-router-dom";

const MixMatchDialog = ({ sanPham }) => {
  const [listProducts, setlistProducts] = React.useState([]);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();
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
        const newProduct = products.filter((product) => product.id === id)[0];
        newList.push(newProduct);
      });
      setlistProducts(newList);
    }
  }, [sanPham]);

  const Actions = () => (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      sx={{ width: "50%" }}
    >
      <Stack direction="column">
        <Stack direction="row" spacing={2}>
          <Typography fontSize="1rem" fontWeight="bold" color="primary">
            Tổng cộng
          </Typography>
          <PriceTypography giaCu={370000} gia={330000} fontSize="1rem" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography
            fontSize="1rem"
            fontWeight="bold"
            color={SystemColor.error}
          >
            Tiết kiệm
          </Typography>
          <PriceTypography gia={50000} fontSize="1rem" />{" "}
        </Stack>
      </Stack>
      <Button
        variant="contained"
        title="Mua ngay để được giảm giá"
        startIcon={<AddShoppingCartIcon />}
        onClick={() => {
          handleClose();
          history.push("/Gio-hang");
        }}
      >
        Bấm mua giá sốc
      </Button>
    </Stack>
  );
  return (
    <>
      <ModalWithButton
        open={open}
        handleClose={handleClose}
        maxWidthDialog="none"
        header="Gợi ý phối đồ"
        body={
          <>
            <DialogContent dividers sx={{ width: "100%" }}>
              <Stack
                direction={isMobile ? "column" : "row"}
                sx={{ width: isMobile ? "100%" : "55vw" }}
                spacing={2}
              >
                <Box sx={{ width: "100%", height: "100%" }}>
                  <ImageHover imgs={[sanPham.imgs[0], sanPham.imgs[1]]} />{" "}
                </Box>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{ width: "100%" }}
                  justifyContent="flex-start"
                >
                  <Typography variant="button" color="secondary">
                    Sản phẩm đính kèm
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {listProducts.map((product, index) => (
                      <ProductCard sanPham={product} key={index} />
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </DialogContent>
            <DialogActions>
              <Actions />
            </DialogActions>{" "}
          </>
        }
      />
    </>
  );
};

export default MixMatchDialog;
