import { Button, Grid, Stack } from "@mui/material";
import React, {useState} from "react";
import OrdersCaseTypography from "../Typographys/OrdersCaseTypography";
import PaymentCartLeftTable from "../Tables/PaymentCartLeftTable";
import CountTypography from "../Typographys/CountTypography";
import { useHistory } from "react-router-dom";

export default function OrderStatus({ status }) {
  const history = useHistory();
  const [Status, setStatus]=useState(false);
  const onClick =()=>{
    setStatus(true);
    console.log(Status);
  }
  const onClick1 =()=>{
    history.push("/Lien-he");
  }
  return (
    <Grid sx={{ paddingTop: "12px" }}>
      <Grid item container justifyContent="flex-end">
        <OrdersCaseTypography text={status ? status : "TẤT CẢ"} />
      </Grid>
      <PaymentCartLeftTable color="transparent" />
      <Grid  style={{paddingTop:"12px"}}  item container justifyContent="flex-end">
        <CountTypography text={"Tổng cộng: 350,000 VNĐ"} />
      </Grid>
      <Grid style={{paddingBottom:"24px"}} item container justifyContent="flex-end">
        <Stack direction="row" spacing={1}>
          <Button disabled={status=="ĐÃ HỦY"?true:Status} onClick={onClick1} variant="contained">LIÊN HỆ</Button>
          <Button disabled={status=="ĐÃ HỦY"|| status=="ĐANG GIAO"|| status=="ĐÃ GIAO"|| status=="CHỜ LẤY HÀNG"?true:Status} onClick={onClick} variant="outlined">HỦY ĐƠN</Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
