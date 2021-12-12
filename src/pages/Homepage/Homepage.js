import "./Homepage.css";

import { Box, Divider, Grid, Typography } from "@mui/material";

import Banner from "../../components/Banner/Banner";
import CatalogBanners from "./../../components/CatalogBanners/CatalogBanners";
import FeedbackBanner from "./../../components/Feedback/FeedbackBanner";
import ImageProductCardGrid from './../../components/GridProductCard/ImageProductCardGrid';
import ProducCardGrid from "../../components/GridProductCard/ProducCardGrid";
import React from "react";
import { SystemColor } from "../../color";

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
    <Divider sx={{backgroundColor:SystemColor.main, width:"100%"}}/>
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
       <ProducCardGrid/>
      </section>
      <section id="feedback"  className="containermain feedback-container">
        <FeedbackBanner />
      </section>
      <section
        id="mix-and-match"
        className="containermain fullwidthbanner-container"
      >
        <CustomTypography title="Phối đồ" />
       <ImageProductCardGrid/>
      </section>
    </section>
  );
};

export default Homepage;
