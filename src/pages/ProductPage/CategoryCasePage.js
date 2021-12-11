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
} from "@mui/material";
import Right from "./Right";
const CategoryCasePage = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Grid container>
        <Grid item xs="auto">
          <Container
            style={{
              width: "282px",
              backgroundColor: "#FCFCFC",
            }}
          >
            <Filter />
          </Container>
        </Grid>
        <Grid item xs="auto">
          <Container style={{
              paddingLeft: "40px",
              backgroundColor: "#FCFCFC",
            }}>
            <Right />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default CategoryCasePage;
