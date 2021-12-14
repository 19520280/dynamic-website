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
        borderRadius:"4px"
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
      >
        <div style={{display: "flex",   flexDirection:"row"}}>
          <LocalShippingIcon sx={{ color: "primary", height: "50%", marginRight:"8px" }} />
          <Typography display="inline">
            Mua thêm 
            <Typography fontWeight="bold" display="inline">
              {` đ50,000 `}
            </Typography>
            để được miễn phí vận chuyển
          </Typography>
        </div>
        <Button variant="text" endIcon={<ChevronRightIcon />}>
          Mua thêm
        </Button>
      </Stack>
    </Box>
  );
};

export default FreeshipTag;
