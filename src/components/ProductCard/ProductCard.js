import "./ProductCard.css";

import React, { useState } from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import ImageProductCard from "./ImageProductCard";
import { SystemColor } from "../../color";
import numberWithCommas from "./../../utils/numberWithCommas";
import { products } from "../../dataSources/Products";

const sanPham = products[0];

const ProductCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selected, setSelected] = useState(sanPham.mauSacs[0]);
  const indexSelected = sanPham.mauSacs.indexOf(selected);

  return (
    <div className="container">
      <ImageProductCard sanPham={sanPham} indexSelected={indexSelected} />
      <Typography
        gutterBottom
        variant="subtitle1"
        component="div"
        className="name"
        fontSize={isMobile ? "0.9rem" : "1rem"}
      >
        {sanPham.ten}
      </Typography>
      <Stack direction="row" spacing={1}>
        {sanPham.giaCu ? (
          <Typography
            className="old-price"
            gutterBottom
            component="div"
            color="text.secondary"
            fontSize={isMobile ? "0.9rem" : "1rem"}
          >
            {numberWithCommas(sanPham.giaCu)}
          </Typography>
        ) : null}
        <Typography
          gutterBottom
          component="div"
          sx={{ fontWeight: "medium" }}
          fontSize={isMobile ? "0.9rem" : "1rem"}
          className="price"
          color={sanPham.giaCu ? SystemColor.error : SystemColor.main}
        >
          {numberWithCommas(sanPham.gia)}
        </Typography>
      </Stack>
      <ColorButtonGroup
        colors={sanPham.mauSacs}
        selected={selected}
        setSelected={setSelected}
        only={true}
      />
    </div>
  );
};

export default ProductCard;
