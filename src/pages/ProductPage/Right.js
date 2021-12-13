import "./style.css";

import * as actions from "../../redux/actions/index";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  Pagination,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ProducCardGrid from "../../components/GridProductCard/ProducCardGrid";
import Carousel from "react-material-ui-carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import React from "react";
import { SaleBannerState$ } from "../../redux/selectors/index";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@material-ui/core";
import { SystemColor, BgColor } from "../../color";

const slide2 = require("../../assets/images/banners/SaleBanner.png").default;

export const CustomTypography = ({ title }) => (
  <div className="title">
    <Typography
      textAlign="center"
      fontSize="calc(1.2rem + 1vw)"
      fontWeight="bold"
      color="primary"
    >
      {title}
    </Typography>
    <Divider sx={{ backgroundColor: SystemColor.main, width: "100%" }} />
  </div>
);
const useStyle = makeStyles({
  header: {
    margin: "0px",
    padding: " 12px 0px 12px 0px",
    fontStyle: "normal",
    fontWeight: "bold",
    color: SystemColor.main,
    fontSize: "calc(1.2rem + 1vw)",
    backgroundColor: BgColor.mainBg,
    paddingLeft: "5%",
    // maxWidth: "958px",
  },
  image: {
    maxWidth: "100%",
    height: "100%",
    // width: "auto\9";
  },
});

const Right = () => {
  const dispatch = useDispatch();
  const SaleBanner = useSelector(SaleBannerState$);
  const setSaleBanner = React.useCallback(() => {
    dispatch(actions.showSaleBanner(false));
  }, [dispatch]);
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const menuItems = [
    { value: 2, text: "BÁN CHẠY" },
    { value: 3, text: "MỚI NHẤT" },
    { value: 4, text: "GIÁ CAO" },
    { value: 5, text: "GIÁ THẤP" },
  ];

  return (
    <Container style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <Typography component="div" className={classes.header}>
        { SaleBanner.payload == true
          ? "Kết quả tìm kiếm"
          : pathnames[0] == "Ao"
          ? "Áo"
          : pathnames[0] == "Quan"
          ? "Quần"
          : pathnames[0] == "Phu-kien"
          ? "Phụ kiện"
          : ""}
      </Typography>
      <Box
        xs={12}
        xl={9.5}
        style={{
          display: SaleBanner.payload ? "none" : "block",
          height: "auto",
        }}
      >
        <Carousel autoPlay swipe animation="slide">
          <div className="container">
            <img src={slide2} alt="Avatar" className={classes.image} />
            <div className="middle">
              <Button
                variant="contained"
                className="text"
                onClick={() => {
                  history.push("/");
                }}
              >
                XEM THÊM
              </Button>
            </div>
          </div>
          <div className="container">
            <img src={slide2} alt="Avatar" className={classes.image} />
            <div className="middle">
              <Button
                variant="contained"
                className="text"
                onClick={() => {
                  history.push("/");
                }}
              >
                XEM THÊM
              </Button>
            </div>
          </div>
          <div className="container">
            <img src={slide2} alt="Avatar" className={classes.image} />
            <div className="middle">
              <Button
                variant="contained"
                className="text"
                onClick={() => {
                  history.push("/");
                }}
              >
                XEM THÊM
              </Button>
            </div>
          </div>
        </Carousel>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext indicatorColor="primary" value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              defaultValue={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="primary tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab value="1" label="PHỔ BIẾN" />
              {menuItems.map((item) => (
                <Tab value={item.value} label={item.text} />
              ))}
            </Tabs>
          </Box>
          <TabPanel value="1"></TabPanel>
          {menuItems.map((item) => (
            <TabPanel value={item.value}></TabPanel>
          ))}
        </TabContext>
      </Box>
      <section
        id="hot-products"
        className="containermain.fullwidthbanner-container"
      >
        <ProducCardGrid />
      </section>
      <Stack alignItems="center">
        <Pagination
          count={11}
          defaultPage={6}
          color="primary"
          style={{ marginTop: 40, marginBottom: 40 }}
        />
      </Stack>
      <Typography component="div" className={classes.header}>
        Sản phẩm bạn vừa xem
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 6, md: 8 }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={1} sm={2} md={2} key={index}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Right;
