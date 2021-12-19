import * as actions from "../../redux/actions/index";
import { BgColor, SystemColor } from "../../color";
import {
  Container,
  Grid,
  Slide,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { OrderStatusState$ } from "../../redux/selectors";
import { useEffect, useState } from "react";
import AccountSider from "../../components/Sider/AccountSider";
import { AccountState$ } from "../../redux/selectors";
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import HeaderTypography from "../../components/Typographys/HeaderTypography";
import TabMenu from "../../components/Tab/TabMenu";
import PointStatus from "../../components/PointStatus/PointStatus";
import { Orders } from "../../dataSources/Orders";

const WishListPage = () => {
  const dispatch = useDispatch();
  //#region get data
  useEffect(() => {
    dispatch(actions.getAccount());
  }, [dispatch]);

  const Account = useSelector(AccountState$);

  const [data, setData] = useState(Account);
  const menuItems = [
    { value: 2, text: "ĐÃ NHẬN" },
    { value: 3, text: "ĐÃ DÙNG" },
  ];
  const listPoint = Orders.map((data) => data.diem);
  const sumPoint = listPoint.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
  useEffect(() => {
    if (Account) {
      setData(Account);
    }
  }, [Account]);
  const value = 4;
  const text = "Điểm thưởng";
  const location = useLocation();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const Status = useSelector(OrderStatusState$);
  console.log(Status);

  const body = (
    <>
      <Stack direction="row" spacing={2}>
        <HeaderTypography text={text} />
        <HeaderTypography color={"secondary"} text={sumPoint + " điểm"} />
      </Stack>
      <TabMenu menuItems={menuItems} />
      <Stack direction="column" spacing={2}>
        <PointStatus status={Status.payload} />
      </Stack>
    </>
  );
  if (isMobile) {
    return (
      <>
        <Grid
          container
          spacing={0}
          style={{
            background: BgColor.mainBg,
          }}
        >
          <Grid item xs={8} xl={2.5}>
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
          <Grid item xs={12} xl={9.5} style={{ marginBottom: "8%" }}>
            <Container
              style={{
                backgroundColor: "transparent",
                width: "100%",
              }}
            >
              {body}
            </Container>
          </Grid>
        </Grid>
      </>
    );
  } else
    return (
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
        <Grid item xs={9.5} xl={9.5} style={{ marginBottom: "8%" }}>
          <Container
            style={{
              paddingLeft: "40px",
              backgroundColor: "transparent",
            }}
          >
            {body}
          </Container>
        </Grid>
      </Grid>
    );
};

export default WishListPage;
