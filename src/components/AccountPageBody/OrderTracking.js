import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import HeaderTypography from "../Typographys/HeaderTypography";
import MemberInfo from "./../PaymentBody/UserInfo/MemberInfo";
import MoneyInfo from "../PaymentBody/MoneyInfo";
import PaymentCartLeftTable from "./../Tables/PaymentCartLeftTable";
import React from "react";
import { SystemColor } from "../../color";
import TrackingDetail from "../Steppers/TrackingDetail";
import numberWithCommas from "./../../utils/numberWithCommas";
import { timelines } from "./../../dataSources/TimelineTracking";

const OrderTracking = ({ data, isMobile }) => {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <HeaderTypography text="Chi tiết đơn hàng" />
        <HeaderTypography
          text="#127402 - Đang giao hàng"
          color={SystemColor.error}
        />
      </Stack>
      <Stack direction="column" spacing={4}>
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
        >
          <Stack
            direction="row"
            spacing={3}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography variant="button" fontWeight="bold" color="secondary">
              Đơn vị vận chuyển: <br /> Giao hàng nhanh
            </Typography>
            <div>
              <TrackingDetail timelines={timelines} />
            </div>
          </Stack>
        </Box>
        <Stack direction={isMobile ? "column" : "row"} spacing={2}>
          <InfoItem
            title="THÔNG TIN NGƯỜI MUA"
            body={<MemberInfo data={data} address={data.address.name[0]} />}
          />
          <InfoItem
            title="THÔNG TIN NGƯỜI NHẬN"
            body={<MemberInfo data={data} address={data.address.name[1]} />}
          />
          <InfoItem
            title="THÔNG TIN THANH TOÁN"
            body={<Typography>Thanh toán bằng MoMo</Typography>}
          />
        </Stack>
        <PaymentCartLeftTable
          total={
            <>
              <TotalInfo isMobile={isMobile} />
              <ButtonGroup />
            </>
          }
        />
      </Stack>
    </div>
  );
};

export default OrderTracking;

const InfoItem = ({ title, body }) => (
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
        {title}
      </Typography>
      {body}
    </Stack>
  </Box>
);
const TotalInfo = ({ isMobile }) => (
  <Stack
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="stretch"
    spacing={1.5}
    sx={{
      width: isMobile ? "100%" : "33%",
      paddingRight: isMobile ? null : 6,
      paddingBottom: 2,
    }}
  >
    <MoneyInfo title="Tạm tính" info={550000} isMoney />
    <MoneyInfo title="Phí vận chuyển" info={25000} isMoney />
    <MoneyInfo title="Giảm giá" info={25000} isMoney />
    <MoneyInfo title="Điểm dùng" info={0} />
    <Stack direction="row" alignItems="stretch" justifyContent="space-between">
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
        {numberWithCommas(550000)}
      </Typography>
    </Stack>
    <MoneyInfo title="Điểm thưởng" info={200} />
  </Stack>
);
const ButtonGroup = () => (
  <Stack
    direction="row"
    alignItems="stretch"
    justifyContent="space-between"
    spacing={2}
    sx={{ paddingRight: 6, paddingBottom: 2 }}
  >
    <Button variant="contained">Đã giao</Button>
    <Button variant="outlined">Liên hệ</Button>
    <Button variant="outlined">Chi tiết đơn hàng</Button>
  </Stack>
);
