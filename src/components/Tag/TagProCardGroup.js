import { Box, Stack, Typography } from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";

const TagProCardGroup = ({ product }) => {
  const newTag = (
    <Box
      sx={{
        color: "white",
        p: "6px",
        backgroundColor: SystemColor.main,
      }}
    >
      <Typography textAlign="center">MỚI</Typography>
    </Box>
  );
  const soldOutTag = (
    <Box
      sx={{
        color: "white",
        p: "6px",
        backgroundColor: SystemColor.error,
      }}
    >
      <Typography textAlign="center" >
        HẾT HÀNG
      </Typography>
    </Box>
  );

  const saleTag = (giaCu, gia) => (
    <Box
      sx={{
        color: "white",
        alignItems: "center",
        p: "8px",
        backgroundColor: SystemColor.error,
      }}
    >
      <Typography fontSize="calc(0.7rem + 0.2vw)" fontWeight="bold">
        {`${Math.round(((giaCu - gia) / giaCu) * 100)}%`}
      </Typography>
      <Typography fontSize="calc(0.5rem + 0.2vw)">GIẢM</Typography>
    </Box>
  );

  return product.tonKho === 0 ? (
    soldOutTag
  ) : (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={0.5}
    >
      {product.newTag ? newTag : null}
      {product.giaCu ? saleTag(product.giaCu, product.gia) : null}
    </Stack>
  );
};

export default TagProCardGroup;
