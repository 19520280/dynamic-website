import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import CartProductDetail from "../CartProductDetail/CartProductDetail";
import PriceTypography from "../Typographys/PriceTypography";
import React from "react";
import { SystemColor } from "../../color";

import { useDispatch, useSelector } from "react-redux";
import { OrderStatusState$ } from "../../redux/selectors";
import { Orders } from "../../dataSources/Orders";

const PointCartLeftTable = () => {
  const [soLuong, setSoLuong] = React.useState(1);
  const Status = useSelector(OrderStatusState$);
  console.log(Status.payload);
  const listSP =
    Status.payload == "ĐÃ NHẬN"
      ? Orders.filter((data) => data.trangThai == Status.payload)
      : Status.payload == "ĐÃ DÙNG"
      ? Orders.filter((data) => data.trangThai == Status.payload)
      : Orders;
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        padding: "0px 12px",
      }}
    >
      <TableContainer sx={{ minWidth: "80%", paddingTop: "0px" }}>
        <Table
          sx={{ minWidth: "80%" }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <TableBody>
            {listSP.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow tabIndex={-1} key={row.ten}>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    <CartProductDetail
                      sanPham={row}
                      isQty={false}
                      readOnly
                      total={"2"}
                    />
                  </TableCell>

                  <TableCell align="right">
                    <PriceTypography
                      point={row.diem}
                      gia={soLuong * row.gia}
                      isMobile={true}
                      justifyContent="center"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PointCartLeftTable;
