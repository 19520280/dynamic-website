import { Stack, Typography } from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";
import numberWithCommas from "./../../utils/numberWithCommas";
import HeaderTypography from "./HeaderTypography";

const PriceTypography = ({ giaCu, gia, isMobile, justifyContent, point }) => {
  return (
    <Stack direction="row" spacing={1} justifyContent={justifyContent}>
      {giaCu > 0 ? (
        <Typography
          className="old-price"
          gutterBottom
          component="div"
          color="text.secondary"
          fontSize={isMobile ? "calc(0.8rem)" : "calc(0.875rem)"}
        >
          {numberWithCommas(giaCu)}
        </Typography>
      ) : null}
      {!point ? (
        <Typography
          gutterBottom
          component="div"
          sx={{ fontWeight: "medium" }}
          fontSize={isMobile ? "calc(0.8rem)" : "calc(0.875rem)"}
          className="price"
          color={giaCu ? SystemColor.error : SystemColor.main}
        >
          {numberWithCommas(gia)}
        </Typography>
      ) : null}
      {point ? (
        <HeaderTypography
          text={point + " điểm"}
          color={point > 0 ? "primary" : "secondary"}
        />
      ) : null}
    </Stack>
  );
};

export default PriceTypography;
