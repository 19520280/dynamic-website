import "./Homepage.css";

import { Box, Divider, Grid, Typography } from "@mui/material";

import Banner from "./../../components/Banner/Homepage/Banner";
import CatalogBanners from "../../components/Banner/CatalogBanners/CatalogBanners";
import FeedbackBanner from "./../../components/Feedback/FeedbackBanner";
import MixMatchCardGrid from "../../components/GridProductCard/MixMatchCardGrid";
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
    <Divider sx={{ backgroundColor: SystemColor.main, width: "100%" }} />
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CatalogBanners />
        </div>
      </section>
      <section
        id="hot-products"
        className="containermain fullwidthbanner-container"
      >
        <CustomTypography title="Có gì hot?" />
        <ProducCardGrid />
      </section>
      <section id="feedback" className="containermain feedback-container">
        <FeedbackBanner />
      </section>
      <section
        id="mix-and-match"
        className="containermain fullwidthbanner-container"
      >
        <CustomTypography title="Phối đồ" />
        <MixMatchCardGrid />
      </section>
    </section>
  );
};

export default Homepage;
