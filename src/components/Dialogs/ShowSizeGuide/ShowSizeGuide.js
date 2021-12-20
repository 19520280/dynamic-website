import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
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
  Divider,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { SizeGuideDialogState$ } from "../../../redux/selectors";
import { hideSizeGuideDialog } from "../../../redux/actions";
const imgPant =
  require("../../../assets/images/meesure/Inkedpant_LI.jpg").default;
const imgBody = require("../../../assets/images/meesure/body.jpg").default;
const imgShirt = require("../../../assets/images/meesure/Ao.jpg").default;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ShowSizeGuide({ sanPham }) {
  const dispatch = useDispatch();
  const open = useSelector(SizeGuideDialogState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideSizeGuideDialog());
  }, [dispatch]);
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tableHeadPant = [
    "Kích thước",
    "Chiều dài",
    "Vòng eo",
    "Kích thước mông",
    "Đùi",
  ];
  const tableHeadAo = [
    "Kích thước",
    "Vai",
    "Chiều dài",
    "Chiều dài tay",
    "Ngực",
    "Cổ tay áo",
    "Chiều dài bắp tay",
  ];
  const tableHeadBody = [
    "Kích thước",
    "Chiều dài",
    "Vòng eo",
    "Kích thước mông",
  ];

  function createDataPaint(Size, Height, Eo, Mong, Dui) {
    return { Size, Height, Eo, Mong, Dui };
  }

  const rowQuans = [
    createDataPaint("XS", 107, 62, 81, 47.8),
    createDataPaint("S", 108, 66, 85, 50),
    createDataPaint("M", 109, 70, 89, 52.2),
    createDataPaint("L", 110.5, 76, 95, 55.4),
  ];
  function createdatabody(Size, Nguc, Eo, Mong) {
    return { Size, Nguc, Eo, Mong };
  }

  const rowBodys = [
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

  const CachDoQuan = [
    {
      name: "Eo dưới",
      info: "Đo thẳng trên đầu của cạp quần từ mép này sang mép kia.",
    },
    {
      name: "Vùng mông",
      info: "Đo thẳng qua đường hông rộng nhất từ mép này sang mép kia.",
    },
    {
      name: "Đùi",
      info: "Đo thẳng từ đường may đũng quần đến mặt ngoài của ống chân.",
    },
    {
      name: "Chiều dài đáy",
      info: "Đo từ cạp quần đến khe hở chân hoặc viền áo.",
    },
  ];

  const CachDoAo = [
    {
      name: "Vai",
      info: "Đo từ nơi đường nối vai gặp tay áo bên này sang bên kia.",
    },
    {
      name: "Vòng ngực",
      info: "Đo từ các mũi khâu bên dưới nách bên này sang bên kia.",
    },
    {
      name: "Chiều dài",
      info: "Đo từ nơi đường nối vai gặp cổ áo đến gấu áo.",
    },
    {
      name: "Tay áo",
      info: "Đo từ nơi đường nối vai gặp lỗ tay đến cổ tay áo.",
    },
  ];

  const rowAos = [
    createdataShirt("XS", 36, 43.4, 17.5, 83, 50.4, 43),
    createdataShirt("S", 37, 44, 18, 87, 52, 44.5),
    createdataShirt("M", 38, 44.6, 18.5, 91, 53.6, 46),
    createdataShirt("M", 38, 44.6, 18.5, 91, 53.6, 46),
    createdataShirt("XL", 41, 46.4, 19.9, 103, 58.6, 50.6),
  ];

  const CachDoBody = [
    {
      name: "Bust của bạn",
      info: "Đo chu vi trên phần đầy đủ nhất của bức tượng bán thân của bạn.",
    },
    { name: "Eo", info: "Đo vòng eo của bạn ở nơi gầy nhất." },
    { name: "Hông của bạn", info: "Đo phần đầy đủ nhất của hông của bạn." },
  ];

  const CachDo = (cachDo) =>
    cachDo.map((e, index) => (
      <Box marginY={2}>
        <Box display="flex" alignItems={"center"}>
          <Fab size="small" color="primary">
            {index + 1}
          </Fab>
          <Box marginLeft={1}>
            <h5>{e.name}</h5>
          </Box>
        </Box>
        <Typography fontSize={14} marginY={1} color={"gray"}>
          {e.info}
        </Typography>
      </Box>
    ));

  const body = (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle sx={{ textAlign: "center" }} marginBottom={-1}>
        Hướng dẫn kích thước
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
        <Box sx={{ width: "100%" }}>
          <Box marginBottom={-3}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Phép đo sản phẩm" {...a11yProps(0)} />
              <Tab label="Phép đo cơ thể" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {sanPham.phanLoai === "Quan"
                      ? tableHeadPant.map((e) => (
                          <TableCell align="center">{e}</TableCell>
                        ))
                      : tableHeadAo.map((e) => (
                          <TableCell align="center">{e}</TableCell>
                        ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sanPham.phanLoai === "Quan"
                    ? rowQuans.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            {row.Size}
                          </TableCell>
                          <TableCell align="center">{row.Height}</TableCell>
                          <TableCell align="center">{row.Eo}</TableCell>
                          <TableCell align="center">{row.Mong}</TableCell>
                          <TableCell align="center">{row.Dui}</TableCell>
                        </TableRow>
                      ))
                    : rowAos.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            sx={{ fontWeight: "bold" }}
                          >
                            {row.Size}
                          </TableCell>
                          <TableCell align="center">{row.Vai}</TableCell>
                          <TableCell align="center">{row.ChieuDai}</TableCell>
                          <TableCell align="center">
                            {row.ChieuDaiTay}
                          </TableCell>
                          <TableCell align="center">{row.Nguc}</TableCell>
                          <TableCell align="center">{row.CoTayAo}</TableCell>
                          <TableCell align="center">
                            {row.ChieuDaiBapTay}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography sx={{ fontSize: 14 }} marginY={2} color={"gray"}>
              *Dữ liệu này có được bằng cách đo thủ công sản phẩm, các phép đo
              có thể bị thay đổi 1-2 CM.
            </Typography>
            <Divider />
            <Box marginY={2} display={"flex"}>
              <Box>
                <Typography marginY={2}>
                  Cách đo kích thước của sản phẩm?
                </Typography>
                {sanPham.phanLoai === "Quan"
                  ? CachDo(CachDoQuan)
                  : CachDo(CachDoAo)}
              </Box>
              <Box>
                {sanPham.phanLoai === "Quan" ? (
                  <img src={imgPant} width={350} />
                ) : (
                  <img src={imgShirt} width={350} />
                )}
              </Box>
            </Box>
            <Divider />{" "}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    {tableHeadBody.map((e) => (
                      <TableCell align="center">{e}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowBodys.map((row) => (
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
              *Tùy thuộc vào loại cơ thể của bạn và thói quen mặc quần áo, các
              kích thước trên chỉ mang tính tham khảo.
            </Typography>
            <Divider />
            <Box marginY={2} display={"flex"}>
              <Box>
                <Typography marginY={2}>
                  Làm thế nào để đo cơ thể của bạn?
                </Typography>
                {CachDo(CachDoBody)}
              </Box>
              <Box>
                <img src={imgBody} width={295} />
              </Box>
            </Box>
            <Divider />
          </TabPanel>
        </Box>
      </DialogContent>
    </Dialog>
  );
  return body;
}

export default ShowSizeGuide;
