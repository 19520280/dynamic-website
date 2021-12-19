import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const MixMatchCard = ({ sanPham }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <Box sx={{ position: "relative", marginBottom: "8px" }}>
      <div
        className={hovered !== 0 ? "image-card active-switcher" : "image-card"}
      >
        <img
          className={hovered === 1 ? "pmhovered" : ""}
          src={sanPham.imgs[0]}
        />
        <img
          className={hovered === 2 ? "pmhovered" : ""}
          src={sanPham.imgs[0]}
          src={sanPham.imgs[1]}
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
          <Button variant="contained"> Xem thêm</Button>
        </div>
      </div>
    </Box>
  );
};

export default MixMatchCard;
