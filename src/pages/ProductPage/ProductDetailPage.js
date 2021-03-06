import React, { useCallback, useState } from "react";
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
  Snackbar,
  Alert,
  Divider,
  Container,
} from "@mui/material";

import CommentPanel from "../../components/ProductDetail/CommentPanel";
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
import { useHistory } from "react-router-dom";
import ProducCardGrid from "../../components/GridProductCard/ProducCardGrid";
import { BgColor } from "../../color";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Paper from "@mui/material/Paper";
import HeaderTypography from "../../components/Typographys/HeaderTypography";
import CountTypography from "../../components/Typographys/CountTypography";
import MessageModal from "../../components/Modal/MessageModal";
const ProductDetailPage = () => {
  const history = useHistory();
  const [sanPham, setSP] = useState(
    products.find((sp) => sp.path === history.location.pathname)
  );
  React.useEffect(() => {
    setSP(products.find((sp) => sp.path === history.location.pathname));
  }, [history.location.pathname]);
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
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return sanPham ? (
    <Box width="100%">
      <MessageModal
        text={"Th??m th??nh c??ng"}
        severity={"success"}
        closeAfterSecond={true}
        state={open}
        setState={setOpen}
      />
      <Box
        component={Paper}
        border={1}
        borderRadius={1}
        borderColor={SystemColor.gray}
      >
        <ProductPanel sanPham={sanPham} isMobile={isMobile} />
      </Box>
      <Box width={"100%"} marginY={4} paddingX={2}>
        <Box>
          <HeaderTypography
            variant="button"
            text={"G???i ?? ph???i ?????"}
            color={"secondary"}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <ProducCardGrid phanLoai={sanPham.phanLoai} lengthGrid={4} />
        </Box>
      </Box>
      {isMobile ? (
        <>
          <Box
            width={"100%"}
            paddingY={1}
            //paddingX={2}
            border={1}
            borderRadius={1}
            component={Paper}
            borderColor={SystemColor.gray}
            style={{ border:"1px solid", borderColor: SystemColor.gray}}

          >
            <Box style={{margin:"10px 10px"}}>
              <Box marginY={1}>
                <CountTypography
                  variant="button"
                  text={"Th??ng tin s???n ph???m"}
                  color={"secondary"}
                  size={18}
                  padding={"1px 0px"}
                />
              </Box>
              <TableInfo sanPham={sanPham} />
            </Box>
            <Box marginY={2} style={{margin:"10px 10px"}}>
              <Box marginY={1}>
                <CountTypography
                  variant="button"
                  text={"M?? t??? s???n ph???m"}
                  color={"secondary"}
                  size={18}
                  padding={"1px 0px"}
                />
              </Box>
              <Box marginTop={1}>{sanPham.description}</Box>
            </Box>
          </Box>
          <Box
            width={"100%"}
            paddingY={1}
            //paddingX={2}
            border={1}
            borderRight={1}
            marginY={2}
            component={Paper}
            borderColor={SystemColor.gray}
            display={"flex"}
          >
            <RatingDetailPanel size={150} />
          </Box>
          <Box
            style={{ border:"1px solid", borderColor: SystemColor.gray, padding:"10px"}}
           width={"100%"} component={Paper}>
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
                  <h5>????nh gi??</h5>
                </Box>
                <FormControl size="small">
                  <InputLabel id="demo-simple-select-label-rate" />
                  <Select
                    id="demo-simple-select-rate"
                    value={Rate}
                    autoWidth
                    onChange={handleChangeRate}
                  >
                    <MenuItem value={0}>T???t c???</MenuItem>
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
                <CommentPanel feedback={e} key={e.author} isMobile={isMobile} />
              ))}
            </Box>
            <Pagination count={10} color="primary" />
          </Box>
          <Container sx={{ bottom: 0, left: 0, position: "fixed" }}>
            <Button
              onClick={openCollectionDialog}
              sx={{
                alignItems: "center",
                width: "50%",
                borderRadius: 0,
                bottom: 0,
                left: 0,
                position: "fixed",
                background: "white",
              }}
            >
              <Box>
                <AddBox />
                <Typography marginTop={-1} fontSize={12}>
                  Th??m v??o danh s??ch
                </Typography>
              </Box>
            </Button>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              sx={{
                width: "50%",
                alignContent: "center",
                borderRadius: 0,
                background: "#303537",
                bottom: 0,
                right: 0,
                position: "fixed",
              }}
            >
              <Box>
                <AddShoppingCartIcon height={20} />
                <Typography marginTop={-1} fontSize={12}>
                  Th??m v??o gi??? h??ng
                </Typography>
              </Box>
            </Button>
          </Container>
        </>
      ) : (
        <>
          <Box
            width={"100%"}
            paddingY={4}
            paddingX={7}
            border={1}
            marginY={3}
            borderRadius={1}
            borderColor={SystemColor.gray}
            component={Paper}
          >
            <Box>
              <Box marginBottom={2}>
                <CountTypography
                  variant="button"
                  text={"Th??ng tin s???n ph???m"}
                  color={"secondary"}
                  size={18}
                  padding={"1px 0px"}
                />
              </Box>
              <TableInfo sanPham={sanPham} />
            </Box>
            <Box>
              <Box marginTop={3}>
                <CountTypography
                  variant="button"
                  text={"M?? t??? s???n ph???m"}
                  color={"secondary"}
                  size={18}
                  padding={"1px 0px"}
                />
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
            borderRadius={1}
            borderColor={SystemColor.gray}
            display={"flex"}
            component={Paper}
          >
            <RatingDetailPanel size={200} />
            <Box marginLeft={5}>
              <Typography marginBottom={3}>
                T???T C??? H??NH ???NH ({sanPham.imgs[0].length})
              </Typography>
              <ImageList cols={sanPham.imgs[0].length} gap={12} variant="woven">
                {sanPham.imgs[0].map((img) => (
                  <Zoom>
                    <img src={img} width={"100%"} height={190} loading="lazy" />
                  </Zoom>
                ))}
              </ImageList>
            </Box>
          </Box>
          <Box
            width={"100%"}
            paddingTop={2}
            paddingBottom={5}
            component={Paper}
            border={1}
            borderRadius={1}
            borderColor={SystemColor.gray}
            style={{ border:"1px solid", borderColor: SystemColor.gray}}
          >
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  width: "100%",
                }}
              >
                <TabList onChange={handleChange}>
                  <Tab label="T???t c???" value={0} />
                  <Tab label="C?? h??nh ???nh" value={1} />
                </TabList>
                <Box
                  sx={{
                    display: "flex",
                    marginLeft: "26%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box marginTop={1} marginX={1.5}>
                      <Typography fontWeight={"bold"} color="secondary">
                        ????nh gi??
                      </Typography>
                    </Box>
                    <FormControl size="small">
                      <InputLabel id="demo-simple-select-label-rate" />
                      <Select
                        id="demo-simple-select-rate"
                        value={Rate}
                        autoWidth
                        onChange={handleChangeRate}
                      >
                        <MenuItem value={0}>T???t c???</MenuItem>
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
                    <Box marginTop={1} marginX={1.5}>
                      <Typography fontWeight={"bold"} color="secondary">
                        M??u s???c
                      </Typography>
                    </Box>
                    <FormControl size="small">
                      <InputLabel id="demo-simple-select-label-color" />
                      <Select
                        id="demo-simple-select-color"
                        value={color}
                        autoWidth
                        onChange={handleChangeColor}
                      >
                        <MenuItem value={0}>T???t c???</MenuItem>
                        <MenuItem value={"??en"}>??en</MenuItem>
                        <MenuItem value={"?????"}>?????</MenuItem>
                        <MenuItem value={"Tr???ng"}>Tr???ng</MenuItem>
                        <MenuItem value={"Xanh"}>Xanh</MenuItem>
                        <MenuItem value={"V??ng"}>V??ng</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box marginTop={1} marginX={1.5}>
                      <Typography fontWeight={"bold"} color="secondary">
                        K??ch th?????c
                      </Typography>
                    </Box>
                    <FormControl size="small">
                      <InputLabel id="demo-simple-select-label-size" />
                      <Select
                        id="demo-simple-select-size"
                        value={size}
                        autoWidth
                        onChange={handleChangeSize}
                      >
                        <MenuItem value={0}>T???t c???</MenuItem>
                        <MenuItem value={"FS"}>FS</MenuItem>
                        <MenuItem value={"S"}>S</MenuItem>
                        <MenuItem value={"M"}>M</MenuItem>
                        <MenuItem value={"L"}>L</MenuItem>
                        <MenuItem value={"XL"}>XL</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <TabPanel value={0}>
                {listfbfilter.map((e) => (
                  <>
                    <CommentPanel feedback={e} key={e.author} />
                    <Divider variant={"fullWidth"} />
                  </>
                ))}
              </TabPanel>
              <TabPanel value={1}>
                {listfbfilter.map((e) => (
                  <>
                    <CommentPanel feedback={e} key={e.author} />
                    <Divider variant={"fullWidth"} />
                  </>
                ))}
              </TabPanel>
            </TabContext>
            <Pagination
              count={10}
              color="primary"
              sx={{ float: "right", marginRight: 10 }}
            />
          </Box>
        </>
      )}
    </Box>
  ) : null;
};

export default ProductDetailPage;
