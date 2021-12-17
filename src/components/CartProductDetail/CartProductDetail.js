import "./CartProductDetail.css";

import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";

import { Circle } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { SystemColor } from "../../color";

const CartProductDetail = ({ sanPham, readOnly, total }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
          <Typography color="primary" fontSize={isMobile ? "0.8rem" : "0.85rem"}>
            {sanPham.ten}
          </Typography>
          {!total? (
            <Stack
            direction="row"
            alignItems="center"
            spacing={0.6}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box sx={{ width: "60px" }}>
              <Typography color="secondary" fontSize={isMobile ? "0.75rem" : "0.8rem"}>
                Size: {sanPham.kichThuoc}
              </Typography>
            </Box>
            <Box sx={{ width: "auto", paddingRight:"10px" }}>
              <Stack direction="row" spacing={1}>
                <Typography color="secondary" fontSize={isMobile ? "0.75rem" : "0.8rem"}>
                  Màu sắc:
                </Typography>
                <Circle
                  style={{
                    border: "1px solid",
                    borderColor: SystemColor.gray,
                    color: sanPham.mauSac,
                    minWidth: "0px",
                    padding: "0px",
                    marginTop: "3px",
                    borderRadius: "50%",
                  }}
                  fontSize="smaller"
                />
              </Stack>
            </Box>

            {!readOnly ? (
              <IconButton title="Chỉnh sửa phân loại">
                <EditIcon fontSize="small" />
              </IconButton>
            ) : null}
          </Stack>
          ):null}
          
          {total ? (
            <>
              <Typography color="primary" fontSize={isMobile ? "0.75rem" : "0.8rem"}>
                {`+ ${sanPham.soLuong} sản phẩm khác`}
              </Typography>
              <Typography color="secondary" fontSize="0.8rem">
                {sanPham.ngay}
              </Typography>
            </>
          ) : null}

          {readOnly && !total ? (
            <Typography color="secondary" fontSize={isMobile ? "0.75rem" : "0.8rem"} fontWeight="medium">
              {`x ${sanPham.soLuong}`}
            </Typography>
          ) : null}
        </Stack>
      </Stack>
    </div>
  );
};

export default CartProductDetail;
