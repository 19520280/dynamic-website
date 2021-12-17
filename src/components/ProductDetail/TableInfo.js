import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    <TableContainer component={Paper} border="solid" sx={{ width: "100%" }}>
      <Table sx={{ border: 2 }} aria-label="simple table">
        <TableBody>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1 }}
            >
              <h4>Phong cách</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.PC}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: "30%", border: 1 }}
            >
              <h4>Kiểu dáng</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.KD}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: "30%", border: 1 }}
            >
              <h4>Họa tiết</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.HT}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: "30%", border: 1 }}
            >
              <h4>Chi tiết</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.CT}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: "30%", border: 1 }}
            >
              <h4>Chất liệu</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.CL}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: "30%", border: 1 }}
            >
              <h4>Mùa</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.M}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1 }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: "30%", border: 1 }}
            >
              <h4>Cách bảo quản</h4>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.BQ}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
