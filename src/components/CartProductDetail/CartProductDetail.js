import "./CartProductDetail.css";

import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Circle } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { SystemColor } from "../../color";

const CartProductDetail = ({ sanPham, readOnly, total }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(sanPham);
  return (
    <div className="product-item">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1.5}
      >
        <img src={sanPham.image} />
        <Stack direction="column" spacing={1.5} alignItems="flex-start">
          <Typography color="primary" fontSize="1rem">
            {sanPham.ten}
          </Typography>
          {!total ? (
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box sx={{ width: "60px" }}>
                <Typography color="secondary" fontSize="0.875rem">
                  Size: {sanPham.kichThuoc}
                </Typography>
              </Box>
              <Box sx={{ width: "auto", paddingRight: "10px" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography color="secondary" fontSize="0.875rem">
                    Màu sắc:
                  </Typography>
                  <Circle
                    style={{
                      border: "1px solid",
                      borderColor: SystemColor.gray,
                      color: sanPham.mauSac,
                      minWidth: "0px",
                      padding: "0px",
                      borderRadius: "50%",
                    }}
                    fontSize="smaller"
                  />
                </Stack>
              </Box>

              {!readOnly ? (
                <IconButton
                  title="Chỉnh sửa phân loại"
                  sx={{ marginLeft: "0px" }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              ) : null}
            </Stack>
          ) : null}

          {total ? (
            <>
              <Typography color="primary" fontSize="0.875rem">
                {`+ ${sanPham.soLuong} sản phẩm khác`}
              </Typography>
              <Typography color="secondary" fontSize="0.8rem">
                {sanPham.ngay}
              </Typography>
            </>
          ) : null}

          {readOnly && !total ? (
            <Typography
              color="secondary"
              fontSize="0.875rem"
              fontWeight="medium"
            >
              {`x ${sanPham.soLuong}`}
            </Typography>
          ) : null}
        </Stack>
      </Stack>
    </div>
  );
};

export default CartProductDetail;
