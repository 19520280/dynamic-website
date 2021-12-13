import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import PaymentInfo from "../components/Sider/PaymentInfo";
import React from "react";
import RecentSeen from "./../components/GridProductCard/RecentSeen";
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
      <Stack
        direction="column"
        spacing={2}
        sx={{ width: isMobile ? "100%" : "70%" }}
      >
        <CheckCartLeftTable />
        {!isMobile ? <RecentSeen /> : null}
      </Stack>
      <PaymentInfo />
    </Stack>
  );
};

export default CartPage;
