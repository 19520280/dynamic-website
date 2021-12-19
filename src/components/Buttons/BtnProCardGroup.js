import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import React, { useCallback, useState } from "react";
import { Stack, Tooltip } from "@mui/material";

import CircleIconButton from "./CircleIconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { showCollectionDialog, showQuickViewDialog } from "../../redux/actions";
import { useDispatch } from "react-redux";
import QuickViewDialog from "../Dialogs/QuickView/QuickViewDialog";

const BtnProCardGroup = ({ sanPham }) => {
  const dispatch = useDispatch();
  const [product, setpro] = useState();
  const openCollectionDialog = useCallback(() => {
    dispatch(showCollectionDialog());
  }, [dispatch]);
  const openQuickViewDialog = useCallback(() => {
    dispatch(showQuickViewDialog());
  }, [dispatch]);
  return (
    <>
      {product ? <QuickViewDialog sanPham={product} /> : null}
      <Stack direction="row" spacing={1}>
        <CircleIconButton
          title="Xem nhanh"
          icon={<RemoveRedEye style={{ color: "white" }} />}
          onClick={() => {
            setpro(sanPham);
            openQuickViewDialog();
          }}
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
    </>
  );
};

export default BtnProCardGroup;
