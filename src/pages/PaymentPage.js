import {
  Box,
  Collapse,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HeaderTypography from "../components/Typographys/HeaderTypography";
import PaymentCartLeftTable from "../components/Tables/PaymentCartLeftTable";
import PaymentInfo from "../components/PaymentBody/PaymentInfo";
import PaymentMethod from "../components/PaymentBody/PaymentMethod";
import React from "react";
import ShippingMethod from "../components/PaymentBody/ShippingMethod";
import { SystemColor } from "../color";
import UserInfo from "../components/PaymentBody/UserInfo/UserInfo";
import { useHistory } from "react-router-dom";

const PaymentPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const history = useHistory();
  const [isGiven, setIsGiven] = React.useState(false);
  return (
    <div>
      <HeaderTypography text="Thanh toán" />
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
          <PaymentCartLeftTable />

          <Box
            sx={{
              p: 2,
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: SystemColor.gray,
              width: "100%",
              minWidth: "min-content",
            }}
          >
            <UserInfo />
          </Box>
          <Box
            sx={{
              p: 2,
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: SystemColor.gray,
              width: "100%",
              minWidth: "min-content",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginBottom: isGiven ? "12px" : "0px",
              }}
            >
              <Typography fontWeight="bold" color="secondary">
                Chọn dịch vụ gửi quà
              </Typography>
              <Switch
                checked={isGiven}
                onChange={(event) => setIsGiven(event.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <Collapse in={isGiven}>
              <UserInfo isGiven />
            </Collapse>
          </Box>
          <Stack direction="row" spacing={2}>
            <ShippingMethod />
            <PaymentMethod />
          </Stack>
        </Stack>
        <PaymentInfo
          isMobile={isMobile}
          shipFree
          textLink="Quay về giỏ hàng"
          onClickLink={() => history.push("/Gio-hang")}
        />
      </Stack>
    </div>
  );
};

export default PaymentPage;
