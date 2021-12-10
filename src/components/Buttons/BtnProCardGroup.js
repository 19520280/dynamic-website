import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import { Stack, Tooltip } from "@mui/material";

import CircleIconButton from "./CircleIconButton";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BtnProCardGroup = () => {
  return (
    <Stack direction="row" spacing={1}>
      <CircleIconButton icon={<RemoveRedEye style={{ color: "white" }} />} />
      <CircleIconButton
        icon={<ShoppingCartIcon style={{ color: "white" }} />}
      />
      <CircleIconButton icon={<AddToPhotos style={{ color: "white" }} />} />
    </Stack>
  );
};

export default BtnProCardGroup;
