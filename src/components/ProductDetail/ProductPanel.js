import React, { useState, useCallback } from "react";
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
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Fab,
  IconButton,
} from "@mui/material";
import { TabPanel, TabContext, TabList } from "@material-ui/lab";
import RatingInfolPanel from "./RatingInfoPanel";
import ShareIcon from "@mui/icons-material/Share";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddBox } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductPolicy from "./ProductPolicy";
import { useDispatch } from "react-redux";
import { showCollectionDialog } from "../../redux/actions";
import numberWithCommas from "../../utils/numberWithCommas";
import { BgColor } from "../../color";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageMagnify from "react-image-magnify";
import CloseIcon from "@mui/icons-material/Close";

const imgPant = require("../../assets/images/meesure/Inkedpant_LI.jpg").default;
const imgBody = require("../../assets/images/meesure/body.jpg").default;
const imgShirt = require("../../assets/images/meesure/Ao.jpg").default;

function ProductPanel({ sanPham, isMobile }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);
  const [inputSL, setInputSL] = React.useState(0);
  const openCollectionDialog = useCallback(() => {
    dispatch(showCollectionDialog());
  }, [dispatch]);
  const [listimg, setlistimg] = React.useState([]);
  React.useEffect(() => {
    if (sanPham) {
      sanPham.imgs[0].map((img) => listimg.push(img));
      sanPham.imgs[1].map((img) => listimg.push(img));
    }
  }, [sanPham]);
  const [sp, setSP] = React.useState({
    ten: sanPham.ten,
    imgs: sanPham.imgs,
    newTag: true,
    giaCu: 300000,
    gia: 150000,
    soLuong: 0,
    ngayKetThucSale: "26/12/2021",
    setCountDown: true,
    mauSacs: sanPham.mauSacs[0],
    kichThuocs: sanPham.kichThuocs[0],
    chatLieus: sanPham.chatLieus,
    phongCachs: sanPham.phongCachs,
    kieuDang: sanPham.kieuDang,
    hoatTiet: sanPham.hoatTiet,
    chiTiet: sanPham.chiTiet,
    muas: sanPham.muas,
    description: sanPham.description,
  });
  const btnAddclick = () => {
    setSP({ ...sp, soLuong: sp.soLuong + 1 });
  };
  const btnRemoveclick = () => {
    setSP({ ...sp, soLuong: sp.soLuong - 1 });
  };
  const [open, setOpen] = React.useState(false);
  const [openImg, setOpenIMG] = React.useState({
    show: false,
    src: "",
  });
  const [openSizeGuide, setOpenSizeGuide] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickShowIMGOpen = (img) => {
    setOpenIMG({
      show: true,
      src: listimg.findIndex((e) => e === img),
    });
  };
  const handleIMGClose = () => {
    setOpenIMG({ show: false, src: -1 });
  };
  const handleClickSGOpen = () => {
    setOpenSizeGuide(true);
  };
  const handleSGClose = () => {
    setOpenSizeGuide(false);
  };
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function createDataPaint(Size, Height, Eo, Mong, Dui) {
    return { Size, Height, Eo, Mong, Dui };
  }

  const rows = [
    createDataPaint("XS", 107, 62, 81, 47.8),
    createDataPaint("S", 108, 66, 85, 50),
    createDataPaint("M", 109, 70, 89, 52.2),
    createDataPaint("L", 110.5, 76, 95, 55.4),
  ];
  function createdatabody(Size, Nguc, Eo, Mong) {
    return { Size, Nguc, Eo, Mong };
  }

  const row = [
    createdatabody("XS", "82-86", "62-66", "87-91"),
    createdatabody("S", "86-90", "66-70", "91-95"),
    createdatabody("M", "90-94", "70-74", "95-99"),
    createdatabody("L", "94-100", "74-80", "99-105"),
    createdatabody("XL", "100-106", "80-86", "105-111"),
  ];
  function createdataShirt(
    Size,
    Vai,
    ChieuDai,
    ChieuDaiTay,
    Nguc,
    CoTayAo,
    ChieuDaiBapTay
  ) {
    return { Size, Vai, ChieuDai, ChieuDaiTay, Nguc, CoTayAo, ChieuDaiBapTay };
  }

  const rowAos = [
    createdataShirt("XS", 36, 43.4, 17.5, 83, 50.4, 43),
    createdataShirt("S", 37, 44, 18, 87, 52, 44.5),
    createdataShirt("M", 38, 44.6, 18.5, 91, 53.6, 46),
    createdataShirt("M", 38, 44.6, 18.5, 91, 53.6, 46),
    createdataShirt("XL", 41, 46.4, 19.9, 103, 58.6, 50.6),
  ];
  const Price = (size) => (
    <Box sx={{ display: "flex", alignContent: "center" }}>
      {sanPham.giaCu ? (
        <Typography
          style={{
            textDecoration: "line-through",
            color: "gray",
            fontSize: size,
          }}
        >
          {numberWithCommas(sanPham.giaCu)}
        </Typography>
      ) : null}
      <Typography
        sx={{
          fontSize: size,
          marginLeft: 1,
          fontWeight: "bold",
        }}
      >
        {numberWithCommas(sanPham.gia)}
      </Typography>
    </Box>
  );
  const DialogClickAddCart = () => (
    <Dialog open={open} onClose={handleClose} maxWidth={"70%"}>
      <DialogTitle id="alert-dialog-title" marginBottom={2}>
        <IconButton
          aria-label="close"
          onClick={handleIMGClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        Bạn có muốn thêm sản phẩm {sanPham.ten} vào giỏ hàng không?
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Không</Button>
        <Button onClick={handleClose} autoFocus>
          Đồng ý
        </Button>
      </DialogActions>
    </Dialog>
  );

  const showImage = (size) => (
    <Dialog open={openImg.show} onClose={handleIMGClose} maxWidth={size}>
      <DialogTitle id="scroll-dialog-title" marginBottom={2}>
        <IconButton
          aria-label="close"
          onClick={handleIMGClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {size === "xl" ? (
        <DialogContent>
          <Box width={"100%"} display="flex" alignItems={"center"}>
            <Box
              marginLeft={-2}
              onClick={() => {
                let index = openImg.src;
                if (index) handleClickShowIMGOpen(listimg[index - 1]);
                else handleClickShowIMGOpen(listimg[listimg.length - 1]);
              }}
            >
              <ArrowBackIosNewIcon />
            </Box>
            <Zoom>
              <img src={listimg[openImg.src]} width={"100%"} />
            </Zoom>
            <Box
              marginRight={-2}
              onClick={() => {
                let index = openImg.src;
                if (index < listimg.length - 1)
                  handleClickShowIMGOpen(listimg[index + 1]);
                else handleClickShowIMGOpen(listimg[0]);
              }}
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </DialogContent>
      ) : (
        <DialogContent>
          <Box width="100%" display={"flex"}>
            <Box width={"55%"} display="flex" alignItems={"center"}>
              <Box
                onClick={() => {
                  let index = openImg.src;
                  if (index) handleClickShowIMGOpen(listimg[index - 1]);
                  else handleClickShowIMGOpen(listimg[listimg.length - 1]);
                }}
              >
                <ArrowBackIosNewIcon />
              </Box>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: listimg[openImg.src],
                  },
                  largeImage: {
                    src: listimg[openImg.src],
                    width: 1500,
                    height: 1800,
                  },
                }}
              />
              <Box
                onClick={() => {
                  let index = openImg.src;
                  if (index < listimg.length - 1)
                    handleClickShowIMGOpen(listimg[index + 1]);
                  else handleClickShowIMGOpen(listimg[0]);
                }}
              >
                <ArrowForwardIosIcon />
              </Box>
            </Box>
            <Box width="45%" marginLeft={"2%"}>
              <ImageList cols={4} gap={9} variant="woven">
                {listimg.map((img) => (
                  <Box onClick={() => handleClickShowIMGOpen(img)}>
                    <img src={img} width={"100%"} loading="lazy" />
                  </Box>
                ))}
              </ImageList>
            </Box>
          </Box>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={handleIMGClose}>Đóng</Button>
      </DialogActions>
    </Dialog>
  );
  if (sanPham) {
    if (isMobile) {
      return (
        <Box marginX={1}>
          {showImage("xl")}
          <Box
            sx={{ marginX: 1 }}
            className="Main_Box_Main_img"
            onClick={() =>
              handleClickShowIMGOpen(
                selectedColor === "white"
                  ? sanPham.imgs[0][0]
                  : sanPham.imgs[1][0]
              )
            }
          >
            <img
              src={
                selectedColor === "white"
                  ? sanPham.imgs[0][0]
                  : sanPham.imgs[1][0]
              }
              width={"100%"}
            />
          </Box>
          <Box className="Main_Box_List_img">
            <ImageList cols={4} gap={5} variant="woven">
              {sanPham.imgs[0].map((img, index) => (
                <Box onClick={() => handleClickShowIMGOpen(img)}>
                  <img src={img} width={"100%"} loading="lazy" />
                </Box>
              ))}
            </ImageList>
          </Box>
          <Box marginTop={1}>
            <h3>{sanPham.ten}</h3>
            {Price(16)}
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box className="Main_Box_Right_Color">
            <Box marginTop={2}>
              <h4>Màu sắc</h4>
            </Box>
            <Box marginY={1}>
              <ColorButtonGroup
                colors={sanPham.mauSacs}
                selected={selectedColor}
                setSelected={setSelectedColor}
                only={true}
              />
            </Box>
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box className="Main_Box_Right_Size" marginBottom={1}>
            <Box marginTop={1}>
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
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box className="Main_Box_Right_Input_SL">
            <Box sx={{ alignContent: "center", display: "flex" }} marginY={2}>
              <ButtonGroup variant="outlined">
                <Button
                  sx={{ width: 10, height: 41 }}
                  onClick={btnRemoveclick}
                  disabled={sp.soLuong <= 0}
                >
                  <RemoveIcon />
                </Button>
                <Button disableRipple height={41}>
                  <InputBase
                    value={sp.soLuong}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      setSP({
                        ...sp,
                        soLuong:
                          value < 0
                            ? 0
                            : value > sanPham.tonKho
                            ? sanPham.tonKho
                            : value,
                      });
                    }}
                    sx={{ flex: 1, width: 30 }}
                    type="number"
                    size="small"
                  />
                </Button>
                <Button
                  sx={{ width: 10, height: 41 }}
                  onClick={btnAddclick}
                  disabled={sp.soLuong >= sanPham.tonKho}
                >
                  <AddIcon />
                </Button>
              </ButtonGroup>
            </Box>
            <Box marginY={1}>
              <Typography>Số lượng sản phẩm còn {sanPham.tonKho}</Typography>
            </Box>
          </Box>
          <Box marginY={1}>
            <RatingInfolPanel size={"small"} />
          </Box>
          <Box>
            <ProductPolicy />
          </Box>
        </Box>
      );
    } else
      return (
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box alignContent="center" width="60%" height="100%" display={"flex"}>
            <Box className="Main_Box_List_img" width="20%" height={"100%"}>
              <ImageList cols={1} gap={9} variant="woven">
                {sanPham.imgs[0].map((img) => (
                  <Box onClick={() => handleClickShowIMGOpen(img)}>
                    <img src={img} width={"100%"} loading="lazy" height={150} />
                  </Box>
                ))}
              </ImageList>
            </Box>
            <Box
              sx={{ marginLeft: 2 }}
              className="Main_Box_Main_img"
              width="80%"
              height="100%"
              alignItems="center"
              onClick={() =>
                handleClickShowIMGOpen(
                  selectedColor === "white"
                    ? sanPham.imgs[0][0]
                    : sanPham.imgs[1][0]
                )
              }
            >
              <img
                src={
                  selectedColor === "white"
                    ? sanPham.imgs[0][0]
                    : sanPham.imgs[1][0]
                }
                width={"100%"}
                height={640}
              />
            </Box>
            {showImage("md")}
          </Box>
          <Box
            className="Main_Box_Right"
            width={"40%"}
            marginLeft={3}
            bgcolor={BgColor}
          >
            <Box className="Main_Box_Right_Name">
              <Box>
                <h2>{sanPham.ten}</h2>
              </Box>
              <Box sx={{ display: "flex" }} marginY={1} display={"none"}>
                <RatingInfolPanel size={"medium"} />
                <ShareIcon sx={{ float: "right", width: "10%" }} />
              </Box>
              {Price(22)}
            </Box>
            <Divider
              variant="fullWidth"
              orientation="horizontal"
              marginTop={1}
            />
            <Box className="Main_Box_Right_Color">
              <Box marginTop={1}>
                <h3>Màu sắc</h3>
              </Box>
              <Box marginBottom={1}>
                <ColorButtonGroup
                  colors={sanPham.mauSacs}
                  selected={selectedColor}
                  setSelected={setSelectedColor}
                  only={true}
                />
              </Box>
            </Box>
            <Divider variant="fullWidth" orientation="horizontal" />
            <Box className="Main_Box_Right_Size">
              <Box marginY={1}>
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
            <Box
              sx={{ display: "flex", marginY: 1 }}
              className="Main_Box_Right_Size_Guide"
            >
              <Button onClick={handleClickSGOpen}>
                <StraightenIcon />
                <Typography variant="body2" marginLeft={1}>
                  SIZE GUIDE
                </Typography>
              </Button>
              <Dialog
                open={openSizeGuide}
                onClose={handleSGClose}
                maxWidth="md"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  <h4>Hướng dẫn kích thước</h4>
                  <IconButton
                    aria-label="close"
                    onClick={handleSGClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <TabContext value={value}>
                    <TabList
                      onChange={handleChange}
                      centered
                      indicatorColor="primary"
                    >
                      <Tab label="Phép đo sản phẩm" value={1} />
                      <Tab label="Phép đo cơ thể" value={2} />
                    </TabList>
                    <TabPanel value={1}>
                      {sanPham.phanLoai === "Quan" ? (
                        <>
                          <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Kích thước
                                  </TableCell>
                                  <TableCell align="center">
                                    Chiều dài
                                  </TableCell>
                                  <TableCell align="center">
                                    Kích thước vòng eo
                                  </TableCell>
                                  <TableCell align="center">
                                    Kích thước mông
                                  </TableCell>
                                  <TableCell align="center">Đùi</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rows.map((row) => (
                                  <TableRow key={row.name}>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      align="center"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                      {row.Size}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Height}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Eo}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Mong}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Dui}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <Typography
                            sx={{ fontSize: 14 }}
                            marginY={2}
                            color={"gray"}
                          >
                            *Dữ liệu này có được bằng cách đo thủ công sản phẩm,
                            các phép đo có thể bị thay đổi 1-2 CM.
                          </Typography>
                          <Divider />
                          <Box marginY={2} display={"flex"}>
                            <Box>
                              <Typography marginY={2}>
                                Cách đo kích thước của sản phẩm?
                              </Typography>
                              <Box>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    1
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Eo dưới</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo thẳng trên đầu của cạp quần từ mép này sang
                                  mép kia.
                                </Typography>
                              </Box>
                              <Box marginY={2}>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    2
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Vùng mông</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo thẳng qua đường hông rộng nhất từ mép này
                                  sang mép kia.
                                </Typography>
                              </Box>
                              <Box marginY={2}>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    3
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Đùi</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo thẳng từ đường may đũng quần đến mặt ngoài
                                  của ống chân.
                                </Typography>
                              </Box>
                              <Box marginY={2}>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    4
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Chiều dài đáy</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo từ cạp quần đến khe hở chân hoặc viền áo.
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <img src={imgPant} width={350} />
                            </Box>
                          </Box>
                          <Divider />
                        </>
                      ) : (
                        <>
                          <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Kích thước
                                  </TableCell>
                                  <TableCell align="center">Vai</TableCell>
                                  <TableCell align="center">
                                    Chiều dài
                                  </TableCell>
                                  <TableCell align="center">
                                    Chiề dài tay
                                  </TableCell>
                                  <TableCell align="center">Ngực</TableCell>
                                  <TableCell align="center">
                                    Cổ tay áo
                                  </TableCell>
                                  <TableCell align="center">
                                    chiều dài bắp tay
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {rowAos.map((row) => (
                                  <TableRow key={row.name}>
                                    <TableCell
                                      component="th"
                                      scope="row"
                                      align="center"
                                      sx={{ fontWeight: "bold" }}
                                    >
                                      {row.Size}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Vai}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.ChieuDai}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.ChieuDaiTay}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.Nguc}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.CoTayAo}
                                    </TableCell>
                                    <TableCell align="center">
                                      {row.ChieuDaiBapTay}
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <Typography
                            sx={{ fontSize: 14 }}
                            marginY={2}
                            color={"gray"}
                          >
                            *Dữ liệu này có được bằng cách đo thủ công sản phẩm,
                            các phép đo có thể bị thay đổi 1-2 CM.
                          </Typography>
                          <Divider />
                          <Box marginY={2} display={"flex"}>
                            <Box>
                              <Typography marginY={2}>
                                Cách đo kích thước của sản phẩm?
                              </Typography>
                              <Box>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    1
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Vai</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo từ nơi đường nối vai gặp tay áo bên này
                                  sang bên kia.
                                </Typography>
                              </Box>
                              <Box marginY={2}>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    2
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Vòng ngực</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo từ các mũi khâu bên dưới nách bên này sang
                                  bên kia.
                                </Typography>
                              </Box>
                              <Box marginY={2}>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    3
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Chiều dài</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo từ nơi đường nối vai gặp cổ áo đến gấu áo.
                                </Typography>
                              </Box>
                              <Box marginY={2}>
                                <Box display="flex" alignItems={"center"}>
                                  <Fab size="small" color="primary">
                                    4
                                  </Fab>
                                  <Box marginLeft={1}>
                                    <h5>Tay áo</h5>
                                  </Box>
                                </Box>
                                <Typography
                                  fontSize={14}
                                  marginY={1}
                                  color={"gray"}
                                >
                                  Đo từ nơi đường nối vai gặp lỗ tay đến cổ tay
                                  áo.
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <img src={imgShirt} width={350} />
                            </Box>
                          </Box>
                          <Divider />
                        </>
                      )}
                    </TabPanel>
                    <TabPanel value={2}>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Kích thước</TableCell>
                              <TableCell align="center">Ngực</TableCell>
                              <TableCell align="center">
                                Kích thước vòng eo
                              </TableCell>
                              <TableCell align="center">
                                Kích thước mông
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {row.map((row) => (
                              <TableRow key={row.name}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  align="center"
                                  sx={{ fontWeight: "bold" }}
                                >
                                  {row.Size}
                                </TableCell>
                                <TableCell align="center">{row.Nguc}</TableCell>
                                <TableCell align="center">{row.Eo}</TableCell>
                                <TableCell align="center">{row.Mong}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Typography
                        sx={{ fontSize: 14 }}
                        marginY={2}
                        color={"gray"}
                      >
                        *Tùy thuộc vào loại cơ thể của bạn và thói quen mặc quần
                        áo, các kích thước trên chỉ mang tính tham khảo.
                      </Typography>
                      <Divider />
                      <Box marginY={2} display={"flex"}>
                        <Box>
                          <Typography marginY={2}>
                            Làm thế nào để đo cơ thể của bạn?{" "}
                          </Typography>
                          <Box>
                            <Box display="flex" alignItems={"center"}>
                              <Fab size="small" color="primary">
                                1
                              </Fab>
                              <Box marginLeft={1}>
                                <h5>Bust của bạn</h5>
                              </Box>
                            </Box>
                            <Typography
                              fontSize={14}
                              marginY={1}
                              color={"gray"}
                            >
                              Đo chu vi trên phần đầy đủ nhất của bức tượng bán
                              thân của bạn.
                            </Typography>
                          </Box>
                          <Box marginY={2}>
                            <Box display="flex" alignItems={"center"}>
                              <Fab size="small" color="primary">
                                2
                              </Fab>
                              <Box marginLeft={1}>
                                <h5>Eo của bạn</h5>
                              </Box>
                            </Box>
                            <Typography
                              fontSize={14}
                              marginY={1}
                              color={"gray"}
                            >
                              Đo vòng eo của bạn ở nơi gầy nhất.
                            </Typography>
                          </Box>
                          <Box marginY={2}>
                            <Box display="flex" alignItems={"center"}>
                              <Fab size="small" color="primary">
                                3
                              </Fab>
                              <Box marginLeft={1}>
                                <h5>Hông của bạn</h5>
                              </Box>
                            </Box>
                            <Typography
                              fontSize={14}
                              marginY={1}
                              color={"gray"}
                            >
                              Đo phần đầy đủ nhất của hông của bạn.
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <img src={imgBody} width={345} />
                        </Box>
                      </Box>
                      <Divider />
                    </TabPanel>
                  </TabContext>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleSGClose}>Đóng</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Divider variant="fullWidth" orientation="horizontal" />
            <Box className="Main_Box_Right_Input_SL">
              <Box sx={{ alignContent: "center", display: "flex" }} marginY={1}>
                <ButtonGroup variant="outlined">
                  <Button
                    sx={{ width: 10 }}
                    onClick={btnRemoveclick}
                    disabled={sp.soLuong <= 0}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button disableRipple>
                    <InputBase
                      value={sp.soLuong}
                      onChange={(e) => {
                        let value = Number(e.target.value);
                        setSP({
                          ...sp,
                          soLuong:
                            value < 0
                              ? 0
                              : value > sanPham.tonKho
                              ? sanPham.tonKho
                              : value,
                        });
                      }}
                      sx={{ flex: 1, width: 30 }}
                      type="number"
                    />
                  </Button>
                  <Button
                    sx={{ width: 10 }}
                    onClick={btnAddclick}
                    disabled={sp.soLuong >= sanPham.tonKho}
                  >
                    <AddIcon />
                  </Button>
                </ButtonGroup>
                {DialogClickAddCart()}
                <Button
                  variant="contained"
                  sx={{
                    alignItems: "center",
                    height: 40,
                    width: "50%",
                    marginLeft: 2,
                    background: "#303537",
                    borderRadius: 1,
                    marginTop: 0.2,
                  }}
                  disabled={!sp.soLuong}
                  onClick={handleClickOpen}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Box>
              <Box marginY={1}>
                <Typography>Số lượng sản phẩm còn {sanPham.tonKho}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignContent: "center" }}>
                <Button onClick={openCollectionDialog}>
                  <AddBox />
                  <h4 style={{ marginTop: 2.7, marginLeft: 5 }}>
                    THÊM VÀO DANH SÁCH
                  </h4>
                </Button>
              </Box>
            </Box>
            <Divider variant="fullWidth" orientation="horizontal" />
            <Box>
              <ProductPolicy />
            </Box>
          </Box>
        </Box>
      );
  }
}

export default ProductPanel;
