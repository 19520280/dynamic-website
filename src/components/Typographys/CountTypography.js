import React from "react";
import { Typography } from "@mui/material";

const CountTypography = ({ text, color, size, fontWeight, padding, align }) => {
  return (
    <Typography
      fontSize={size ? size : "calc(0.95rem)"}
      fontWeight={fontWeight ? fontWeight : "bold"}
      color={color ? color : "primary"}
      padding={padding ? padding : " 12px 0px 24px 0px"}
      align={align?align:"flex-start"}
    >
      {text}
    </Typography>
  );
};

export default CountTypography;
