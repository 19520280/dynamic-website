import * as React from "react";
import {
  Box,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
export default function RatingInfoPanel() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ marginRight: 1 }}>
        <Typography variant="h5">4.5</Typography>
        <Divider orientation="horizontal" flexItem color="black" />
      </Box>
      <Box>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
      <Box sx={{ marginRight: 1 }}>
        <Typography variant="h5">72</Typography>
        <Divider orientation="horizontal" flexItem={false} color="black" />
      </Box>
      <Box>
        <Typography>Đánh giá</Typography>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
      <Box sx={{ marginRight: 1 }}>
        <Typography variant="h5">100</Typography>
        <Divider orientation="horizontal" color="black" />
      </Box>
      <Box>
        <Typography>Đã bán</Typography>
      </Box>
    </Box>
  );
}
