import { Stack, Typography } from "@mui/material";

import AddressCard from "./../../AddressCard/AddressCard";
import React from "react";

const MemberInfo = ({ data, address }) => {
  const { home, town, district, province } = address;
  return (
    <Stack direction="column" sx={{ marginTop: 2 }}>
      <Typography fontWeight="bold" fontSize="large" display="inline">
        {data.realName}
        {data.address.isDefault === address.key ? (
          <Typography color="secondary" sx={{ marginLeft: 1 }} display="inline">
            [Mặc định]
          </Typography>
        ) : null}
      </Typography>

      <Typography>Số điện thoại: {data.phoneNumber}</Typography>
      <Typography>
        Địa chỉ: {home}, {town}, {district}, {province}
      </Typography>
    </Stack>
  );
};

export default MemberInfo;
