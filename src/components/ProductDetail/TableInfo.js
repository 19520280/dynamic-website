import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { SystemColor } from "../../color";

export default function TableInfo({ sanPham }) {
  const [row, setRow] = React.useState({
    PC: "",
    KD: "",
    HT: "",
    CT: "",
    CL: "",
    M: "",
    BQ: "",
  });
  React.useEffect(() => {
    let pcs = "";
    sanPham.phongCachs.map((pc) => {
      pcs += ", " + pc;
    });
    let cls = "";
    sanPham.chatLieus.map((cl) => {
      cls += ", " + cl;
    });
    let ms = "";
    sanPham.muas.map((m) => {
      ms += ", " + m;
    });
    setRow({
      PC: pcs.slice(2),
      KD: sanPham.kieuDang,
      HT: sanPham.hoatTiet,
      CT: sanPham.chiTiet,
      CL: cls.slice(2),
      M: ms.slice(2),
      BQ: "Giặt tay, không sử dụng thuốc tẩy, là với nhiệt độ thấp hơn 70 độ C",
    });
  }, [sanPham]);
  return (
    <TableContainer
      component={Paper}
      width="100%"
      border={1}
      borderRadius={1}
      borderColor={SystemColor.gray}
    >
      <Table
        aria-label="simple table"
        border={1}
        borderRadius={1}
        borderColor={SystemColor.gray}
      >
        <TableBody>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Phong cách</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.PC}
            </TableCell>
          </TableRow>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Kiểu dáng</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.KD}
            </TableCell>
          </TableRow>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Họa tiết</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.HT}
            </TableCell>
          </TableRow>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Chi tiết</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.CT}
            </TableCell>
          </TableRow>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Chất liệu</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.CL}
            </TableCell>
          </TableRow>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Mùa</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.M}
            </TableCell>
          </TableRow>
          <TableRow border={1}>
            <TableCell component="th" scope="row" width="30%" border={1}>
              <Typography fontWeight={"bold"}>Cách bảo quản</Typography>
            </TableCell>
            <TableCell component="th" scope="row" border={1}>
              {row.BQ}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
