import { BgColor, SystemColor } from "../../color";
import { Container, Grid, Slide, useMediaQuery, useTheme } from "@mui/material";

import Filter from "./Filter";
import React from "react";
import Right from "./Right";
import { useLocation } from "react-router-dom";

const CategoryCasePage = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (isMobile) {
    return (
      <>
        <Grid item xs={8} xl={2.5}>
          <Container
            style={{
              backgroundColor: BgColor.mainBg,
            }}
          >
            <Filter />
          </Container>
        </Grid>
        <Grid item xs={12} xl={9.5}>
          <Container
            style={{
              backgroundColor: BgColor.mainBg,
              padding: "0px",
            }}
          >
            <Right />
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
              <Filter />
            </Container>
          </Grid>
          <Grid item xs={9.5} xl={9.5}>
            <Container
              style={{
                paddingLeft: "40px",
                backgroundColor: BgColor.mainBg,
              }}
            >
              <Right />
            </Container>
          </Grid>
        </Grid>
      </Slide>
    );
};

export default CategoryCasePage;
