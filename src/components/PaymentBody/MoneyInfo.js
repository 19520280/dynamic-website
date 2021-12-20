import { Stack, Typography } from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";
import numberWithCommas from "./../../utils/numberWithCommas";

export const MoneyInfo = ({title, info, isMoney}) => (
  <Stack direction="row" alignItems="stretch" justifyContent="space-between">
    <Typography fontWeight="medium" color="secondary">
      {title}
    </Typography>
    <Typography
      fontWeight="bold"
      color={title === "Giảm giá" ? SystemColor.error : "primary"}
    >
      {info
        ? isMoney
          ? `${title === "Giảm giá" ? "-" : ""} ${numberWithCommas(info)}`
          : `${info} điểm`
        : "Chưa có thông tin"}
    </Typography>
  </Stack>
);

export default MoneyInfo;
