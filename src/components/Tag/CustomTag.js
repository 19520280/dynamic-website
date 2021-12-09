import { Box } from "@mui/material";
import { BtnColor } from "./../../color";
import React from "react";

const CustomTag = ({ text, bgColor, txtColor }) => {
  return (
    <Box
      sx={{
        color: txtColor ? txtColor : "white",
        p: "8px 8px 8px 8px",
        backgroundColor: bgColor ? bgColor : BtnColor.btnMainBg,
      }}
    >
      {text}
    </Box>
  );
};

export default CustomTag;
