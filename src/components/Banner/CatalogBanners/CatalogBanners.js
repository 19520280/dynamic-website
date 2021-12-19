import "./CatalogBanners.css";

import * as React from "react";

import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { itemData } from "../../../dataSources/Catalogs";

const imageItem = (item) => {
  return (
    <div className="imageItem">
      <img src={item.img} />
      <div className="hoverLabel">
        <Typography
          fontSize="calc(0.8rem + 0.05vw)"
          fontWeight="light"
          color="secondary"
          margin="0px 0px 0px 0px"
        >
          {item.subtile}
        </Typography>
        <Typography
          fontSize="calc(1rem + 1vw)"
          fontWeight="bold"
          color="primary"
          marginBottom={0.5}
        >
          {item.title}
        </Typography>
        {item.cols && item.rows ? (
          <Button
            variant="text"
            endIcon={<ChevronRightIcon />}
            sx={{
              fontSize: "calc(0.8rem + 0.05vw)",
              p: 0,
            }}
          >
            Xem thêm
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default function CatalogBanners() {
  return (
    <ImageList variant="quilted" cols={6} gap="calc(8px + 0.5vw)">
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          {imageItem(item)}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
