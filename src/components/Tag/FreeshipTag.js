import { Box, Button, Stack, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import { TxtColor } from "../../color";

const FreeshipTag = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        p: 2,
        height: "10%",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="flex-start">
        <LocalShippingIcon sx={{ color: "primary", height: "50%" }} />
        <span>
          <Typography>
            Mua thêm <Typography fontWeight="bold"> đ50,000 </Typography>để được
            miễn phí vận chuyển
          </Typography>
        </span>
        <Button variant="text" endIcon={<ChevronRightIcon />}>
          Mua thêm
        </Button>
      </Stack>
    </Box>
  );
};

export default FreeshipTag;
