import "./ProductCard.css";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import ColorButton from "./../Buttons/ColorButton";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import numberWithCommas from "./../../utils/numberWithCommas";
import { products } from "../../dataSources/Products";

const product = products[0];

const ProductCard = () => {
  const [selected, setSelected] = useState(product.mauSacs[0]);
  console.log('selected product card', selected);
  return (
    <Card className="custom-card">
      <CardMedia component="img" height="100%" image={product.imgs[0][0]} />
      <CardContent>
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
            {numberWithCommas(product.giaCu)}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <ColorButtonGroup
          colors={product.mauSacs}
          selected={selected}
          setSelected={setSelected}
          only={true}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
