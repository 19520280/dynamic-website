import "./ProductCard.css";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import React from "react";
import { products } from "../../dataSources/Products";

const product = products[0];

const ProductCard = () => {
  return (
    <Card className="custom-card">
      <CardMedia component="img" height="140" image={product.imgs[0][0]} />
      <CardContent>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color="text.secondary"
          className="name"
        >
          {product.ten}
        </Typography>
        <CardActions>
          {product.giaCu ? (
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              className="old-price"
            >
              {product.giaCu}
            </Typography>
          ) : null}
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            className="price"
          >
            {product.gia}
          </Typography>
        </CardActions>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
