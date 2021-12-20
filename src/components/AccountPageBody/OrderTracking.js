import { Box } from "@mui/material";
import HeaderTypography from "../Typographys/HeaderTypography";
import React from "react";
import { SystemColor } from "../../color";

const OrderTracking = () => {
  return (
    <div>
      <HeaderTypography text="Chi tiết đơn hàng" />
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          border: "1px solid",
          borderColor: SystemColor.gray,
          borderRadius: "4px",
          backgroundColor: "white",
          p: "36px 40px",
          marginTop: 3,
        }}
      ></Box>
    </div>
  );
};

export default OrderTracking;
