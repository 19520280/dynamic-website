import { Button, IconButton, styled } from "@mui/material";
import React, { useState } from "react";

import { Circle } from "@mui/icons-material";

const ColorButton = ({ color, selected, setSelected, only }) => {
  const [active, setActive] = useState(color === selected);

  console.log("ColorButton", selected);
  const BootstrapButton = styled(Button)({
    backgroundColor: "transparent",
    border: "1px solid",
    borderRadius: "50%",
    borderColor:
      only && color === selected
        ? "primary"
        : !only && active
        ? "primary"
        : "transparent",
    margin: "0px",
    minWidth: "0px",
    padding: "0px",
    "&:hover": {
      borderColor: "#303537",
      boxShadow: "#FCFCFC",
    },
    "&:active": {
      borderColor: "#303537",
    },
  });
  return (
    <BootstrapButton
      onClick={() => {
        if (!active || only) {
          setSelected(color);
        } else {
          setSelected(null);
        }
        setActive(!active);
      }}
    >
      <Circle
        style={{
          //border: color === "white" ? "1px solid" : undefined,
          border: "1px solid",
          borderColor: "#BEBEBE",
          color: color,
          minWidth: "0px",
          padding: "0px",
          margin: "0px",
          borderRadius: "50%",
        }}
        fontSize="medium"
      />
    </BootstrapButton>
  );
};

export default ColorButton;
