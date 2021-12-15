import { Stack, useMediaQuery, useTheme } from "@mui/material";

import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import FreeshipTag from "./../components/Tag/FreeshipTag";
import PaymentInfo from "../components/Sider/PaymentInfo";
import React from "react";
import RecentSeen from "./../components/GridProductCard/RecentSeen";

const PaymentPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <div>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={5}
        justifyContent="space-between"
        alignItems={!isMobile ? "flex-start" : "stretch"}
      >
        <Stack
          direction="column"
          spacing={4}
          sx={{ width: isMobile ? "100%" : "75%" }}
        >
          <FreeshipTag />
          <CheckCartLeftTable />
          {!isMobile ? <RecentSeen /> : null}
        </Stack>
        <PaymentInfo isMobile={isMobile} />
      </Stack>
    </div>
  );
};

export default PaymentPage;
