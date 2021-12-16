import * as actions from "../../redux/actions/index";
import FormControlLabel from "@mui/material/FormControlLabel";
import { BgColor, SystemColor } from "../../color";
import {
  Container,
  Grid,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import AccountSider from "../../components/Sider/AccountSider";
import { AccountState$ } from "../../redux/selectors";
import React from "react";
import WishListCard from "../../components/WishLishCard/WishListCard";
import { useLocation } from "react-router-dom";
import WishListCardGrid from "../../components/WishLishCard/WishListCardGrid";
import { Box } from "@mui/system";
import ProducCardGrid from "../../components/GridProductCard/ProducCardGrid";
import HeaderTypography from "../../components/Typographys/HeaderTypography";

const WishListDetailPage = () => {
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
  const value = 4;
  const text = "Chi tiết danh sách quan tâm";
  const label = "Số lượng sản phẩm: 8";
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  };
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
            }}
          >
            <HeaderTypography text={text} />
            <Grid container paddingLeft={"20px"}>
              <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label={checked ? "8 sản phẩm đã chọn" : "Tất cả"}
              />
            </Grid>
            <ProducCardGrid />
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
            <Box
              style={{
                paddingLeft: "40px",
                backgroundColor: "transparent",
              }}
            >
              <HeaderTypography text={text} />
              <Grid container paddingLeft={"20px"}>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  label={checked ? "3 sản phẩm đã chọn" : "Tất cả"}
                />
              </Grid>
              <ProducCardGrid />
            </Box>
          </Grid>
        </Grid>
      </Slide>
    );
};

export default WishListDetailPage;
