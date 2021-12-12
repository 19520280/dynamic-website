import { Button, styled } from "@mui/material";

import React from "react";
import { SystemColor } from "./../../color";

const CircleIconButton = ({title, icon, onClick, backgroundColor, borderColor }) => {
  const BootstrapButton = styled(Button)({
    backgroundColor: backgroundColor ? backgroundColor : SystemColor.main,
    border: "1px solid",
    borderRadius: "50%",
    borderColor: borderColor ? borderColor : "transparent",
    margin: "0px",
    minWidth: "0px",
    padding: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: backgroundColor ? backgroundColor : SystemColor.main,
    },
  });
  return <BootstrapButton title={title} onClick={onClick} >{icon}</BootstrapButton>;
};

export default CircleIconButton;
