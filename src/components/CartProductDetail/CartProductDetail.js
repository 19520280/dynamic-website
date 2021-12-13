import "./CartProductDetail.css";

import { Stack, Typography } from "@mui/material";

import { Circle } from "@mui/icons-material";
import React from "react";
import { SystemColor } from "../../color";

const CartProductDetail = ({ sanPham, readOnly }) => {
  return (
    <div className="product-item">
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1.5}
      >
        <img src={sanPham.image} />
        <Stack direction="column" spacing={1} alignItems="flex-start">
          <Typography color="primary" fontSize="1.1rem">
            {sanPham.ten}
          </Typography>

          <Stack direction="row" spacing={2.5} alignItems="center">
            <Typography color="secondary" fontSize="0.9rem" fontWeight="bold">
              {`Kích thước: ${sanPham.kichThuoc}`}
            </Typography>
            <Typography color="secondary" fontSize="0.9rem" fontWeight="bold">
              Màu sắc:
            </Typography>
            <Circle
              style={{
                border: "1px solid",
                borderColor: SystemColor.gray,
                color: sanPham.mauSac,
                minWidth: "0px",
                padding: "0px",
                margin: "0px",
                borderRadius: "50%",
                marginLeft: "8px",
              }}
              fontSize="medium"
            />
            {readOnly ? (
              <Typography color="secondary" fontSize="0.9rem" fontWeight="bold">
                {`x ${sanPham.soLuong}`}
              </Typography>
            ) : null}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default CartProductDetail;
