import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";

import CircleIconButton from "./CircleIconButton";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ButtonHover = ({ icon, title }) => (
  <Tooltip title={title}>
    <span>
      <CircleIconButton icon={icon} />
    </span>
  </Tooltip>
);
const BtnProCardGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      <ButtonHover
        icon={<RemoveRedEye style={{ color: "white" }} />}
        title="Xem nhanh"
      />
      <ButtonHover
        icon={<ShoppingCartIcon style={{ color: "white" }} />}
        title="Thêm vào giỏ hàng"
      />
      <ButtonHover
        icon={<AddToPhotos style={{ color: "white" }} />}
        title="Thêm vào danh sách"
      />
    </Stack>
  );
};

export default BtnProCardGroup;
