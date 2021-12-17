import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import PointCartLeftTable from "../Tables/PointCartLeftTable";

export default function PointStatus({ status }) {
  return (
    <Grid sx={{ paddingTop: "12px" }}>
      
      <PointCartLeftTable />
      
    </Grid>
  );
}
