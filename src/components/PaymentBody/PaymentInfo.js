import { Box, Button, Divider, Link, Stack, Typography } from "@mui/material";
import { SystemColor, TxtColor } from "../../color";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";
import TextFieldWithButton from "../TextFields/TextFieldWithButton";
import numberWithCommas from "../../utils/numberWithCommas";

const moneyInfo = (title, info, isMoney) => (
  <Stack direction="row" alignItems="stretch" justifyContent="space-between">
    <Typography fontWeight="medium" color="secondary">
      {title}
    </Typography>
    <Typography  fontWeight="bold" color="primary">
      {info
        ? isMoney
          ? numberWithCommas(info)
          : `${info} điểm`
        : "Chưa có thông tin"}
    </Typography>
  </Stack>
);
const PaymentInfo = ({
  isMobile,
  shipFree,
  isAccount,
  onClickButton,
  textLink,
  onClickLink,
}) => {
  return (
    <Stack
      direction="column"
      spacing={1}
      alignItems="stretch"
      sx={{
        width: isMobile ? "100%" : "30%",
        minWidth: "max-conent",
      position: "sticky",
      top:"12px",
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: "white",
          borderRadius: "8px",
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
          spacing={1.5}
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
          {isAccount ? (
            moneyInfo("Điểm thưởng", 200)
          ) : (
            <Typography color="secondary" fontStyle="italic">
              Đăng nhập để nhận điểm thưởng
            </Typography>
          )}
        </Stack>
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{ width: "100%" }}
        onClick={onClickButton}
      >
        Thanh toán
      </Button>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ChevronLeftIcon sx={{ color: TxtColor.txtSecond }} />
        <Link
          underline="none"
          color="secondary"
          fontSize="medium"
          sx={{ cursor: "pointer" }}
          onClick={onClickLink}
        >
          {textLink}
        </Link>
      </div>
    </Stack>
  );
};

export default PaymentInfo;
