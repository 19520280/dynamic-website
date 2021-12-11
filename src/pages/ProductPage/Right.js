import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
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
  Button,
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
    // maxWidth: "958px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    // width: "auto\9";
  },
});

const Right = () => {
  const classes = useStyle();
  const history = useHistory();
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
    <Container style={{ maxWidth: "100%" }}>
      <Typography component="div" className={classes.header}>
        Áo
      </Typography>
      <Carousel autoPlay swipe animation="slide" Button>
        {/* <div className="container">
          <img src={slide2} alt="" className={classes.image} />
          <p className="title">card title</p>
          <div className="overlay"></div>
          <div className="button">
            <a href="#"> BUTTON </a>
          </div>
        </div> */}

        <div className="container">
          <img src={slide2} alt="Avatar" className={classes.image} />
          <div className="middle">
            <Button variant="contained" className="text" onClick={()=>{history.push("/")}}>
              XEM THÊM
            </Button>
          </div>
        </div>
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
