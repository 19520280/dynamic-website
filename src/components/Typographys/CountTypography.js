import React from "react";
import { Typography } from "@mui/material";

const CountTypography = ({ text }) => {
  return (
    <Typography
      fontSize="calc(1rem + 0.1vw)"
      fontWeight="bold"
      color="primary"
      padding=" 12px 0px 12px 0px"
    >
      {text}
    </Typography>
  );
};

export default CountTypography;
