import "./style.css";

import * as React from "react";

import {
  Box,
  FormControl,
  Grid,
  ImageList,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Tab,
  Typography,
} from "@mui/material";

import CommentPanel from "../../components/ProductDetail/CommentPanel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductPanel from "../../components/ProductDetail/ProductPanel";
import RatingDetailPanel from "../../components/ProductDetail/RatingDetailPanel";
import { SystemColor } from "../../color";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TableInfo from "../../components/ProductDetail/TableInfo";
import { color } from "@mui/system";
import { feedbacks } from "../../dataSources/Feedback";
import { products } from "../../dataSources/Products";

const sanPham = products[1];
const ProductDetailPage = () => {
  const [value, setValue] = React.useState(0);
  const [Rate, setRate] = React.useState(0);
  const [color, setcolor] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [listfbfilter, setlist] = React.useState(feedbacks);
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  const handleChangeRate = (event) => {
    setRate(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeColor = (event) => {
    setcolor(event.target.value);
  };
  React.useEffect(() => {
    let list = feedbacks;
    if (value) list = list.filter((e) => e.imgs.length > 0);
    if (Rate != 0) list = list.filter((fb) => fb.rate === Rate);
    if (color != 0) list = list.filter((fb) => fb.color === color);
    if (size != 0) list = list.filter((fb) => fb.size === size);
    setlist(list);
  }, [Rate, color, size, value]);
  return sanPham ? (
    <Box width="100%" paddingX={8} paddingBottom={"8%"}>
      <ProductPanel sanPham={sanPham} />
      <Box width={1220} paddingY={4}>
        <h2>Gợi ý phối đồ</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 2, sm: 6, md: 8 }}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Grid item xs={1} sm={2} md={2} key={index}>
                <ProductCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        width={1220}
        paddingY={4}
        paddingX={7}
        border={1}
        marginY={3}
        borderColor={SystemColor.gray}
      >
        <Box>
          <Box marginY={1}>
            <h4>THÔNG TIN SẢN PHẨM</h4>
          </Box>
          <TableInfo sanPham={sanPham} />
        </Box>
        <Box marginTop={4}>
          <Box marginY={1}>
            <h4>MÔ TẢ SẢN PHẨM</h4>
          </Box>
          <Box marginTop={2}>{sanPham.description}</Box>
        </Box>
      </Box>
      <Box
        width={1220}
        paddingY={4}
        paddingX={5}
        border={1}
        marginY={3}
        borderColor={SystemColor.gray}
        display={"flex"}
      >
        <RatingDetailPanel />
        <Box marginLeft={5}>
          <Typography marginBottom={1}>
            TẤT CẢ HÌNH ẢNH ({sanPham.imgs[0].length})
          </Typography>
          <ImageList cols={sanPham.imgs[0].length} gap={12} variant="woven">
            {sanPham.imgs[0].map((img) => (
              <img src={img} width={170} height={164} loading="lazy" />
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box width={1220} paddingTop={4}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              alignContent: "center",
            }}
          >
            <TabList onChange={handleChange}>
              <Tab label="Tất cả" value={0} />
              <Tab label="Có hình ảnh" value={1} />
            </TabList>
            <Box
              sx={{ display: "flex", alignContent: "center", marginLeft: 40 }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box marginTop={1} marginX={2} minWidth={80}>
                  <h4>Đánh giá</h4>
                </Box>
                <FormControl size="small">
                  <InputLabel id="demo-simple-select-label-rate" />
                  <Select
                    id="demo-simple-select-rate"
                    value={Rate}
                    autoWidth
                    onChange={handleChangeRate}
                  >
                    <MenuItem value={0}>Tất cả</MenuItem>
                    <MenuItem value={5}>5 sao</MenuItem>
                    <MenuItem value={4}>4 sao</MenuItem>
                    <MenuItem value={3}>3 sao</MenuItem>
                    <MenuItem value={2}>2 sao</MenuItem>
                    <MenuItem value={1}>1 sao</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box marginTop={1} marginX={2} minWidth={80}>
                  <h4>Màu sắc</h4>
                </Box>
                <FormControl size="small">
                  <InputLabel id="demo-simple-select-label-color" />
                  <Select
                    id="demo-simple-select-color"
                    value={color}
                    autoWidth
                    onChange={handleChangeColor}
                  >
                    <MenuItem value={0}>Tất cả</MenuItem>
                    <MenuItem value={"Đen"}>Đen</MenuItem>
                    <MenuItem value={"Đỏ"}>Đỏ</MenuItem>
                    <MenuItem value={"Trắng"}>Trắng</MenuItem>
                    <MenuItem value={"Xanh"}>Xanh</MenuItem>
                    <MenuItem value={"Vàng"}>Vàng</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box marginTop={1} marginX={2} minWidth={100}>
                  <h4>Kích thước</h4>
                </Box>
                <FormControl size="small">
                  <InputLabel id="demo-simple-select-label-size" />
                  <Select
                    id="demo-simple-select-size"
                    value={size}
                    autoWidth
                    onChange={handleChangeSize}
                  >
                    <MenuItem value={0}>Tất cả</MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                    <MenuItem value={"XL"}>XL</MenuItem>
                    <MenuItem value={"XXL"}>XXL</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <TabPanel value={0}>
            {listfbfilter.map((e) => (
              <CommentPanel feedback={e} key={e.author} />
            ))}
          </TabPanel>
          <TabPanel value={1}>
            {listfbfilter.map((e) => (
              <CommentPanel feedback={e} key={e.author} />
            ))}
          </TabPanel>
          <Pagination
            count={10}
            color="primary"
            sx={{ float: "right", marginRight: 10 }}
          />
        </TabContext>
      </Box>
    </Box>
  ) : null;
};

export default ProductDetailPage;
