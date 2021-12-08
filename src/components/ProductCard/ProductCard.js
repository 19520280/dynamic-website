import "./ProductCard.css";

import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

import CircleIconButton from "../Buttons/CircleIconButton";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import numberWithCommas from "./../../utils/numberWithCommas";
import { products } from "../../dataSources/Products";

const product = products[0];
const ButtonHover = ({ icon, title }) => (
  <Tooltip title={title}>
    <span>
      <CircleIconButton icon={icon} />
    </span>
  </Tooltip>
);
const ProductCard = () => {
  const [selected, setSelected] = useState(product.mauSacs[0]);
  const indexSelected = product.mauSacs.indexOf(selected);
  console.log("selected product card", selected);
  return (
    <div className="container">
      <Box sx={{ position: "relative" }}>
        <div className="image-card">
          <a className="thumnail">
            <img src={product.imgs[indexSelected][0]} />
            <img src={product.imgs[indexSelected][1]} />{" "}
            <span className="pmimage-switcher">
              <span></span>
              <span></span>
            </span>
          </a>
          <div className="btn">
            <Stack direction="row" spacing={1}>
              <ButtonHover
                icon={<RemoveRedEye style={{ color: "white" }} />}
                title="Xem nhanh"
              />
              <ButtonHover
                icon={<ShoppingCartIcon style={{ color: "white" }} />}
                title="Thêm vào giỏ hàng"
              />
              <ButtonHover
                icon={<AddToPhotos style={{ color: "white" }} />}
                title="Thêm vào danh sách"
              />
            </Stack>
          </div>
        </div>
      </Box>
      <Typography
        gutterBottom
        variant="subtitle1"
        component="div"
        className="name"
      >
        {product.ten}
      </Typography>
      <Stack direction="row" spacing={1}>
        {product.giaCu ? (
          <Typography
            className="old-price"
            gutterBottom
            component="div"
            color="text.secondary"
          >
            {numberWithCommas(product.giaCu)}
          </Typography>
        ) : null}
        <Typography
          gutterBottom
          component="div"
          sx={{ fontWeight: "medium" }}
          className="price"
        >
          {numberWithCommas(product.gia)}
        </Typography>
      </Stack>
      <ColorButtonGroup
        colors={product.mauSacs}
        selected={selected}
        setSelected={setSelected}
        only={true}
      />
    </div>
  );
};

export default ProductCard;
