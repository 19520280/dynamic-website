import { Box, Stack, Typography } from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";

const TagProCardGroup = ({ product }) => {
  const newTag = (
    <Box
      sx={{
        color: "white",
        p: "8px 8px 8px 8px",
        backgroundColor: SystemColor.success,
      }}
    >
      <Typography textAlign="center" fontSize="0.8rem">
        MỚI
      </Typography>
    </Box>
  );
  const soldOutTag = (
    <Box
      sx={{
        color: "white",
        p: "8px 8px 8px 8px",
        backgroundColor: SystemColor.error,
      }}
    >
      <Typography textAlign="center" fontSize="0.8rem">
        MỚI
      </Typography>
    </Box>
  );

  const saleTag = (giaCu, gia) => (
    <Box
      sx={{

        color: SystemColor.error,
        alignItems: "center",
        p: "8px 8px 8px 8px",
        backgroundColor: SystemColor.star,
      }}
    >
      <Typography fontSize="0.9rem" fontWeight="bold">
        {`${Math.round(((giaCu - gia) / giaCu) * 100)}%`}
      </Typography>
      <Typography fontSize="0.6rem">GIẢM</Typography>
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
