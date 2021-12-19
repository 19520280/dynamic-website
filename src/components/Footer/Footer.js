import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CountTypography from "../Typographys/CountTypography";
import { useHistory } from "react-router-dom";
import { TxtColor } from "../../color";
import {
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
  Link,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import TextFieldWithButton from "../TextFields/TextFieldWithButton";
import ListIconSocial from "../ListIcon/ListIconSocial";
import ListIconApp from "../ListIcon/ListIconApp";

const image1 = require("../../assets/images/payment-method/cod.png").default;
const image2 = require("../../assets/images/payment-method/visa.png").default;
const image3 =
  require("../../assets/images/payment-method/master1.png").default;
const image4 =
  require("../../assets/images/payment-method/master2.png").default;
const image5 = require("../../assets/images/payment-method/jcb.png").default;
const image6 = require("../../assets/images/payment-method/paypal.png").default;

export default function Footer() {
  const theme = useTheme();

  const history = useHistory();

  const SupportItems = [
    { value: "Phí vận chuyển", path: "/" },
    { value: "Trả lại", path: "/" },
    { value: "Hướng dẫn đặt hàng", path: "/" },
    { value: "Làm thế nào để theo dõi", path: "/" },
    { value: "Hướng dẫn kích thước", path: "/" },
    { value: "Trách nhiệm xã hội", path: "/" },
  ];
  const InfoItems = [
    { value: "Giới thiệu Dynamic", path: "/" },
    { value: "Chương trình khuyến mãi", path: "/" },
    { value: "Blogger thời trang", path: "/" },
  ];

  const CustomerServiceItems = [
    { value: "Liên hệ chúng tôi", path: "/" },
    { value: "Phương thức thanh toán", path: "/" },
    { value: "Điểm thưởng", path: "/" },
  ];

  const listItem = [
    { value: "THÔNG TIN CÔNG TY", list: InfoItems },
    { value: "HỖ TRỢ KHÁCH HÀNG", list: SupportItems },
    { value: "DỊCH VỤ KHÁCH HÀNG", list: CustomerServiceItems },
  ];

  const listLink = [
    { value: "Trung tâm bảo mật", path: "/" },
    { value: "Chính sách bảo mật & Cookie", path: "/" },
    { value: "Điều khoản và điều kiện", path: "/" },
    { value: "Thông báo về bản quyền", path: "/" },
    { value: "Dấu ấn", path: "/" },
  ];


  const listImage = [image1, image2, image3, image4, image5, image6];

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!isMobile) {
    return (
      <>
        <AppBar style={{ marginTop: "8%" }} position="static" color="primary">
          <Container>
            <Toolbar>
              <Grid container style={{ padding: "60px 0px 20px" }}>
                <Grid item xs={6} xl={6}>
                  <Stack direction="column">
                    <Stack direction="row" spacing={4}>
                      {listItem.map((itemDetail) => (
                        <Stack direction="column" spacing={1}>
                          <CountTypography
                            text={itemDetail.value}
                            color={TxtColor.txtWhite}
                            fontWeight="bold"
                            size="0.8rem"
                            padding="0px"
                          />
                          {itemDetail.list.map((item) => (
                            <ListItem
                              style={{ padding: "0px" }}
                              button
                              key={item.value}
                              onClick={() => history.push(item.path)}
                            >
                              <ListItemText
                                style={{ margin: "0px", padding: "0px" }}
                                id={item.value}
                                primary={
                                  <CountTypography
                                    text={item.value}
                                    color={TxtColor.txtThird}
                                    fontWeight={"normal"}
                                    size="0.8rem"
                                    padding="0px"
                                  />
                                }
                              ></ListItemText>
                            </ListItem>
                          ))}
                        </Stack>
                      ))}
                    </Stack>
                    <CountTypography
                      text="©2021 Dynamic bảo lưu tất cả các quyền"
                      color={TxtColor.txtThird}
                      fontWeight={"normal"}
                      size="0.8rem"
                      padding="50px 0px 10px"
                    />
                    <Grid>
                      {listLink.map((item) => (
                        <>
                          <Link
                            style={{ margin: "0px 20px 0px 0px" }}
                            href={item.path}
                            fontSize="0.8rem"
                            color={TxtColor.txtThird}
                          >
                            {item.value}
                          </Link>
                        </>
                      ))}
                    </Grid>
                  </Stack>
                </Grid>
                <Grid item xs={6} xl={6}>
                  <Box style={{ margin: "0px 0px 0px 50px" }}>
                    <Stack direction="row" spacing={2}>
                      <Grid container>
                        <Grid item xs={8}>
                          <Stack direction="column">
                            <CountTypography
                              text={"KẾT NỐI VỚI CHÚNG TÔI"}
                              color={TxtColor.txtWhite}
                              fontWeight={"bold"}
                              size="0.8rem"
                              padding="0px"
                            />
                            <ListIconSocial/>
                          </Stack>
                        </Grid>
                        <Grid item xs={4}>
                          <Stack direction="column">
                            <CountTypography
                              text={"APP"}
                              color={TxtColor.txtWhite}
                              fontWeight={"bold"}
                              size="0.8rem"
                              padding="0px"
                            />
                            <ListIconApp/>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                    <Stack direction="column" spacing={1} paddingTop="30px">
                      <CountTypography
                        text="ĐĂNG KÝ NHẬN TIN TỪ DYNAMIC"
                        color={TxtColor.txtWhite}
                        fontWeight={"bold"}
                        size="0.8rem"
                        padding="0px"
                      />
                      <TextFieldWithButton
                        hintText="Địa chỉ email của bạn"
                        textButton="ĐĂNG KÝ"
                        colorBtn="secondary"
                        colorTextField="#FFFF"
                        justContent="flex-start"
                      />
                      <CountTypography
                        text="CHÚNG TÔI CHẤP NHẬN"
                        color={TxtColor.txtWhite}
                        fontWeight={"bold"}
                        size="0.8rem"
                        padding="30px 0px 0px"
                      />
                      <Grid>
                        {listImage.map((image) => (
                          <img
                            src={image}
                            style={{
                              width: "36px",
                              height: "24px",
                              margin: "0px 10px 0px 0px",
                            }}
                          />
                        ))}
                      </Grid>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  } else {
    return (
      <>
        <AppBar style={{ marginTop: "8%" }} position="static" color="primary">
          <Container>
            <Toolbar>
              <Grid container style={{ padding: "60px 0px 20px" }}>
                <Grid item xs={12} xl={6}>
                  <Stack direction="column">
                    <Stack direction="row" spacing={7.5}>
                      {listItem.map((itemDetail, index) =>
                        index < 2 ? (
                          <Stack direction="column" spacing={1}>
                            <CountTypography
                              text={itemDetail.value}
                              color={TxtColor.txtWhite}
                              fontWeight="bold"
                              size="0.8rem"
                              padding="0px"
                            />
                            {itemDetail.list.map((item) => (
                              <ListItem
                                style={{ padding: "0px" }}
                                button
                                key={item.value}
                                onClick={() => history.push(item.path)}
                              >
                                <ListItemText
                                  style={{ margin: "0px", padding: "0px" }}
                                  id={item.value}
                                  primary={
                                    <CountTypography
                                      text={item.value}
                                      color={TxtColor.txtThird}
                                      fontWeight={"normal"}
                                      size="0.8rem"
                                      padding="0px"
                                    />
                                  }
                                ></ListItemText>
                              </ListItem>
                            ))}
                          </Stack>
                        ) : null
                      )}
                    </Stack>
                    
                  </Stack>
                </Grid>
                <Box style={{ margin: "30px 0px 0px 0px" }}>
                  <Stack direction="column" spacing={3}>
                    <Stack direction="column" justifyContent="center">
                      <CountTypography
                        text={"KẾT NỐI VỚI CHÚNG TÔI"}
                        color={TxtColor.txtWhite}
                        fontWeight={"bold"}
                        size="0.8rem"
                        padding="0px"
                        align="center"
                      />
                      <ListIconSocial justifyContent="center"/>
                    </Stack>
                    <Stack direction="column">
                      <CountTypography
                        text={"APP"}
                        color={TxtColor.txtWhite}
                        fontWeight={"bold"}
                        size="0.8rem"
                        padding="0px"
                        align="center"
                      />
                      <ListIconApp justifyContent="center"/>
                    </Stack>
                  </Stack>
                  <Stack direction="column" spacing={1} paddingTop="30px">
                    <CountTypography
                      text="ĐĂNG KÝ NHẬN TIN TỪ DYNAMIC"
                      color={TxtColor.txtWhite}
                      fontWeight={"bold"}
                      size="0.8rem"
                      padding="0px"
                      align="center"
                    />
                    <TextFieldWithButton
                      hintText="Địa chỉ email của bạn"
                      textButton="ĐĂNG KÝ"
                      colorBtn="secondary"
                      colorTextField="#FFFF"
                      justContent="center"
                    />
                    <CountTypography
                      text="CHÚNG TÔI CHẤP NHẬN"
                      color={TxtColor.txtWhite}
                      fontWeight={"bold"}
                      size="0.8rem"
                      padding="30px 0px 0px"
                      align="center"
                    />
                    <Stack direction="row" justifyContent="center">
                      {listImage.map((image) => (
                        <img
                          src={image}
                          style={{
                            width: "36px",
                            height: "24px",
                            margin: "0px 10px 0px 0px",
                          }}
                        />
                      ))}
                    </Stack>
                    <CountTypography
                      text="©2021 Dynamic bảo lưu tất cả các quyền"
                      color={TxtColor.txtThird}
                      fontWeight={"normal"}
                      size="0.8rem"
                      padding="50px 0px 2px"
                      align="center"
                    />
                    <Grid>
                      {listLink.map((item) => (
                        <>
                          <Link
                            style={{ margin: "0px 20px 0px 0px" }}
                            href={item.path}
                            fontSize="0.8rem"
                            color={TxtColor.txtThird}
                          >
                            {item.value}
                          </Link>
                        </>
                      ))}
                    </Grid>
                  </Stack>
                </Box>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  }
}
