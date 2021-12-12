import React from "react";
import {
  Box,
  Divider,
  Typography,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";
import RatingInfolPanel from "./RatingInfoPanel";
import ShareIcon from "@mui/icons-material/Share";
import { products } from "../../dataSources/Products";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
const sanPham = products[0];

function ProductPanel() {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    inputProps: { "aria-label": item },
  });
  return (
    <div>
      <Box sx={{ display: "flex", width: 1160, height: 762 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: 760,
            width: 596.5,
          }}
        >
          <Box maxWidth={100}>
            {sanPham.imgs[0].map((img) => (
              <img src={img} width={190} />
            ))}
          </Box>
          <Box sx={{ marginX: 0 }}>
            <img src={sanPham.imgs[1][1]} width={386.5} height={760} />
          </Box>
        </Box>
        <Box sx={{ marginLeft: 40, width: 475.5 }}>
          <Box>
            <h3>{sanPham.ten}</h3>
            <Box sx={{ display: "flex" }} maxWidth={500} marginY={1}>
              <RatingInfolPanel size={"small"} />
              <ShareIcon
                sx={{ float: "right", width: 20, height: 20, marginLeft: 10 }}
              />
            </Box>
            <Box sx={{ display: "flex", marginY: 1, alignContent: "center" }}>
              <Typography
                style={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: 20,
                }}
              >
                đ1.000.500
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  marginLeft: 1,
                  fontWeight: "bold",
                }}
              >
                đ999.999
              </Typography>
            </Box>
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box marginY={1}>
            <h4>Màu sắc</h4>
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
          <Box marginY={1}>
            <h4>Kích thước</h4>
            {sanPham.kichThuocs.map((s) => (
              <SizeButton
                size={s}
                selected={selectedSize}
                setSelected={setSelectedSize}
                only={true}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProductPanel;
