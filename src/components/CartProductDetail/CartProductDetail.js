import "./CartProductDetail.css";

import { Box, Divider, Stack, Typography } from "@mui/material";

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
        <Stack direction="column" spacing={1.5} alignItems="flex-start">
          <Typography color="primary" fontSize="1rem">
            {sanPham.ten}
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.6}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography color="secondary" fontSize="0.8rem">
              {sanPham.kichThuoc}
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
              fontSize="small"
            />
          </Stack>
          {readOnly ? (
            <Typography color="secondary" fontSize="1rem" fontWeight="bold">
              {`x ${sanPham.soLuong}`}
            </Typography>
          ) : null}
        </Stack>
      </Stack>
    </div>
  );
};

export default CartProductDetail;
