import * as actions from "../../redux/actions/index";

import { BgColor, SystemColor } from "../../color";
import {
  Button,
  Container,
  Grid,
  Slide,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import AccountSider from "../../components/Sider/AccountSider";
import { AccountState$ } from "../../redux/selectors";
import React from "react";
import WishListCard from "../../components/WishLishCard/WishListCard";
import { useLocation } from "react-router-dom";
import WishListCardGrid from "../../components/WishLishCard/WishListCardGrid";
import HeaderTypography from "../../components/Typographys/HeaderTypography";
import ModalWithButton from "../../components/Modal/ModalWithButton";

const WishListPage = () => {
  const dispatch = useDispatch();
  //#region get data
  useEffect(() => {
    dispatch(actions.getAccount());
  }, [dispatch]);

  const Account = useSelector(AccountState$);

  const [data, setData] = useState(Account);
  const [stateAddList, setStateAddList] = useState(false);
  const handleOpenAddList = () => setStateAddList(true);
  useEffect(() => {
    if (Account) {
      setData(Account);
    }
  }, [Account]);
  const value = 4;
  const text = "Danh sách quan tâm";
  const location = useLocation();
  const theme = useTheme();
  const listField = ["Tên danh sách yêu thích"];
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const body = (
    <>
      <HeaderTypography text={text} />
      <Stack direction="row" justifyContent="flex-end">
        <Button
          onClick={handleOpenAddList}
          variant="contained"
          style={{ margin: "0px 20px 20px" }}
        >
          THÊM MỚI
        </Button>
      </Stack>
      <WishListCardGrid value={value} />
      <ModalWithButton
        state={stateAddList}
        setState={setStateAddList}
        listField={listField}
        header="Thêm danh sách yêu thích"
        btnText="Thêm mới"
        messageText="Thêm mới thành công"
        typeMessage="success"
      />
    </>
  );
  if (isMobile) {
    return (
      <>
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
              background: BgColor.mainBg,
              padding: "0px 0px 0px 20px",
              width: "100%",
            }}
          >
            {body}
          </Container>
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
