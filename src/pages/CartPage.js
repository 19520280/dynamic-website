import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";

import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import React from "react";
import TextFieldWithButton from "../components/TextFields/TextFieldWithButton";

const CartPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={2}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <CheckCartLeftTable />
      <TextFieldWithButton hintText="Nhập mã giảm giá" textButton="Áp dụng" />
    </Stack>
  );
};

export default CartPage;
