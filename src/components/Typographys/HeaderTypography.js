import React from "react";
import { Typography } from "@mui/material";

const HeaderTypography = ({ text, color, padding }) => {
  return (
    <Typography
      fontSize="calc(1rem + 0.6vw)"
      fontWeight="bold"
      color={color==null?"primary":color}
      padding= {padding?padding:" 12px 0px 12px 0px"}
    >
      {text}
    </Typography>
  );
};

export default HeaderTypography;
