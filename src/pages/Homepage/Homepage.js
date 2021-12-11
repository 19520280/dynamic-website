import "./Homepage.css";

import { Divider, Typography } from "@mui/material";

import Banner from "../../components/Banner/Banner";
import CatalogBanners from "./../../components/CatalogBanners/CatalogBanners";
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
    </Typography> </div>
);
const Homepage = () => {
  return (
    <section>
      <section id="sliders">
        <Banner />
      </section>
      <section id="catalogs" className="containermain">
        <CustomTypography title="Danh mục đề xuất" />
        <CatalogBanners />
      </section>
    </section>
  );
};

export default Homepage;
