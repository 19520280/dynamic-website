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
} from "@mui/material";

const slide1 =
  require("../../assets/images/banners/complex_slide01.jpg").default;

const slide2 =
  require("../../assets/images/banners/SaleBanner.png").default;

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
    width: "958px"
  }
});

const Right = () => {
  const classes = useStyle();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Container style={{width:"958px"}}>
      <Typography component="div" className={classes.header}>
        Áo
      </Typography>
      <Carousel autoPlay swipe animation="slide">
        <img className={classes.image} src={slide2} /> 
        <img className={classes.image} src={slide2} /> 
        <img className={classes.image} src={slide2} /> 
      </Carousel>
    </Container>
  );
};

export default Right;
