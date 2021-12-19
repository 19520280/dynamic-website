import React, { useState } from "react";

import { Box } from "@mui/material";
import BtnProCardGroup from "./../Buttons/BtnProCardGroup";
import TagProCardGroup from "../Tag/TagProCardGroup";

const ImageProductCard = ({ sanPham, indexSelected, onClick }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <Box sx={{ position: "relative", marginBottom: "8px" }}>
      <div
        className={hovered !== 0 ? "image-card active-switcher" : "image-card"}
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
        <span className="pmimage-switcher" onClick={onClick}>
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
          <BtnProCardGroup sanPham={sanPham} />
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
  );
};

export default ImageProductCard;
