import * as actions from "../../redux/actions/index";

import { BgColor, SystemColor } from "../../color";
import { Container, Grid, Slide, useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import AccountSider from "../../components/Sider/AccountSider";
import { AccountState$ } from "../../redux/selectors";
import React from "react";
import WishListCard from "../../components/WishLishCard/WishListCard";
import { useLocation } from "react-router-dom";
import WishListCardGrid from "../../components/WishLishCard/WishListCardGrid";
import HeaderTypography from "../../components/Typographys/HeaderTypography";
import TabMenu from "../../components/Tab/TabMenu";
import SearchInput from "../../components/SearchInput/SearchInput";

const WishListPage = () => {
  const dispatch = useDispatch();
  //#region get data
  useEffect(() => {
    dispatch(actions.getAccount());
  }, [dispatch]);

  const Account = useSelector(AccountState$);

  const [data, setData] = useState(Account);
  const menuItems = [
    { value: 2, text: "CHỜ XÁC NHẬN" },
    { value: 3, text: "CHỜ LẤY HÀNG" },
    { value: 4, text: "ĐANG GIAO" },
    { value: 5, text: "ĐÃ GIAO" },
    { value: 6, text: "ĐÃ HỦY" },
  ];

  useEffect(() => {
    if (Account) {
      setData(Account);
    }
  }, [Account]);
  const value = 4;
  const text = "Đơn mua";
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return (
      <>
        {/* <Grid item xs={8} xl={2.5}>
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
        </Grid> */}
        <Grid item xs={12} xl={9.5}>
          <Container
            style={{
              backgroundColor: "transparent",
              padding: "0px 0px 0px 20px",
              width: "100%",
            }}
          >
            <HeaderTypography text={text} />
            <TabMenu menuItems={menuItems} />
            <SearchInput />
          </Container>
        </Grid>
      </>
    );
  } else
    return (
      <Slide direction="up" in={true}>
        <Grid
          container
          spacing={0}
          style={{
            paddingLeft: "80px",
            paddingRight: "80px",
            background: BgColor.mainBg,
          }}
        >
          <Grid item xs={2.5} xl={2.5}>
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
          <Grid item xs={9.5} xl={9.5}>
            <Container
              style={{
                paddingLeft: "40px",
                backgroundColor: "transparent",
              }}
            >
              <HeaderTypography text={text} />
              <TabMenu menuItems={menuItems} />
              <SearchInput />
            </Container>
          </Grid>
        </Grid>
      </Slide>
    );
};

export default WishListPage;
