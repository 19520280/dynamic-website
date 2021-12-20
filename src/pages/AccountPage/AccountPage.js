import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Address from "../../components/AccountPageBody/Address";
import ChangePassword from "../../components/AccountPageBody/ChangePassword";
import Measure from "../../components/AccountPageBody/Measure";
import Noti from "../../components/AccountPageBody/Noti";
import Orders from "../../components/AccountPageBody/Orders";
import Points from "../../components/AccountPageBody/Points";
import Profile from "../../components/AccountPageBody/Profile.js";
import WishLists from "../../components/AccountPageBody/WishLists";
import AccountSider from "../../components/Sider/AccountSider";
import * as actions from "../../redux/actions/index";
import { AccountState$ } from "../../redux/selectors";
import { BgColor, SystemColor } from "../../color";

const AccountPage = ({ accountRoute }) => {
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  //#region get data
  useEffect(() => {
    dispatch(actions.getAccount());
  }, [dispatch]);

  const Account = useSelector(AccountState$);

  const [data, setData] = useState(Account);

  useEffect(() => {
    if (Account) {
      setData(Account);
    }
  }, [Account]);
  //#endregion

  return (
    <Grid container spacing={0}>
      <Grid xs={isMobile?8:2.5} xl={2.5}>
        <Container
          style={{
            backgroundColor: BgColor.mainBg,
          }}
        >
          <AccountSider
            avatarImage={data.avatarImage}
            accountName={data.accountName}
            timeHasJoined={data.timeHasJoined}
          />
        </Container>
      </Grid>
      <Grid item xs={isMobile?12:9.5} xl={9.5}>
        <Container
          style={{
            paddingLeft: isMobile ? "20px" : "40px",
            paddingRight: isMobile ? "20px" : "0px",

            backgroundColor: "#FCFCFC",
          }}
        >
          {accountRoute === "Ca-nhan" && (
            <Redirect to="/Ca-nhan/Tai-khoan/Ho-so" />
          )}
          {accountRoute === "Tai-khoan" && (
            <Redirect to="/Ca-nhan/Tai-khoan/Ho-so" />
          )}
          {accountRoute === "Ho-so" && (
            <Profile data={data} setData={setData} />
          )}
          {accountRoute === "Dia-chi" && (
            <Address data={data} setData={setData} />
          )}
          {accountRoute === "Chi-so-co-the" && <Measure />}
          {accountRoute === "Doi-mat-khau" && <ChangePassword />}
          {accountRoute === "Don-mua" && <Orders />}
          {accountRoute === "Diem-thuong" && <Points />}
          {accountRoute === "Danh-sach-quan-tam" && <WishLists />}
          {accountRoute === "Thong-bao" && <Noti />}
        </Container>
      </Grid>
    </Grid>
  );
};

export default AccountPage;
