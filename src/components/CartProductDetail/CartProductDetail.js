import { Circle } from "@mui/icons-material";
import React from "react";

const CartProductDetail = (sanPham, isQty) => {
  return (
    <div className="product-item">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <img src={sanPham.image} />
        <Stack direction="coloumn" spacing={1} alignItems="center">
          <Typography color="primary"> {sanPham.ten} </Typography>
          <Typography color="secondary" fontSize="0.9rem" fontWeight="bold">
            Phân loại
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography color="secondary" fontSize="0.9rem" fontWeight="bold">
              {`Kích thước: ${sanPham.kichThuoc}`}
            </Typography>
            <div>
              <Typography color="secondary" fontSize="0.9rem" fontWeight="bold">
                Màu sắc
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
                }}
                fontSize="medium"
              />
            </div>
            {isQty ? (
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
