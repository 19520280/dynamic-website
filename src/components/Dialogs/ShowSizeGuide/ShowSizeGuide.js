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
    "K??ch th?????c",
    "Chi???u d??i (cm)",
    "V??ng eo (cm)",
    "K??ch th?????c m??ng (cm)",
    "????i (cm)",
  ];
  const tableHeadAo = [
    "K??ch th?????c",
    "Vai (cm)",
    "Chi???u d??i (cm)",
    "Chi???u d??i tay (cm)",
    "Ng???c (cm)",
    "C??? tay ??o (cm)",
    "Chi???u d??i b???p tay (cm)",
  ];
  const tableHeadBody = [
    "K??ch th?????c",
    "Chi???u d??i (cm)",
    "V??ng eo (cm)",
    "K??ch th?????c m??ng (cm)",
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
      name: "Eo d?????i",
      info: "??o th???ng tr??n ?????u c???a c???p qu???n t??? m??p n??y sang m??p kia.",
    },
    {
      name: "V??ng m??ng",
      info: "??o th???ng qua ???????ng h??ng r???ng nh???t t??? m??p n??y sang m??p kia.",
    },
    {
      name: "????i",
      info: "??o th???ng t??? ???????ng may ????ng qu???n ?????n m???t ngo??i c???a ???ng ch??n.",
    },
    {
      name: "Chi???u d??i ????y",
      info: "??o t??? c???p qu???n ?????n khe h??? ch??n ho???c vi???n ??o.",
    },
  ];

  const CachDoAo = [
    {
      name: "Vai",
      info: "??o t??? n??i ???????ng n???i vai g???p tay ??o b??n n??y sang b??n kia.",
    },
    {
      name: "V??ng ng???c",
      info: "??o t??? c??c m??i kh??u b??n d?????i n??ch b??n n??y sang b??n kia.",
    },
    {
      name: "Chi???u d??i",
      info: "??o t??? n??i ???????ng n???i vai g???p c??? ??o ?????n g???u ??o.",
    },
    {
      name: "Tay ??o",
      info: "??o t??? n??i ???????ng n???i vai g???p l??? tay ?????n c??? tay ??o.",
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
      name: "Ng???c c???a b???n",
      info: "??o chu vi tr??n ph???n ?????y ????? nh???t c???a b???c t?????ng b??n th??n c???a b???n.",
    },
    { name: "Eo", info: "??o v??ng eo c???a b???n ??? n??i g????y nh???t." },
    { name: "H??ng c???a b???n", info: "??o ph???n ?????y ????? nh???t c???a h??ng c???a b???n." },
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
        H?????ng d???n k??ch th?????c
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
              <Tab label="Ph??p ??o s???n ph???m" {...a11yProps(0)} />
              <Tab label="Ph??p ??o c?? th???" {...a11yProps(1)} />
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
              *D??? li???u n??y c?? ???????c b???ng c??ch ??o th??? c??ng s???n ph???m, c??c ph??p ??o
              c?? th??? b??? thay ?????i 1-2 CM.
            </Typography>
            <Divider />
            <Box marginY={2} display={"flex"}>
              <Box>
                <Typography marginY={2}>
                  C??ch ??o k??ch th?????c c???a s???n ph???m?
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
            <Divider />
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
              *T??y thu???c v??o lo???i c?? th??? c???a b???n v?? th??i quen m???c qu???n ??o, c??c
              k??ch th?????c tr??n ch??? mang t??nh tham kh???o.
            </Typography>
            <Divider />
            <Box marginY={2} display={"flex"}>
              <Box>
                <Typography marginY={2}>
                  L??m th??? n??o ????? ??o c?? th??? c???a b???n?
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
