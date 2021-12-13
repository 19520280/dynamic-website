import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useTheme, Grid, Container, Slide } from "@mui/material";
import { SystemColor, BgColor } from "../../color";
import AccountSider from "../../components/Sider/AccountSider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index";
import { AccountState$ } from "../../redux/selectors";
import WishListCard from "../../components/WishLishCard/WishListCard";

const WishListPage = () => {
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
  const location = useLocation();
  console.log(location.pathname);
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
              backgroundColor: BgColor.mainBg,
              padding: "0px",
            }}
          >
           <WishListCard/>
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
          {/* <Grid item xs={2.5} xl={2.5}>
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
          <Grid item xs={9.5} xl={9.5}>
            <Container
              style={{
                paddingLeft: "40px",
                backgroundColor: BgColor.mainBg,
              }}
            >
            <WishListCard/>
            </Container>
          </Grid>
        </Grid>
      </Slide>
    );
};

export default WishListPage;
