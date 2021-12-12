import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import React, { useCallback } from "react";
import { Stack, Tooltip } from "@mui/material";

import CircleIconButton from "./CircleIconButton";
import CollectionDialog from "../Dialogs/AddIntoCollection/CollectionDialog";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { showCollectionDialog } from "../../redux/actions";
import { useDispatch } from "react-redux";

const BtnProCardGroup = () => {
  const dispatch = useDispatch();
  const openCollectionDialog = useCallback(() => {
    console.log("Clicks");
    dispatch(showCollectionDialog());
  }, [dispatch]);

  return (
    <Stack direction="row" spacing={1}>
      <CircleIconButton
        title="Xem nhanh"
        icon={<RemoveRedEye style={{ color: "white" }} />}
      />
      <CircleIconButton
        title="Thêm vào giỏ hàng"
        icon={<ShoppingCartIcon style={{ color: "white" }} />}
      />
      <CircleIconButton
        title="Thêm vào danh sách"
        onClick={openCollectionDialog}
        icon={<AddToPhotos style={{ color: "white" }} />}
      />
    </Stack>
  );
};

export default BtnProCardGroup;
