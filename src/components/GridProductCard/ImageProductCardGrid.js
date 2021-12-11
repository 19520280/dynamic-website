import { Box, Grid } from "@mui/material";

import ImageProductCard from '../ProductCard/ImageProductCard'
import React from "react";
import { products } from "../../dataSources/Products";

const sanPham = products[0];

const ImageProductCardGrid = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 2, sm: 6, md: 8 }}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Grid item xs={1} sm={2} md={2} key={index}>
                <ImageProductCard sanPham={sanPham} indexSelected={0} />
              </Grid>
            ))}
          </Grid>
        </Box>
    )
}

export default ImageProductCardGrid
