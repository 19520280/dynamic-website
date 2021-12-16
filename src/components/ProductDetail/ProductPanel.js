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
} from "@mui/material";
import { TabPanel, TabContext, TabList } from "@material-ui/lab";
import RatingInfolPanel from "./RatingInfoPanel";
import ShareIcon from "@mui/icons-material/Share";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddBox, Message } from "@mui/icons-material";
import ProductPolicy from "./ProductPolicy";
import { keys } from "@mui/system";
const imgPant = require("../../assets/images/meesure/Inkedpant_LI.jpg").default;
const imgBody = require("../../assets/images/meesure/body.jpg").default;

function ProductPanel({ sanPham }) {
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);
  const [inputSL, setInputSL] = React.useState(0);
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
  const [openSizeGuide, setOpenSizeGuide] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
  function createData(Size, Height, Eo, Mong, Dui) {
    return { Size, Height, Eo, Mong, Dui };
  }

  const rows = [
    createData("XS", 107, 62, 81, 47.8),
    createData("S", 108, 66, 85, 50),
    createData("M", 109, 70, 89, 52.2),
    createData("L", 110.5, 76, 95, 55.4),
  ];
  function createdata(Size, Nguc, Eo, Mong) {
    return { Size, Nguc, Eo, Mong };
  }

  const row = [
    createdata("XS", "82-86", "62-66", "87-91"),
    createdata("S", "86-90", "66-70", "91-95"),
    createdata("M", "90-94", "70-74", "95-99"),
    createdata("L", "94-100", "74-80", "99-105"),
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: 762,
        width: 1280,
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
          <img
            src={
              selectedColor === "white"
                ? sanPham.imgs[1][0]
                : sanPham.imgs[1][1]
            }
            width={500}
            height={760}
          />
        </Box>
      </Box>
      <Box sx={{ marginLeft: 4, width: 475 }}>
        <Box height={150}>
          <Box>
            <h2>{sanPham.ten}</h2>
          </Box>
          <Box sx={{ display: "flex" }} marginY={2}>
            <RatingInfolPanel size={"medium"} />
            <ShareIcon
              sx={{ float: "right", width: 25, height: 30, marginLeft: 5 }}
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
        <Box height={80}>
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
        <Box sx={{ display: "flex", height: 30, marginY: 1, width: 150 }}>
          <Button onClick={handleClickSGOpen}>
            <StraightenIcon />
            <Typography variant="body2" marginLeft={1}>
              SIZE GUIDE
            </Typography>
          </Button>
          <Dialog open={openSizeGuide} onClose={handleSGClose} maxWidth="md">
            <DialogTitle sx={{ textAlign: "center" }}>
              <h4>Hướng dẫn kích thước</h4>
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
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Kích thước</TableCell>
                          <TableCell align="center">Chiều dài</TableCell>
                          <TableCell align="center">
                            Kích thước vòng eo
                          </TableCell>
                          <TableCell align="center">Kích thước mông</TableCell>
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
                              {row.size}
                            </TableCell>
                            <TableCell align="center">{row.Height}</TableCell>
                            <TableCell align="center">{row.Eo}</TableCell>
                            <TableCell align="center">{row.Mong}</TableCell>
                            <TableCell align="center">{row.Dui}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Typography sx={{ fontSize: 14 }} marginY={2} color={"gray"}>
                    *Dữ liệu này có được bằng cách đo thủ công sản phẩm, các
                    phép đo có thể bị thay đổi 1-2 CM.
                  </Typography>
                  <Divider />
                  <Box marginY={2} display={"flex"}>
                    <Box>
                      <Typography marginY={2}>
                        Kích thước của sản phẩm?
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo thẳng trên đầu của cạp quần từ mép này sang mép
                          kia.
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo thẳng qua đường hông rộng nhất từ mép này sang mép
                          kia.
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo thẳng từ đường may đũng quần đến mặt ngoài của ống
                          chân.
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo từ cạp quần đến khe hở chân hoặc viền áo.
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img src={imgPant} width={350} />
                    </Box>
                  </Box>
                  <Divider />
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
                          <TableCell align="center">Kích thước mông</TableCell>
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
                  <Typography sx={{ fontSize: 14 }} marginY={2} color={"gray"}>
                    *Tùy thuộc vào loại cơ thể của bạn và thói quen mặc quần áo,
                    các kích thước trên chỉ mang tính tham khảo.
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo chu vi trên phần đầy đủ nhất của bức tượng bán thân
                          của bạn.
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo phần đầy đủ nhất của hông của bạn.
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
                        <Typography fontSize={14} marginY={1} color={"gray"}>
                          Đo từ cạp quần đến khe hở chân hoặc viền áo.
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <img src={imgBody} width={350} />
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
        <Box height={144}>
          <Box sx={{ alignContent: "center", display: "flex" }} marginY={2}>
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
            <Button
              variant="contained"
              sx={{
                alignItems: "center",
                height: 40,
                width: 220,
                marginLeft: 2,
                background: "#303537",
                borderRadius: 1,
                marginTop: 0.5,
              }}
              disabled={!sp.soLuong}
              onClick={handleClickOpen}
            >
              Thêm vào giỏ hàng
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle id="alert-dialog-title">
                Bạn có muốn thêm sản phẩm {sanPham.ten} vào giỏ hàng không?
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Không</Button>
                <Button onClick={handleClose} autoFocus>
                  Đồng ý
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Box marginY={1}>
            <Typography>Số lượng sản phẩm còn {sanPham.tonKho}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignContent: "center" }} width={230}>
            <Button>
              <AddBox />
              <h5 style={{ marginTop: 2.7 }}>THÊM VÀO DANH SÁCH</h5>
            </Button>
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
