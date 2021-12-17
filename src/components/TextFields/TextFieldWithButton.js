import "./style.css";

import { Button, Stack, TextField } from "@mui/material";

import React from "react";

const TextFieldWithButton = ({ hintText, textButton, onClick }) => {
  return (
    <Stack
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <TextField
        id="outlined-size-small-textfield"
        placeholder={hintText}
        size="medium"
        inputProps={{
          style: {
            textAlign: "left",
            border: "1px",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          },
        }}
        sx={{
          width: "100%",
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
        }}
      />
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "max-content",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
      >
        {textButton}
      </Button>
    </Stack>
  );
};

export default TextFieldWithButton;
