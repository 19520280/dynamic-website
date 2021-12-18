import React, { useCallback } from "react";
import "./style.css";

import {
  Box,
  FormControl,
  Grid,
  ImageList,
  InputLabel,
  MenuItem,
  Pagination,
  Button,
  useMediaQuery,
  useTheme,
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
import { products } from "../../dataSources/Products";
import { feedbacks } from "../../dataSources/Feedback";
import { AddBox } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { showCollectionDialog } from "../../redux/actions";
import { useDispatch } from "react-redux";

const sanPham = products[1];
const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);
  const [Rate, setRate] = React.useState(0);
  const [color, setcolor] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const [listfbfilter, setlist] = React.useState(feedbacks);
  const openCollectionDialog = useCallback(() => {
    dispatch(showCollectionDialog());
  }, [dispatch]);
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
    <>
      <Box width="100%">
        <ProductPanel sanPham={sanPham} isMobile={isMobile} />
        {isMobile ? (
          <>
            <Box width={"100%"} paddingY={4}>
              <h3>Gợi ý phối đồ</h3>
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
              width={"100%"}
              paddingY={1}
              paddingX={2}
              border={1}
              borderColor={SystemColor.gray}
            >
              <Box>
                <Box marginY={1}>
                  <h5>THÔNG TIN SẢN PHẨM</h5>
                </Box>
                <TableInfo sanPham={sanPham} />
              </Box>
              <Box marginY={2}>
                <Box marginY={1}>
                  <h5>MÔ TẢ SẢN PHẨM</h5>
                </Box>
                <Box marginTop={1}>{sanPham.description}</Box>
              </Box>
            </Box>
            <Box
              width={"100%"}
              paddingY={1}
              paddingX={2}
              border={1}
              marginY={2}
              borderColor={SystemColor.gray}
              display={"flex"}
            >
              <RatingDetailPanel size={150} />
            </Box>
            <Box width={"100%"}>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  float: "right",
                  marginBottom: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box marginTop={1} minWidth={80}>
                    <h5>Đánh giá</h5>
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
              </Box>
              <Box marginX={1}>
                {listfbfilter.map((e) => (
                  <CommentPanel
                    feedback={e}
                    key={e.author}
                    isMobile={isMobile}
                  />
                ))}
              </Box>
              <Pagination count={10} color="primary" />
            </Box>
          </>
        ) : (
          <>
            <Box width={"100%"} paddingY={4}>
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
              width={"100%"}
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
              width={"100%"}
              paddingY={4}
              paddingX={5}
              border={1}
              marginY={3}
              borderColor={SystemColor.gray}
              display={"flex"}
            >
              <RatingDetailPanel size={200} />
              <Box marginLeft={5}>
                <Typography marginBottom={3}>
                  TẤT CẢ HÌNH ẢNH ({sanPham.imgs[0].length})
                </Typography>
                <ImageList
                  cols={sanPham.imgs[0].length}
                  gap={12}
                  variant="woven"
                >
                  {sanPham.imgs[0].map((img) => (
                    <img src={img} width={"100%"} height={190} loading="lazy" />
                  ))}
                </ImageList>
              </Box>
            </Box>
            <Box width={"100%"} paddingTop={4} marginBottom={10}>
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
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      float: "right",
                    }}
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
          </>
        )}
      </Box>
      {isMobile ? (
        <Box
          width="100%"
          position="-webkit-sticky"
          position="sticky"
          bottom={0}
          height={40}
          display={"flex"}
        >
          <Button
            variant="contained"
            onClick={openCollectionDialog}
            sx={{
              alignItems: "center",
              width: "50%",
              borderRadius: 0,
              background: "#303537",
            }}
          >
            <AddBox />
          </Button>
          <Button
            onClick={openCollectionDialog}
            variant="contained"
            sx={{
              alignItems: "center",
              width: "50%",
              borderRadius: 0,
              background: "#303537",
            }}
          >
            <AddShoppingCartIcon />
          </Button>
        </Box>
      ) : null}
    </>
  ) : null;
};

export default ProductDetailPage;
