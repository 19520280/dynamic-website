import * as actions from "../../redux/actions/index";
import { BgColor, SystemColor } from "../../color";
import {
  Container,
  Grid,
  Slide,
  useMediaQuery,
  useTheme,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { OrderStatusState$ } from "../../redux/selectors";
import { useEffect, useState } from "react";
import CheckCartLeftTable from "../../components/Tables/CheckCartLeftTable";
import AccountSider from "../../components/Sider/AccountSider";
import { AccountState$ } from "../../redux/selectors";
import React from "react";
import WishListCard from "../../components/WishLishCard/WishListCard";
import { useLocation, useHistory } from "react-router-dom";
import WishListCardGrid from "../../components/WishLishCard/WishListCardGrid";
import HeaderTypography from "../../components/Typographys/HeaderTypography";
import TabMenu from "../../components/Tab/TabMenu";
import SearchInput from "../../components/SearchInput/SearchInput";
import PaymentInfo from "../../components/PaymentBody/PaymentInfo";
import OrdersCaseTypography from "../../components/Typographys/OrdersCaseTypography";
import OrderStatus from "../../components/OrderStatus/OrderStatus";

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
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const Status = useSelector(OrderStatusState$);
  console.log(Status);

  const body = (
    <>
      <HeaderTypography text={text} />
      <TabMenu menuItems={menuItems} />
      <SearchInput />
      <Stack direction="column" spacing={2}>
        <OrderStatus status={Status.payload} />
        <OrderStatus status={Status.payload} />
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
              {body}
            </Container>
          </Grid>
        </Grid>
      </Slide>
    );
};

export default WishListPage;
