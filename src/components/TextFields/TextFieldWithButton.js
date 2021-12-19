import "./style.css";

import { Button, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";

import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import React from "react";
import { SystemColor } from "../../color";

const TextFieldWithButton = ({
  fullWidth,
  hintText,
  textButton,
  onClick,
  colorBtn,
  colorTextField,
  justContent,
}) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      spacing={0}
      direction="row"
      justifyContent={justContent ? justContent : "center"}
      width={fullWidth ? "100%" : null}
    >
      <Grid item sx={{ width:fullWidth ? "100%" : null}}>
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
      <Grid item>
        <Button
          onClick={onClick}
          variant="contained"
          color={colorBtn ? colorBtn : "primary"}
          sx={{
            border: "1px solid gray",
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
      </Grid>
    </Stack>
  );
};

export default TextFieldWithButton;
