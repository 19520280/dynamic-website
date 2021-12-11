import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Typography, Box, IconButton, List, Stack, useMediaQuery, useTheme } from "@mui/material";

const useStyle = makeStyles({
  header: {
    margin: "0px",
    padding: " 12px 0px 12px 0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "48px",
    color: "#303557",
    backgroundColor: "#FCFCFC",
  },

});

const Right = () => {
  const classes = useStyle();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <Typography component="div" className={classes.header}>
  Áo
</Typography>
  );
};

export default Right;
