import { Button, styled } from "@mui/material";

import React from "react";
import { SystemColor } from './../../color';

const CircleIconButton = ({ icon, backgroundColor, borderColor }) => {
  const BootstrapButton = styled(Button)({
    backgroundColor: backgroundColor ? backgroundColor : SystemColor.main,
    border: "1px solid",
    borderRadius: "50%",
    borderColor: borderColor ? borderColor : "transparent",
    margin: "0px",
    minWidth: "0px",
    padding: "8px",
    "&:hover": {
      backgroundColor: backgroundColor ? backgroundColor : SystemColor.main,
      opacity: "80%"
    },
  });
  return <BootstrapButton>{icon}</BootstrapButton>;
};

export default CircleIconButton;
