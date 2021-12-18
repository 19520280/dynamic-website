import { Box, Grid } from "@mui/material";

import ProductCard from "./../ProductCard/ProductCard";
import React, { useState } from "react";
import { products } from "../../dataSources/Products";

const ProducCardGrid = ({ phanLoai, lengthGrid }) => {
  console.log(lengthGrid);
  React.useEffect(() => {
    if (lengthGrid) {
      products.length = lengthGrid;
    }
  });
  const listProducts = products.map((sanPham, index) => {
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
  });

  // const listRandProduct = Array.apply(null, Array(lengthGrid)).map(function (
  //   x,
  //   i
  // ) {
  //   var num=Math.floor(Math.random() * listProducts.length);
  //   var item = listProducts[num];
  //   do {
  //     num=Math.floor(Math.random() * listProducts.length);
  //     item = listProducts[num];
  //   } while (item==undefined)
  //   console.log(num, item);
  //   return item;
  // });


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 2, sm: 6, md: 8 }}
      >
        {listProducts}
      </Grid>
    </Box>
  );
};

export default ProducCardGrid;
