import { Stack, Typography } from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";
import numberWithCommas from "./../../utils/numberWithCommas";

const PriceTypography = ({ giaCu, gia, isMobile }) => {
  return (
    <Stack direction="row" spacing={1}>
      {giaCu>0 ? (
        <Typography
          className="old-price"
          gutterBottom
          component="div"
          color="text.secondary"
          fontSize={isMobile ? "0.9rem" : "1rem"}
        >
          {numberWithCommas(giaCu)}
        </Typography>
      ) : null}
      <Typography
        gutterBottom
        component="div"
        sx={{ fontWeight: "medium" }}
        fontSize={isMobile ? "0.9rem" : "1rem"}
        className="price"
        color={giaCu ? SystemColor.error : SystemColor.main}
      >
        {numberWithCommas(gia)}
      </Typography>
    </Stack>
  );
};

export default PriceTypography;