import { Button, IconButton, styled } from "@mui/material";
import { Circle, Square } from "@mui/icons-material";
import React, { useState } from "react";

import { SystemColor } from "./../../color";

const SizeButton = ({ size, selected, setSelected, only }) => {
  const [active, setActive] = useState(size === selected);

  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    backgroundColor: "transparent",
    border: "1.5px solid",
    borderColor:
      only && size === selected
        ? "primary"
        : !only && active
        ? "primary"
        : SystemColor.gray,
    fontSize: 14,
    fontWeight: only && size === selected ? "bold" : "normal",
    width: "50px",
    lineHeight: 1.5,
    margin: "0px",
    minWidth: "0px",
    display: "inline-block",
    "&:hover": {
      borderColor: "primary",
      boxShadow: "secondary",
      backgroundColor: SystemColor.gray,
    },
    "&:active": {
      boxShadow: SystemColor.gray,
      fontWeight: "bold",
      borderColor: SystemColor.gray,
    },
    "&:focus": {
      boxShadow: SystemColor.gray,
      fontWeight: "bold",
    },
  });
  return (
    <BootstrapButton
      onClick={() => {
        if (!active || only) {
          setSelected(size);
        } else {
          setSelected(null);
        }
        setActive(!active);
      }}
    >
      {size}
    </BootstrapButton>
  );
};

export default SizeButton;
