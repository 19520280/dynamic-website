import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Divider,
  List,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function RatingDetailPanel({ size }) {
  const ItemRatingProgressCount = (rate, e, total) => (
    <Box sx={{ padding:"0px 0px 0px 20px", display: "flex", alignItems: "center" }}>
      <Box>
        <Rating
          name="read-only"
          value={rate}
          readOnly
          size={size < 200 ? "small" : "medium"}
        />
      </Box>
      <Box sx={{ width: size, mr: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={parseInt((e / total) * 100)}
        />
      </Box>
      <Box sx={{ width: 20 }}>
        <Typography variant="body2" color="text.secondary">
          {e}
        </Typography>
      </Box>
    </Box>
  );
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ padding:"0px 0px 0px 20px"}}>
          <h1>4.5</h1>
          <Divider
            orientation="horizontal"
            flexItem
            color="black"
            sx={{ height: 3 }}
          />
        </Box>
        <Box sx={{ marginLeft: 1 }}>
          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
          <Typography variant="inherit">72 đánh giá</Typography>
        </Box>
      </Box>
      <Box marginTop={1}>
        <List sx={{ maxWidth: 380, marginLeft: -1 }}>
          {ItemRatingProgressCount(5, 48, 72)}
          {ItemRatingProgressCount(4, 12, 72)}
          {ItemRatingProgressCount(3, 12, 72)}
          {ItemRatingProgressCount(2, 0, 72)}
          {ItemRatingProgressCount(1, 0, 72)}
        </List>
      </Box>
    </Box>
  );
}
