import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import { SystemColor, TxtColor } from "../../color";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import TextFieldWithButton from "../TextFields/TextFieldWithButton";
import numberWithCommas from "./../../utils/numberWithCommas";

const moneyInfo = (title, info, isMoney) => (
  <Stack direction="row" alignItems="stretch" justifyContent="space-between">
    <Typography fontSize="0.875rem" fontWeight="medium" color="secondary">
      {title}
    </Typography>
    <Typography fontSize="0.875rem" fontWeight="bold" color="primary">
      {info
        ? isMoney
          ? numberWithCommas(info)
          : `${info} điểm`
        : "Chưa có thông tin"}
    </Typography>
  </Stack>
);
const PaymentInfo = ({ isMobile, shipFree }) => {
  return (
    <Stack
      direction="column"
      spacing={1}
      alignItems="stretch"
      sx={{ width: isMobile ? "100%" : "25%", minWidth: "max-conent" }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          borderRadius: "4px",
          border: "1px solid",
          borderColor: SystemColor.gray,
          width: "100%",
          minWidth: "min-content",
        }}
      >
        <Stack
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={2}
        >
          <Typography variant="button" fontWeight="bold" color="secondary">
            THÔNG TIN ĐƠN HÀNG
          </Typography>
          <TextFieldWithButton
            hintText="Nhập mã giảm giá"
            textButton="Áp dụng"
          />
          {moneyInfo("Tạm tính", 200000, true)}
          {shipFree ? moneyInfo("Phí vận chuyển", 50000, true) : null}
          {moneyInfo("Giảm giá", 20000, true)}
          <Divider />
          <Stack
            direction="row"
            alignItems="stretch"
            justifyContent="space-between"
          >
            <Typography
              fontSize="calc(1rem + 0.3vw)"
              fontWeight="bold"
              color="primary"
            >
              Tổng cộng
            </Typography>
            <Typography
              fontSize="calc(1rem + 0.3vw)"
              fontWeight="bold"
              color="primary"
            >
              {numberWithCommas(500000)}
            </Typography>
          </Stack>
          {moneyInfo("Điểm thưởng", 200)}
        </Stack>
      </Box>
      <Button variant="contained" size="large" sx={{ width: "100%" }}>
        Thanh toán
      </Button>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ChevronLeftIcon sx={{color:TxtColor.txtSecond}} />
        <Link underline="none"   color="secondary" sx={{cursor:"pointer"}}>Mua thêm</Link>
      </div>
    </Stack>
  );
};

export default PaymentInfo;
