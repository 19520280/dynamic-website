import { Button, styled } from "@mui/material";

import React from "react";

const CircleIconButton = ({ icon, backgroundColor, borderColor }) => {
  const BootstrapButton = styled(Button)({
    backgroundColor: backgroundColor ? backgroundColor : "#303537",
    border: "1px solid",
    borderRadius: "50%",
    borderColor: borderColor ? borderColor : "transparent",
    margin: "0px",
    minWidth: "0px",
    padding: "8px",
    "&:hover": {
      backgroundColor: backgroundColor ? backgroundColor : "#303537",
      opacity: "80%"
    },
  });
  return <BootstrapButton>{icon}</BootstrapButton>;
};

export default CircleIconButton;
