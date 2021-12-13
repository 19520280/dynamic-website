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
        sx={{
          p: 0,
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      />
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "0px",
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
