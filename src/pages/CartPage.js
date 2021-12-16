import { Stack, useMediaQuery, useTheme } from "@mui/material";

import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import FreeshipTag from "./../components/Tag/FreeshipTag";
import HeaderTypography from "./../components/Typographys/HeaderTypography";
import PaymentInfo from "../components/PaymentBody/PaymentInfo";
import React from "react";
import RecentSeen from "./../components/GridProductCard/RecentSeen";
import { useHistory } from "react-router-dom";

const CartPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const history = useHistory();
  return (
    <div>
      <HeaderTypography text="Giỏ hàng" />
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={4}
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
        <PaymentInfo
          isMobile={isMobile}
          onClickButton={() => history.push("/Thanh-toan")}
          textLink="Mua thêm"
        />
      </Stack>
    </div>
  );
};

export default CartPage;
