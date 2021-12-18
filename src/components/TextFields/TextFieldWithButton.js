import "./style.css";

import { Button, Stack, TextField, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { SystemColor } from "../../color";

import React from "react";

const TextFieldWithButton = ({
  hintText,
  textButton,
  onClick,
  colorBtn,
  colorTextField,
}) => {
  return (
    <Stack
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <Grid item>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            border: "1px solid",
            borderRadius: "4px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderColor: SystemColor.gray,
            backgroundColor: "transparent",
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              color: colorTextField ? colorTextField : SystemColor.main,
              fontSize: "small",
            }}
            placeholder={hintText}
            inputProps={{ "aria-label": { hintText } }}
          />
        </Paper>
      </Grid>
      <Button
        onClick={onClick}
        variant="contained"
        color={colorBtn ? colorBtn : "primary"}
        sx={{
          border: colorBtn?"1px solid gray":"0px",
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
