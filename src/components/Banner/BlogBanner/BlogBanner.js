import "./BlogBanner.css";

import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import BlogDateTypography from "./../../Typographys/BlogDateTypography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

const blogBanner =
  require("../../../assets/images/banners/magazine.webp").default;

const BlogBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
        <BlogDateTypography
          date="18/12/2021"
          number="1k"
          justifyContent="center"
          isMobile={isMobile}
        />
        <Typography fontSize="1.2vw" fontWeight="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Typography>
        <Button
          endIcon={<ChevronRightIcon />}
          sx={{ width: "fit-content", color: "white", cursor: "pointer" }}
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
};

export default BlogBanner;
