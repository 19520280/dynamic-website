import {
  Box,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SystemColor, TxtColor } from "../../color";

import CartProductDetail from "../CartProductDetail/CartProductDetail";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NumericTextField from "./../TextFields/NumericTextField";
import PriceTypography from "../Typographys/PriceTypography";
import React from "react";
import { cartProducts } from "../../dataSources/CartProducts";

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead
      sx={{
        position: "sticky",
        top: "12px",
      }}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            title="Chọn tất cả"
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            size="small"
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        <TableCell>
          {`Sản phẩm ${numSelected > 0 ? `(${numSelected})` : ""}`}
        </TableCell>
        <TableCell align="right" sx={{ color: "secondary" }}>
          Đơn giá
        </TableCell>
        <TableCell align="center" sx={{ color: "secondary" }}>
          Số lượng
        </TableCell>
        <TableCell align="right" sx={{ color: TxtColor.txtSecond }}>
          Thành tiền
        </TableCell>

        <TableCell align="right" padding="checkbox">
          <IconButton title="Xóa mục đã chọn">
            <DeleteOutlinedIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

const CheckCartLeftTable = () => {
  /* #region  handleSelected */
  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = cartProducts.map((n) => n.ten);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, ten) => {
    const selectedIndex = selected.indexOf(ten);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, ten);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (ten) => selected.indexOf(ten) !== -1;
  /* #endregion */

  const [soLuong, setSoLuong] = React.useState(1);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        border: "1px solid",
        borderRadius: "8px",
        borderColor: SystemColor.gray,
        padding: "0px 12px",
      }}
    >
      <TableContainer>
        <Table
          sx={{ minWidth: "80%" }}
          aria-labelledby="tableTitle"
          size="medium"
        >
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={cartProducts.length}
          />
          <TableBody>
            {cartProducts.map((row, index) => {
              const isItemSelected = isSelected(row.ten);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.ten}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      size="small"
                      color="primary"
                      checked={isItemSelected}
                      onClick={(event) => handleClick(event, row.ten)}
                      inputProps={{
                        "aria-labelledby": labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                  >
                    <CartProductDetail sanPham={row} isQty={false} />
                  </TableCell>
                  <TableCell align="right">
                    <PriceTypography
                      justifyContent="flex-end"
                      giaCu={row.giaCu}
                      gia={row.gia}
                      isMobile={true}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <NumericTextField soLuong={row.soLuong} />
                  </TableCell>
                  <TableCell align="right">
                    <PriceTypography
                      gia={soLuong * row.gia}
                      isMobile={true}
                      justifyContent="flex-end"
                    />
                  </TableCell>
                  <TableCell align="right" padding="checkbox">
                    <IconButton>
                      <DeleteOutlinedIcon fontSize="small" />
                    </IconButton>
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

export default CheckCartLeftTable;
