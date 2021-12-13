import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Address from "../../components/AccountPageBody/Address";
import ChangePassword from "../../components/AccountPageBody/ChangePassword";
import Measure from "../../components/AccountPageBody/Measure";
import Noti from "../../components/AccountPageBody/Noti";
import Orders from "../../components/AccountPageBody/Orders";
import Points from "../../components/AccountPageBody/Points";
import Profile from "../../components/AccountPageBody/Profile";
import WishLists from "../../components/AccountPageBody/WishLists";
import AccountSider from "../../components/Sider/AccountSider";
import * as actions from "../../redux/actions/index";
import { AccountState$ } from "../../redux/selectors";

const AccountPage = ({ accountRoute }) => {
  const dispatch = useDispatch();

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
      <Grid item xs={2.5}>
        <AccountSider
          avatarImage={data.avatarImage}
          accountName={data.accountName}
          timeHasJoined={data.timeHasJoined}
        />
      </Grid>
      <Grid item xs={9.5}>
        <Container style={{ paddingLeft: "40px", backgroundColor: "#FCFCFC" }}>
          {accountRoute === "Ca-nhan" && (
            <Redirect to="/Ca-nhan/Tai-khoan/Ho-so" />
          )}
          {accountRoute === "Tai-khoan" && (
            <Redirect to="/Ca-nhan/Tai-khoan/Ho-so" />
          )}
          {accountRoute === "Ho-so" && <Profile />}
          {accountRoute === "Dia-chi" && <Address />}
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