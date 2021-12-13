import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";

import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import React from "react";

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
        <CheckCartLeftTable/>
    </Stack>
  );
};

export default CartPage;
