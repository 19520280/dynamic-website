import "./ProductCard.css";

import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

import BtnProCardGroup from "./../Buttons/BtnProCardGroup";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import CountDownGroup from "../Tag/CountDownGroup";
import TagProCardGroup from "../Tag/TagProCardGroup";
import moment from "moment";
import numberWithCommas from "./../../utils/numberWithCommas";
import { products } from "../../dataSources/Products";

const sanPham = products[0];

const ProductCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selected, setSelected] = useState(sanPham.mauSacs[0]);
  const indexSelected = sanPham.mauSacs.indexOf(selected);

  const [hovered, setHovered] = useState(0);
  return (
    <div className="container">
      <Box sx={{ position: "relative", marginBottom: "8px" }}>
        <div
          className={
            hovered !== 0 ? "image-card active-switcher" : "image-card"
          }
        >
          <img
            className={hovered === 1 ? "pmhovered" : ""}
            src={sanPham.imgs[indexSelected][0]}
          />
          <img
            className={hovered === 2 ? "pmhovered" : ""}
            src={sanPham.imgs[indexSelected][0]}
            src={sanPham.imgs[indexSelected][1]}
          />
          <span className="pmimage-switcher">
            <span
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(0)}
            ></span>
            <span
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(0)}
            ></span>
          </span>
          <div className="btn">
            <BtnProCardGroup />
          </div>
          <div className="tag">
            <TagProCardGroup product={sanPham} />
          </div>
          {/* <div className="countdown">
            {sanPham.setCountDown ? (
              <CountDownGroup endDate={moment(15 - 12 - 2021)} />
            ) : null}
          </div> */}
        </div>
      </Box>
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
