import "./Homepage.css";

import { Box, Grid, Typography } from "@mui/material";

import Banner from "../../components/Banner/Banner";
import CatalogBanners from "./../../components/CatalogBanners/CatalogBanners";
import ProductCard from "./../../components/ProductCard/ProductCard";
import React from "react";

export const CustomTypography = ({ title }) => (
  <div>
    <Typography
      textAlign="center"
      fontSize="calc(1.2rem + 1vw)"
      fontWeight="bold"
      color="primary"
      margin={5}
    >
      {title}
    </Typography>{" "}
  </div>
);
const Homepage = () => {
  return (
    <section>
      <section id="sliders">
        <Banner />
      </section>
      <section
        id="catalogs"
        className="containermain fullwidthbanner-container"
      >
        <CustomTypography title="Danh mục đề xuất" />
        <CatalogBanners />
      </section>
      <section
        id="hot-products"
        className="containermain fullwidthbanner-container"
      >
        <CustomTypography title="Có gì hot?" />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 2, sm: 6, md: 8 }}
          >
            {Array.from(Array(8)).map((_, index) => (
              <Grid item xs={1} sm={2} md={2} key={index}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
    </section>
  );
};

export default Homepage;
