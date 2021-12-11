import { Box, Grid } from "@mui/material";

import ProductCard from './../ProductCard/ProductCard';
import React from 'react'

const ProducCardGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 6, md: 8 }}
        >
          {Array.from(Array(8)).map((_, index) => (
            <Grid item xs={1} sm={2} md={2} key={index}>
              <ProductCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    )
}

export default ProducCardGrid
