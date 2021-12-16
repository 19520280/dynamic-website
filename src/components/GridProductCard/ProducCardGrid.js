import { Box, Grid } from "@mui/material";

import ProductCard from "./../ProductCard/ProductCard";
import React from "react";
import { products } from "../../dataSources/Products";

const ProducCardGrid = ({ phanLoai, lengthGrid }) => {
  React.useEffect(() => {
    if (lengthGrid) {
      products.length = lengthGrid;
    }
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 2, sm: 6, md: 8 }}
      >
        {products.map((sanPham, index) => {
          if (phanLoai) {
            if (sanPham.phanLoai == phanLoai) {
              return (
                <Grid item xs={1} sm={2} md={2} key={index}>
                  <ProductCard sanPham={sanPham} />
                </Grid>
              );
            }
          } else {
            return (
              <Grid item xs={1} sm={2} md={2} key={index}>
                <ProductCard sanPham={sanPham} />
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default ProducCardGrid;
