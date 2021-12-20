import { AddToPhotos, RemoveRedEye } from "@mui/icons-material";
import { DialogContent, DialogContentText, Stack } from "@mui/material";
import React, { useCallback, useContext, useState } from "react";
import {
  hideCollectionDialog,
  showCollectionDialog,
  showQuickViewDialog,
} from "../../redux/actions";

import { AuthContext } from "../../context/context";
import CircleIconButton from "./CircleIconButton";
import MessageModal from "./../Modal/MessageModal";
import ModalWithButton from "./../Modal/ModalWithButton";
import QuickViewDialog from "../Dialogs/QuickView/QuickViewDialog";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { openLoginModal } from "./../../redux/actions/index";
import { useDispatch } from "react-redux";

const BtnProCardGroup = ({ sanPham }) => {
  const dispatch = useDispatch();
  const { openLoginModal, userData } = useContext(AuthContext);
  const [product, setpro] = useState();
  const [showMessageCollection, setShowMessageCollection] = useState(false);
  const [showMessageCart, setShowMessageCart] = useState(false);
  const [showSuccesMessageCart, setShowSuccesMessageCart] = useState(false);
  const openCollectionDialog = useCallback(() => {
    if (userData && userData.isLoggedin) {
      dispatch(showCollectionDialog());
    } else {
      setShowMessageCollection(true);
    }
  }, [dispatch, userData]);

  const clickShoppingCart = () => {
    if (sanPham.tonKho === 0) {
      setShowMessageCart(true);
    } else {
      setShowSuccesMessageCart(true);
    }
  };

  const openLogin = useCallback(() => {
    setShowMessageCollection(false);
    dispatch(hideCollectionDialog());
    openLoginModal();
  }, [dispatch]);

  const openQuickViewDialog = useCallback(() => {
    dispatch(showQuickViewDialog());
  }, [dispatch]);

  return (
    <>
      <ModalWithButton
        open={showMessageCollection}
        handleClose={() => setShowMessageCollection(false)}
        btnText="Đăng nhập"
        handleClick={openLogin}
        header="Yêu cầu đăng nhập"
        body={
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bạn cần đăng nhập để thực hiện tính năng này.
            </DialogContentText>
          </DialogContent>
        }
      />
      <ModalWithButton
        open={showMessageCart}
        handleClose={() => setShowMessageCart(false)}
        btnText="Đồng ý"
        header="Hết hàng"
        setState={setShowMessageCart}
        body={
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Sản phẩm đã hết hàng. Bạn có muốn tiếp tục thêm vào giỏ hàng?
            </DialogContentText>
          </DialogContent>
        }
        typeMessage="success"
        messageText="Thêm vào giỏ hàng thành công"
      />
      <MessageModal
        state={showSuccesMessageCart}
        setState={setShowSuccesMessageCart}
        text="Thêm vào giỏ hàng thành công"
        typeMessage="success"
        closeAfterSecond
      />
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
          onClick={clickShoppingCart}
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
