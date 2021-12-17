import { Stack, Typography } from "@mui/material";

import CountTypography from "./CountTypography";
import React from "react";
import { SystemColor } from "../../color";
import numberWithCommas from "./../../utils/numberWithCommas";

const PriceTypography = ({ giaCu, gia, isMobile, justifyContent, point }) => {
  return (
    <Stack direction="row" spacing={1} justifyContent={justifyContent}>
      {giaCu > 0 ? (
        <Typography
          className="old-price"
          gutterBottom
          component="div"
          color="text.secondary"
          fontSize={isMobile ? "calc(0.8rem)" : "calc(1rem)"}
        >
          {numberWithCommas(giaCu)}
        </Typography>
      ) : null}
      {!point ? (
        <Typography
          gutterBottom
          component="div"
          sx={{ fontWeight: "medium" }}
          fontSize={isMobile ? "calc(0.8rem)" : "calc(1rem)"}
          className="price"
          color={SystemColor.error}
        >
          {numberWithCommas(gia)}
        </Typography>
      ) : null}
      {point ? <CountTypography text={point + " điểm"} /> : null}
    </Stack>
  );
};

export default PriceTypography;
