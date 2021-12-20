import * as React from "react";
import { Box, Divider, Rating, Typography } from "@mui/material";

export default function RatingInfoPanel({ size }) {
  const [sizeNumber, setSizeNumber] = React.useState(19);
  const [sizeChar, setSizeChar] = React.useState(14);
  React.useEffect(() => {
    if (size === "small") {
      setSizeChar(12);
      setSizeNumber(14);
    } else if (size === "middle") {
      setSizeChar(13);
      setSizeNumber(14);
    }
  }, [size]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ marginRight: 1 }}>
        <Typography fontSize={sizeNumber} fontWeight={500}>
          4.5
        </Typography>
        <Divider orientation="horizontal" flexItem color="black" />
      </Box>
      <Box>
        <Rating
          name="read-only"
          value={4.5}
          precision={0.5}
          readOnly
          size={size === "middle" ? "small" : size}
        />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
      <Box sx={{ marginRight: 1 }}>
        <Typography fontSize={sizeNumber} fontWeight={500}>
          72
        </Typography>
        <Divider orientation="horizontal" flexItem={false} color="black" />
      </Box>
      <Box>
        <Typography fontSize={sizeChar}>Đánh giá</Typography>
      </Box>
      <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
      <Box sx={{ marginRight: 1 }}>
        <Typography fontSize={sizeNumber} fontWeight={500}>
          100
        </Typography>
        <Divider orientation="horizontal" color="black" />
      </Box>
      <Box>
        <Typography fontSize={sizeChar}>Đã bán</Typography>
      </Box>
    </Box>
  );
}
