import { Box, Button } from "@mui/material";
import React, { useState } from "react";

import ImageHover from "./ImageHover";
import { showMixMatchDialog } from "./../../redux/actions/index";
import { useDispatch } from "react-redux";

const MixMatchCard = ({ sanPham, setCurrentSanPham }) => {
  const [hovered, setHovered] = useState(0);
  const dispatch = useDispatch();
  const openMixMatchDialog = React.useCallback(() => {
    setCurrentSanPham(sanPham);
    dispatch(showMixMatchDialog());
  }, [dispatch, sanPham]);

  return (
    <Box sx={{ position: "relative", marginBottom: "8px" }}>
      <div
        className={hovered !== 0 ? "image-card active-switcher" : "image-card"}
      >
        <ImageHover imgs={[sanPham.imgs[0], sanPham.imgs[1]]} />
        <div className="btn">
          <Button variant="contained" onClick={openMixMatchDialog}>
            Xem thêm
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default MixMatchCard;
