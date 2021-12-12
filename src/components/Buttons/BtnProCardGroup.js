import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";

import CircleIconButton from "./CircleIconButton";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BtnProCardGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      <CircleIconButton title="Xem nhanh" icon={<RemoveRedEye style={{ color: "white" }} />} />
      <CircleIconButton  title="Thêm vào giỏ hàng"
        icon={<ShoppingCartIcon style={{ color: "white" }} />}
      />
      <CircleIconButton title="Thêm vào danh sách" icon={<AddToPhotos style={{ color: "white" }} />} />
    </Stack>
  );
};

export default BtnProCardGroup;
