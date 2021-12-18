import "./BlogBanner.css";

import React from "react";
import { Typography } from "@mui/material";

const blogBanner =
  require("../../../assets/images/banners/magazine.webp").default;

const BlogBanner = () => {
  return (
    <div className="banner-blog-container">
      <div
        className="banner-blog-container image"
        style={{ backgroundImage: `url(${blogBanner})` }}
      />
      <div className="text">
        <Typography varient="h1" fontSize="3.1vw" fontWeight="bold">
          Học Tóc Tiên, Bích Phương phối đồ chất đi chơi
        </Typography>
        <Typography fontSize="1vw" fontWeight="light">
        Ngày đăng: 18/12/2021
        </Typography>
        <Typography fontSize="1.2vw" fontWeight="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Typography>
      </div>
    </div>
  );
};

export default BlogBanner;
