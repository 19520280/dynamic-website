import React from "react";
import {
  Box,
  Divider,
  Typography,
  Radio,
  Checkbox,
  Button,
} from "@mui/material";
import ImageSP from "../../assets/images/products/monarch-butterfly-t-shirt-white/32ce4a7de31032ca84dcc9a148ce01d2.jpg";
import RatingInfolPanel from "./RatingInfoPanel";
import ShareIcon from "@mui/icons-material/Share";

function ProductPanel() {
  const [selectedValue, setSelectedValue] = React.useState("a");

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
      <Box sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box maxWidth={100}>
            <img src={ImageSP} width={100} height={100} />
            <img src={ImageSP} width={100} height={100} />
            <img src={ImageSP} width={100} height={100} />
            <img src={ImageSP} width={100} height={100} />
          </Box>
          <Box sx={{ marginX: 1 }}>
            <img src={ImageSP} width={400} height={410} />
          </Box>
        </Box>
        <Box sx={{ marginLeft: 3 }}>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              Tên sản phẩm
            </Typography>
            <Box sx={{ display: "flex" }} maxWidth={500} marginY={1}>
              <RatingInfolPanel size={"small"} />
              <ShareIcon
                sx={{ float: "right", width: 20, height: 20, marginLeft: 10 }}
              />
            </Box>
            <Box sx={{ display: "flex", marginY: 1 }}>
              <Typography
                sx={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: 20,
                  fontWeight: 400,
                }}
              >
                đ1.000.500
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  marginLeft: 1,
                  fontWeight: 500,
                }}
              >
                đ999.999
              </Typography>
            </Box>
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box marginY={1}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Màu sắc
            </Typography>
            <Box>
              <Radio
                {...controlProps("a")}
                sx={{
                  color: "black",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
              <Radio
                {...controlProps("b")}
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
              <Radio
                {...controlProps("c")}
                sx={{
                  color: "red",
                  "&.Mui-checked": {
                    color: "red",
                  },
                }}
              />
              <Radio
                {...controlProps("d")}
                sx={{
                  color: "blue",
                  "&.Mui-checked": {
                    color: "blue",
                  },
                }}
              />
              <Radio
                {...controlProps("e")}
                sx={{
                  color: "yellow",
                  "&.Mui-checked": {
                    color: "yellow",
                  },
                }}
              />
            </Box>
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box marginY={1}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              Kích thước
            </Typography>
            <Checkbox Button={<Button>XL</Button>}></Checkbox>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProductPanel;
