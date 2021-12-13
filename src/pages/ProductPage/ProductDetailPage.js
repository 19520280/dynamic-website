import * as React from "react";
import {
  Box,
  Typography,
  ImageList,
  Tab,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TableInfo from "../../components/ProductDetail/TableInfo";
import RatingDetailPanel from "../../components/ProductDetail/RatingDetailPanel";
import CommentPanel from "../../components/ProductDetail/CommentPanel";
import ProductPanel from "../../components/ProductDetail/ProductPanel";
import { products } from "../../dataSources/Products";
import { SystemColor } from "../../color";
import { feedbacks } from "../../dataSources/Feedback";
const sanPham = products[0];
const ProductDetailPage = () => {
  const [value, setValue] = React.useState("1");
  const [Rate, setRate] = React.useState(0);
  const [color, setcolor] = React.useState(0);
  const [size, setSize] = React.useState(0);
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
  console.log(sanPham);
  return sanPham ? (
    <>
      <ProductPanel sanPham={sanPham} />
      <Box
        width={1180}
        height={680}
        paddingY={4}
        paddingX={5}
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
        <Box marginY={4}>
          <Box marginY={1}>
            <h4>MÔ TẢ SẢN PHẨM</h4>
          </Box>
          <Box>
            <Box marginY={1}>
              <h4>Ý tưởng</h4>
              <Typography>
                A paragraph is a series of sentences that are organized and
                coherent, and are all related to a single topic. Almost every
                piece of writing you do that is longer than a few sentences
                should be organized into paragraphs. ... One of the most
                important of these is a topic sentence.
              </Typography>
            </Box>
            <Box marginY={1}>
              <h4>Giá trị mang lại</h4>
              <Typography>
                A paragraph is a series of sentences that are organized and
                coherent, and are all related to a single topic. Almost every
                piece of writing you do that is longer than a few sentences
                should be organized into paragraphs. ... One of the most
                important of these is a topic sentence.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width={1180}
        height={270}
        paddingY={4}
        paddingX={5}
        border={1}
        marginY={3}
        borderColor={SystemColor.gray}
        display={"flex"}
      >
        <RatingDetailPanel />
        <Box marginLeft={5}>
          <Typography marginBottom={1}>TẤT CẢ HÌNH ẢNH</Typography>
          <ImageList cols={sanPham.imgs[0].length} gap={12} variant="woven">
            {sanPham.imgs[0].map((img) => (
              <img src={img} width={170} height={164} loading="lazy" />
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box width={1180} paddingY={4} marginY={3}>
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
              <Tab label="Tất cả" value="1" />
              <Tab label="Có hình ảnh" value="2" />
            </TabList>
            <Box
              sx={{ display: "flex", alignContent: "center", marginLeft: 45 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  minWidth: 200,
                }}
              >
                <Box marginTop={1} marginX={2}>
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
                    <MenuItem value={1}>5 sao</MenuItem>
                    <MenuItem value={2}>4 sao</MenuItem>
                    <MenuItem value={3}>3 sao</MenuItem>
                    <MenuItem value={4}>2 sao</MenuItem>
                    <MenuItem value={5}>1 sao</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  minWidth: 200,
                }}
              >
                <Box marginTop={1} marginX={2}>
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
                    <MenuItem value={1}>Đen</MenuItem>
                    <MenuItem value={2}>Đỏ</MenuItem>
                    <MenuItem value={3}>Trắng</MenuItem>
                    <MenuItem value={4}>Xanh</MenuItem>
                    <MenuItem value={5}>Vàng</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  minWidth: 200,
                }}
              >
                <Box marginTop={1} marginX={2}>
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
                    <MenuItem value={1}>S</MenuItem>
                    <MenuItem value={2}>M</MenuItem>
                    <MenuItem value={3}>L</MenuItem>
                    <MenuItem value={4}>XL</MenuItem>
                    <MenuItem value={5}>XXL</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <TabPanel value="1">
            {feedbacks.map((e) => (
              <CommentPanel feedback={e} />
            ))}
          </TabPanel>
          <TabPanel value="2">
            {feedbacks.map((e) =>
              e.imgs.length ? (
                <CommentPanel feedback={e} key={e.author} />
              ) : null
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </>
  ) : null;
};

export default ProductDetailPage;
