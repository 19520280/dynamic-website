import React, { useState } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  ButtonGroup,
  Input,
  List,
  TextField,
  ImageList,
  InputBase,
} from "@mui/material";
import RatingInfolPanel from "./RatingInfoPanel";
import ShareIcon from "@mui/icons-material/Share";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddBox } from "@mui/icons-material";
import ProductPolicy from "./ProductPolicy";
import { keys } from "@mui/system";

function ProductPanel({ sanPham }) {
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);
  const [inputSL, setInputSL] = React.useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        height: 762,
        width: 1110,
        marginX: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: 716.5,
          height: 760,
        }}
      >
        <Box>
          <ImageList cols={1} gap={12} variant="woven">
            {sanPham.imgs[0].map((img) => (
              <img src={img} width={190} height={181} loading="lazy" />
            ))}
          </ImageList>
        </Box>
        <Box sx={{ marginLeft: 2 }}>
          <img src={sanPham.imgs[1][1]} width={440} height={760} />
        </Box>
      </Box>
      <Box sx={{ marginLeft: 4, width: 475 }}>
        <Box height={152}>
          <Box>
            <h2>{sanPham.ten}</h2>
          </Box>
          <Box sx={{ display: "flex" }} marginY={3}>
            <RatingInfolPanel size={"medium"} />
            <ShareIcon
              sx={{ float: "right", width: 25, height: 30, marginLeft: 3 }}
            />
          </Box>
          <Box
            sx={{ display: "flex", marginBottom: 1, alignContent: "center" }}
          >
            <Typography
              style={{
                textDecoration: "line-through",
                color: "gray",
                fontSize: 22,
              }}
            >
              đ{sanPham.giaCu}
            </Typography>
            <Typography
              sx={{
                fontSize: 22,
                marginLeft: 1,
                fontWeight: "bold",
              }}
            >
              đ{sanPham.gia}
            </Typography>
          </Box>
        </Box>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Box height={74}>
          <Box marginTop={2}>
            <h3>Màu sắc</h3>
          </Box>
          <Box>
            <ColorButtonGroup
              colors={sanPham.mauSacs}
              selected={selectedColor}
              setSelected={setSelectedColor}
              only={true}
            />
          </Box>
        </Box>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Box height={90}>
          <Box marginY={2}>
            <h4>Kích thước</h4>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ImageList
              cols={sanPham.kichThuocs.length}
              gap={15}
              variant="woven"
            >
              {sanPham.kichThuocs.map((s) => (
                <SizeButton
                  size={s}
                  selected={selectedSize}
                  setSelected={setSelectedSize}
                  only={true}
                />
              ))}
            </ImageList>
          </Box>
        </Box>
        <Box sx={{ display: "flex", height: 30, marginY: 1 }}>
          <StraightenIcon />
          <Typography variant="body2" marginLeft={1}>
            SIZE GUIDE
          </Typography>
        </Box>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Box height={144}>
          <Box sx={{ alignContent: "center", display: "flex" }} marginY={2}>
            <ButtonGroup variant="outlined">
              <Button sx={{ width: 10 }}>
                <RemoveIcon />
              </Button>
              <Button disableRipple>
                <InputBase
                  value={inputSL}
                  onChange={(e) => {
                    setInputSL(e.target.value);
                  }}
                  sx={{ flex: 1, width: 30 }}
                  type="number"
                />
              </Button>
              <Button sx={{ width: 10 }}>
                <AddIcon />
              </Button>
            </ButtonGroup>
            <Button
              variant="contained"
              sx={{
                alignItems: "center",
                height: 40,
                width: 178,
                marginLeft: 2,
                background: "#303537",
                borderRadius: 1,
                marginTop: 0.3,
              }}
            >
              Thêm vào giỏ hàng
            </Button>
          </Box>
          <Box marginY={1}>
            <Typography>Số lượng sản phẩm còn {sanPham.tonKho}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignContent: "center" }} marginY={2}>
            <AddBox />
            <h5 style={{ marginTop: 2.7 }}>THÊM VÀO DANH SÁCH</h5>
          </Box>
        </Box>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Box height={210}>
          <ProductPolicy />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductPanel;
