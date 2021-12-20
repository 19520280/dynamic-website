import React, {useContext} from "react";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

import { AuthContext } from './../context/context';
import CheckCartLeftTable from "../components/Tables/CheckCartLeftTable";
import FreeshipTag from "./../components/Tag/FreeshipTag";
import HeaderTypography from "./../components/Typographys/HeaderTypography";
import PaymentInfo from "../components/PaymentBody/PaymentInfo";
import RecentSeen from "./../components/GridProductCard/RecentSeen";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const CartPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { userData } = useContext(AuthContext);
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
          isAccount={userData && userData.isLoggedin}
          onClickButton={() => history.push("/Thanh-toan")}
          textLink="Mua thêm"
        />
      </Stack>
    </div>
  );
};

export default CartPage;
