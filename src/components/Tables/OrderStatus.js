import { Grid } from "@mui/material";
import React from "react";
import OrdersCaseTypography from "../Typographys/OrdersCaseTypography";
import PaymentCartLeftTable from "./PaymentCartLeftTable";

export default function OrderStatus({ status }) {
  return (
    <Grid sx={{ paddingTop: "12px" }}>
      <Grid item container justifyContent="flex-end">
        <OrdersCaseTypography text={status ? status : "TẤT CẢ"} />
      </Grid>
      <PaymentCartLeftTable />
    </Grid>
  );
}
