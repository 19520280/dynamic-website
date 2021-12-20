import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import React, { useCallback, useContext, useState } from "react";
import { Stack, Tooltip } from "@mui/material";
import { showCollectionDialog, showQuickViewDialog } from "../../redux/actions";

import { AuthContext } from "../../context/context";
import CircleIconButton from "./CircleIconButton";
import QuickViewDialog from "../Dialogs/QuickView/QuickViewDialog";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";

const BtnProCardGroup = ({ sanPham }) => {
  const dispatch = useDispatch();
  const [product, setpro] = useState();
  const openCollectionDialog = useCallback(() => {
    dispatch(showCollectionDialog());
  }, [dispatch]);
  const openQuickViewDialog = useCallback(() => {
    dispatch(showQuickViewDialog());
  }, [dispatch]);

  const { userData } = useContext(AuthContext);
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
        {userData && userData.isLoggedin ? (
          <CircleIconButton
            title="Thêm vào danh sách"
            onClick={openCollectionDialog}
            icon={<AddToPhotos style={{ color: "white" }} />}
          />
        ) : null}
      </Stack>
    </>
  );
};

export default BtnProCardGroup;
