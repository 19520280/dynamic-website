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
import { cartProducts } from "../../dataSources/CartProducts";

const PaymentCartLeftTable = ({ color}) => {
  const [soLuong, setSoLuong] = React.useState(1);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: color ? color : "white",
        border: color ? "0px" : "1px solid",
        borderRadius: "4px",
        borderColor: SystemColor.gray,
        padding: "0px 12px",
      }}
    >
      <TableContainer
        sx={{ minWidth: "80%", paddingTop: color ? "0px" : "16px" }}
      >
        <Table
          sx={{ minWidth: "80%" }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <TableBody>
            <Typography
              variant="button"
              fontWeight="bold"
              color="secondary"
            >
              {`DANH SÁCH SẢN PHẨM (${cartProducts.length})`}
            </Typography>
            {cartProducts.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow tabIndex={-1} key={row.ten}>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    <CartProductDetail sanPham={row} isQty={false} readOnly />
                  </TableCell>
                  <TableCell align="center">
                    <PriceTypography
                      justifyContent="center"
                      giaCu={row.giaCu}
                      gia={row.gia}
                      isMobile={true}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <PriceTypography
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

export default PaymentCartLeftTable;
