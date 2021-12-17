import React from "react";
import { Typography } from "@mui/material";

const CountTypography = ({ text }) => {
  return (
    <Typography
      fontSize="calc(0.95rem)"
      fontWeight="bold"
      color="primary"
      padding=" 12px 0px 24px 0px"
    >
      {text}
    </Typography>
  );
};

export default CountTypography;
