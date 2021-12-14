import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";

import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import PaymentInfo from "../components/Sider/PaymentInfo";
import React from "react";
import TextFieldWithButton from "../components/TextFields/TextFieldWithButton";

const CartPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={1}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <CheckCartLeftTable />
      <PaymentInfo />
    </Stack>
  );
};

export default CartPage;
