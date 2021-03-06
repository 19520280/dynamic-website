import "./ProductCard.css";

import React, { useState } from "react";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import ImageProductCard from "./ImageProductCard";
import PriceTypography from "../Typographys/PriceTypography";
import { products } from "../../dataSources/Products";
import { useHistory } from "react-router-dom";

const ProductCard = ({ sanPham }) => {
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selected, setSelected] = useState(sanPham.mauSacs[0]);
  const indexSelected = sanPham.mauSacs.indexOf(selected);

  return (
    <div className="container">
      <ImageProductCard
        sanPham={sanPham}
        indexSelected={indexSelected}
        onClick={() => history.push(sanPham.path)}
        isMobile={isMobile}
      />
      <Typography
        gutterBottom
        variant="subtitle1"
        component="div"
        className="name"
        fontSize="1rem"
      >
        {sanPham.ten}
      </Typography>
      <PriceTypography
        giaCu={sanPham.giaCu}
        gia={sanPham.gia}
      />
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
