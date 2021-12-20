import {
  Box,
  Collapse,
  IconButton,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAccount, showChangeAddressDialog } from "./../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

import { AccountState$ } from "../redux/selectors";
import ChangeAddressDialog from "../components/Dialogs/ChangeAddressDialog";
import EditIcon from "@mui/icons-material/Edit";
import HeaderTypography from "../components/Typographys/HeaderTypography";
import MemberInfo from "./../components/PaymentBody/UserInfo/MemberInfo";
import PaymentCartLeftTable from "../components/Tables/PaymentCartLeftTable";
import PaymentInfo from "../components/PaymentBody/PaymentInfo";
import PaymentMethod from "../components/PaymentBody/PaymentMethod";
import ShippingMethod from "../components/PaymentBody/ShippingMethod";
import { SystemColor } from "../color";
import UserInfo from "../components/PaymentBody/UserInfo/UserInfo";
import { useHistory } from "react-router-dom";

const PaymentPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  /* #region  getAccountData */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccount());
  }, [dispatch]);
  const Account = useSelector(AccountState$);
  const [data, setData] = useState(Account);
  useEffect(() => {
    if (Account) {
      setData(Account);
    }
  }, [Account]);
  /* #endregion */

  const history = useHistory();
  const [isGiven, setIsGiven] = React.useState(false);
  const openChangeAddressDialog = React.useCallback(() => {
    dispatch(showChangeAddressDialog());
  }, [dispatch, data]);
  return (
    <div>
      <ChangeAddressDialog data={data}/>
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
            <Typography variant="button" fontWeight="bold" color="secondary">
              THÔNG TIN NGƯỜI MUA
              {data ? (
                <IconButton
                  title="Thay đổi địa chỉ"
                  sx={{ marginLeft: "0px" }}
                  onClick={openChangeAddressDialog}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              ) : null}
            </Typography>
            {data ? (
              <MemberInfo
                data={data}
                address={data.address.name[data.address.isDefault]}
              />
            ) : (
              <UserInfo />
            )}
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
              <Typography variant="button" fontWeight="bold" color="secondary">
                THÔNG TIN NGƯỜI NHẬN
              </Typography>
              <UserInfo />
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
          isAccount={data}
          textLink="Quay về giỏ hàng"
          onClickLink={() => history.push("/Gio-hang")}
        />
      </Stack>
    </div>
  );
};

export default PaymentPage;
