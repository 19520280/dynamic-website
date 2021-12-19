import * as actions from "../../redux/actions/index";
import FormControlLabel from "@mui/material/FormControlLabel";
import { BgColor, SystemColor } from "../../color";
import {
  Button,
  Container,
  Grid,
  Slide,
  Stack,
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
import ConfirmModal from "../../components/Modal/ConfirmModal";

const WishListDetailPage = () => {
  const dispatch = useDispatch();
  //#region get data
  useEffect(() => {
    dispatch(actions.getAccount());
  }, [dispatch]);

  const Account = useSelector(AccountState$);

  const [data, setData] = useState(Account);
  const [select, setSelect] = useState(false);
  const onClick = () => {
    setSelect(!select);
    if (checked == true && !select == false) {
    } else {
      setChecked(!checked);
    }
  };

  useEffect(() => {
    if (Account) {
      setData(Account);
    }
  }, [Account]);
  const text = "Chi tiết danh sách quan tâm";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [checked, setChecked] = React.useState(true);
  const [stateDelete, setStateDelete] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked == false && select == false) {
      setSelect(true);
    } else {
      setSelect(false);
    }
  };
  const handlePrimaryButtonClick = () => {
    if (!select) {
      setStateDelete(true);
    }
  };
  const body = (
    <>
      <Grid container paddingLeft={isMobile ? "16px" : "24px"}>
        <HeaderTypography text={text} />
      </Grid>
      <Grid
        container
        paddingLeft={isMobile ? "16px" : "24px"}
        paddingBottom={isMobile ? "0px" : "24px"}
      >
        <Grid
          item
          xs={5}
          xl={6}
          padding={isMobile ? "16px 0px 16px 0px" : "0px"}
        >
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={checked ? "8 sản phẩm đã chọn" : "Tất cả"}
          />
        </Grid>
        <Grid
          item
          style={{ display: "flex", justifyContent: "flex-end" }}
          xs={7}
          xl={6}
        >
          <FormControlLabel
            control={
              <Button
                disabled={!checked && !select}
                variant="contained"
                onClick={handlePrimaryButtonClick}
              >
                {select ? "Thêm mới" : "Xóa đã chọn"}
              </Button>
            }
            label={""}
          />
          <FormControlLabel
            control={
              <Button
                disabled={!checked && !select}
                onClick={onClick}
                variant="outlined"
              >
                {select ? "Sửa" : "Hủy"}
              </Button>
            }
            label={""}
          />
        </Grid>
      </Grid>
      <ProducCardGrid />
      <ConfirmModal
        header="Xóa sản phẩm khỏi danh sách?"
        state={stateDelete}
        setState={setStateDelete}
        messageText="Xóa thành công"
        typeMessage="success"
      />

    </>
  );

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
        <Grid item xs={12} xl={9.5} style={{ marginBottom: "8%" }}>
          <Container
            style={{
              backgroundColor: "transparent",
              padding: isMobile ? "0px" : "0px 0px 0px 20px",
            }}
          >
            {body}
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
          <Grid item xs={9.5} xl={9.5} style={{ marginBottom: "8%" }}>
            <Box
              style={{
                paddingLeft: "40px",
                backgroundColor: "transparent",
              }}
            >
              {body}
            </Box>
          </Grid>
        </Grid>
      </Slide>
    );
};

export default WishListDetailPage;
