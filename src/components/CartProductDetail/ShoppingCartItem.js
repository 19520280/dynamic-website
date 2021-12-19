import { Divider, Stack } from "@mui/material";

import CartProductDetail from "../CartProductDetail/CartProductDetail";
import PriceTypography from "../Typographys/PriceTypography";
import React from "react";

const ShoppingCartItem = ({ product }) => (
  <div>
    <Stack
      direction="row"
      alignContent="strecth"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%" }}
      spacing={3}
    >
      <CartProductDetail sanPham={product} readOnly />
      <PriceTypography
        gia={product.soLuong * product.gia}
        justifyContent="flex-end"
      />
    </Stack>
    <Divider />
  </div>
);

export default ShoppingCartItem;
