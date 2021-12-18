import { Stack, Typography } from "@mui/material";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import React from "react";

const BlogDateTypography = ({ date, number, justifyContent, isMobile }) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent={justifyContent}
    >
      <Typography fontSize="calc(0.6rem + 0.5vw)" fontWeight="light">
        Ngày đăng: {date}
      </Typography>
      <FacebookOutlinedIcon
        size={isMobile ? "smaller" : "small"}
        sx={{ color: "rgb(25, 118, 210)" }}
      />
      <Typography fontSize="calc(0.6rem + 0.5vw)" fontWeight="light">
        {number}
      </Typography>
    </Stack>
  );
};

export default BlogDateTypography;
