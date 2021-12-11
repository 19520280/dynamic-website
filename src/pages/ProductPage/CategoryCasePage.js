import React from "react";
import { useLocation } from "react-router-dom";
import Filter from "./Filter";
import {
  Box,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
  Zoom,
  Fade,
  Slide
} from "@mui/material";
import Right from "./Right";
const CategoryCasePage = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Slide direction="up" in={true}><Grid container spacing={0}>
    <Grid item xs={2.5}>
      <Container
        style={{
      //    width: "282px",
          backgroundColor: "#FCFCFC",
        }}
      >
        <Filter />
      </Container>
    </Grid>
    <Grid item xs={9.5}>
      <Container style={{
          paddingLeft: "40px",
          backgroundColor: "#FCFCFC",
        }}>
        <Right />
      </Container>
    </Grid>
  </Grid></Slide>
      
  );
};

export default CategoryCasePage;
