import React from "react";
import { Box, Grid } from "@mui/material";
import WishListCard from "./WishListCard";

export default function WishListCardGrid({ value }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 4 }}
          justifyContent="center"
          // columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {Array.from(Array(value)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <WishListCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
