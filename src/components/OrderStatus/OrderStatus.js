import { Button, Grid, Stack } from "@mui/material";
import React from "react";
import OrdersCaseTypography from "../Typographys/OrdersCaseTypography";
import PaymentCartLeftTable from "../Tables/PaymentCartLeftTable";
import CountTypography from "../Typographys/CountTypography";

export default function OrderStatus({ status }) {
  return (
    <Grid sx={{ paddingTop: "12px" }}>
      <Grid item container justifyContent="flex-end">
        <OrdersCaseTypography text={status ? status : "TẤT CẢ"} />
      </Grid>
      <PaymentCartLeftTable color="transparent" />
      <Grid  style={{paddingTop:"12px"}}  item container justifyContent="flex-end">
        <CountTypography text={"Tổng cộng: 350,000 VNĐ"} />
      </Grid>
      <Grid style={{paddingBottom:"12px"}} item container justifyContent="flex-end">
        <Stack direction="row" spacing={1}>
          <Button variant="contained">LIÊN HỆ</Button>
          <Button variant="outlined">HỦY ĐƠN</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
