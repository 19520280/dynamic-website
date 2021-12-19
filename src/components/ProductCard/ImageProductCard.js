import React, { useState } from "react";

import { Box } from "@mui/material";
import BtnProCardGroup from "./../Buttons/BtnProCardGroup";
import ImageHover from "./ImageHover";
import TagProCardGroup from "../Tag/TagProCardGroup";

const ImageProductCard = ({ sanPham, indexSelected, onClick, isMobile }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <Box sx={{ position: "relative", marginBottom: "8px" }}>
      <div
        className={hovered !== 0 ? "image-card active-switcher" : "image-card"}
      >
        <ImageHover
          imgs={[
            sanPham.imgs[indexSelected][0],
            sanPham.imgs[indexSelected][1],
          ]}
          onClick={onClick}
        />
        {!isMobile ? (
          <div className="btn">
            <BtnProCardGroup sanPham={sanPham} />
          </div>
        ) : null}
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
