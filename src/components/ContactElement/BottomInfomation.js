import { Stack, Typography } from "@mui/material";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";

const InfomationItem = ({ icon, title, body }) => (
  <Stack direction="column" spacing={0.8} alignItems="center">
    {icon}
    <Typography variant="button" color="secondary">
      {title}
    </Typography>
    <Typography color="secondary" align="center">
      {body}
    </Typography>
  </Stack>
);
const BottomInfomation = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      spacing={2}
      p={2}
    >
      <InfomationItem
        icon={<LocationOnIcon size="large" color="secondary" />}
        title="Địa chỉ"
        body={
          <>
            Khu phố 6, P.Linh Trung, <br /> Tp.Thủ Đức, Tp.Hồ Chí Minh
          </>
        }
      />
      <InfomationItem
        icon={<PhoneIcon size="large" color="secondary" />}
        title="Điện thoại"
        body="(028) 372 52002"
      />
      <InfomationItem
        icon={<EmailIcon size="large" color="secondary" />}
        title="Email"
        body="info@uit.edu.vn"
      />
      <InfomationItem
        icon={<AccessTimeFilledIcon size="large" color="secondary" />}
        title="Thời gian"
        body={
            <>
              08h00 - 22h00 <br /> Thứ 2 - Chủ nhật
            </>
          }
      />
    </Stack>
  );
};

export default BottomInfomation;
