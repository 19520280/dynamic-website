import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import PriceTypography from "../Typographys/PriceTypography";
import React from "react";
import { ShoppingCartDrawerState$ } from "./../../redux/selectors/index";
import ShoppingCartItem from "../CartProductDetail/ShoppingCartItem";
import { hideShoppingCartDrawer } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const ShoppingCartDrawer = ({ cartProducts, totalPrice }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const open = useSelector(ShoppingCartDrawerState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideShoppingCartDrawer());
  }, [dispatch]);

  const ListDrawer = () => (
    <Box sx={{ width: "100%", p: 2 }} role="presentation">
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="button" fontWeight="bold" color="secondary">
              GIỎ HÀNG
            </Typography>
            <IconButton onClick={handleClose} sx={{ cursor: "pointer" }}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
        </div>
        {cartProducts.map((product, index) => (
          <ShoppingCartItem key={index} product={product} />
        ))}
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <Typography
              fontSize="1.2rem"
              fontWeight="bold"
              color="primary"
              sx={{ marginRight: "8px" }}
            >
              Tổng cộng
            </Typography>
            <PriceTypography gia={totalPrice} fontSize="1.2rem" />
          </div>
          <Button
            variant="contained"
            onClick={() => {
              history.push("/Gio-hang");
              handleClose();
            }}
          >
            Xem thêm
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      sx={{ borderRadius: "4px" }}
    >
      <ListDrawer />
    </Drawer>
  );
};

export default ShoppingCartDrawer;
