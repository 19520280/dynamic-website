import { Grid, Stack, Typography } from "@mui/material";

import ProductCard from "./../ProductCard/ProductCard";
import React from "react";

const RecentSeen = () => {
  return (
    <Stack direction="column" spacing={0} sx={{width:"100%"}}>
      <Typography
        fontWeight="bold"
        color="primary"
        fontSize="calc(0.8rem + 0.5vw)"
      >
        Sản phẩm bạn vừa xem
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 2, sm: 6, md: 8 }}
      >
        {Array.from(Array(4)).map((_, index) => (
          <Grid item xs={1} sm={2} md={2} key={index}>
            <ProductCard />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default RecentSeen;
