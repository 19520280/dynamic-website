import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import {
  Typography,
  Box,
  IconButton,
  List,
  Stack,
  useMediaQuery,
  useTheme,
  Container,
  Tab,
  Tabs,
} from "@mui/material";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

const slide1 =
  require("../../assets/images/banners/complex_slide01.jpg").default;

const slide2 = require("../../assets/images/banners/SaleBanner.png").default;

const useStyle = makeStyles({
  header: {
    margin: "0px",
    padding: " 12px 0px 12px 0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "48px",
    color: "#303557",
    backgroundColor: "#FCFCFC",
  },
  image: {
    height: "324px",
    width: "958px",
  },
});

const Right = () => {
  const classes = useStyle();
  const location = useLocation();
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
    <Container style={{ width: "958px" }}>
      <Typography component="div" className={classes.header}>
        Áo
      </Typography>
      <Carousel autoPlay swipe animation="slide">
        <img className={classes.image} src={slide2} />
        <img className={classes.image} src={slide2} />
        <img className={classes.image} src={slide2} />
      </Carousel>
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
            >
            <Tab value="1" label="PHỔ BIẾN" />
              {menuItems.map((item) => (
                <Tab value={item.value} label={item.text} />
              ))}
            </Tabs>
          </Box>
          <TabPanel value="1">Item PHỔ BIẾN</TabPanel>

          {menuItems.map((item) => (
            <TabPanel value={item.value}>Item {item.text}</TabPanel>
          ))}
        </TabContext>
      </Box>
    </Container>
  );
};

export default Right;
