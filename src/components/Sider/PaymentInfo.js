import { Box, Divider, Stack, Typography } from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";
import TextFieldWithButton from "../TextFields/TextFieldWithButton";
import numberWithCommas from "./../../utils/numberWithCommas";

const moneyInfo = (title, info, isMoney) => (
  <Stack direction="row" alignItems="stretch" justifyContent="space-between">
    <Typography fontSize="1rem" fontWeight="bold" color="secondary">
      {title}
    </Typography>
    <Typography fontSize="1rem" fontWeight="bold" color="primary">
      {info
        ? isMoney
          ? numberWithCommas(info)
          : `${info} điểm`
        : "Chưa có thông tin"}
    </Typography>
  </Stack>
);
const PaymentInfo = () => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "white",
        borderRadius: "4px",
        border:"1px solid",
        borderColor: SystemColor.gray,
        width:"25%"
      }}
    >
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Typography fontSize="18px" fontWeight="bold" color="secondary">
          THÔNG TIN ĐƠN HÀNG
        </Typography>
        <TextFieldWithButton hintText="Nhập mã giảm giá" textButton="Áp dụng" />
        {moneyInfo("Tạm tính", 200000, true)}
        {moneyInfo("Phí vận chuyển")}
        {moneyInfo("Giảm giá", 20000, true)}
        <Divider />
        <Stack
          direction="row"
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Typography
            fontSize="calc(1rem + 0.5vw)"
            fontWeight="bold"
            color="primary"
          >
            Tổng cộng
          </Typography>
          <Typography
            fontSize="calc(1rem + 0.5vw)"
            fontWeight="bold"
            color="primary"
          >
            {numberWithCommas(500000)}
          </Typography>
        </Stack>{" "}
        {moneyInfo("Điểm thưởng", 200)}
      </Stack>
    </Box>
  );
};

export default PaymentInfo;
