import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const row = {
  PC: "Đi làm, đi học",
  KD: "Form tộng",
  HT: "Caro",
  CT: "Không xẻ tà, lai bầu, ống tay áo dài",
  CL: "Cotton",
  M: "Mùa deadline",
  BQ: "Giặt tay, không sử dụng thuốc tẩy, là với nhiệt độ thấp hơn 70 độ C",
};
const height = 50;

export default function TableInfo() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500, border: 2 }} aria-label="simple table">
        <TableBody>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Phong cách
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.PC}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Kiểu dáng
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.KD}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Họa tiết
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.HT}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Chi tiết
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.CT}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Chất liệu
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.CL}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Mùa
            </TableCell>
            <TableCell component="th" scope="row" sx={{ border: 1 }}>
              {row.M}
            </TableCell>
          </TableRow>
          <TableRow sx={{ border: 1, height: { height } }}>
            <TableCell
              component="th"
              scope="row"
              sx={{ width: 200, border: 1, fontWeight: 600 }}
            >
              Bảo quản
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
