import "./BlogItem.css";

import { Button, Stack, Typography } from "@mui/material";

import BlogDateTypography from "./../Typographys/BlogDateTypography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

const BlogItem = ({ image, title, date, type, numberShare, index }) => {
  return (
    <Stack
      direction="column"
      spacing={1}
      alignItems="stretch"
      justifyContent="space-between"
      className="blog-item"
      sx={{ textOverflow: "ellipsis", height: "100%" }}
    >
      <div className="blog-item image">
        <img src={image} />
      </div>
      <Typography
        fontSize="calc(0.6rem + 0.5vw)"
        fontWeight="light"
        color="secondary"
      >
        {type === 2 ? "Beauty & Fashion" : "Tin tức"}
      </Typography>
      <Typography fontWeight="bold">{title}</Typography>
      <BlogDateTypography
        date={date}
        number={numberShare}
        justifyContent="flex-start"
      />
      <Typography fontWeight="light" color="secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: " flex-end",
        }}
      >
        <Button
          variant="text"
          endIcon={<ChevronRightIcon />}
          sx={{ width: "fit-content", right: "0%", cursor: "pointer" }}
        >
          Xem thêm
        </Button>
      </div>
    </Stack>
  );
};
export default BlogItem;
