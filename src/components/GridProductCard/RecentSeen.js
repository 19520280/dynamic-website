import { Grid, Stack, Typography } from "@mui/material";

import ImageProductCardGrid from "./ImageProductCardGrid";
import ProducCardGrid from "./ProducCardGrid";
import ProductCard from "./../ProductCard/ProductCard";
import React from "react";

const RecentSeen = () => {
  return (
    <Stack direction="column" spacing={0} sx={{ width: "100%" }}>
      <Typography
        fontWeight="bold"
        color="primary"
        fontSize="calc(0.8rem + 0.5vw)"
      >
        Sản phẩm bạn vừa xem
      </Typography>
      <ProducCardGrid lengthGrid={4} />
    </Stack>
  );
};

export default RecentSeen;
