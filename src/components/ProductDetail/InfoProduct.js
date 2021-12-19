import React, { useState, useCallback } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  ButtonGroup,
  ImageList,
  InputBase,
  Snackbar,
  Alert,
} from "@mui/material";
import RatingInfolPanel from "./RatingInfoPanel";
import ShareIcon from "@mui/icons-material/Share";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
import StraightenIcon from "@mui/icons-material/Straighten";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddBox } from "@mui/icons-material";
import { showCollectionDialog, showSizeGuideDialog } from "../../redux/actions";
import PriceTypography from "../Typographys/PriceTypography";
import { useDispatch } from "react-redux";
import HeaderTypography from "../Typographys/HeaderTypography";
import CountTypography from "../Typographys/CountTypography";
function InfoProduct({ sanPham, isMobile }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);
  const openCollectionDialog = useCallback(() => {
    dispatch(showCollectionDialog());
  }, [dispatch]);
  const openSizeGuideDialog = useCallback(() => {
    dispatch(showSizeGuideDialog());
  }, [dispatch]);
  const [sp, setSP] = React.useState({
    ten: sanPham.ten,
    imgs: sanPham.imgs,
    newTag: true,
    giaCu: 300000,
    gia: 150000,
    soLuong: 0,
    ngayKetThucSale: "26/12/2021",
    setCountDown: true,
    mauSacs: sanPham.mauSacs[0],
    kichThuocs: sanPham.kichThuocs[0],
    chatLieus: sanPham.chatLieus,
    phongCachs: sanPham.phongCachs,
    kieuDang: sanPham.kieuDang,
    hoatTiet: sanPham.hoatTiet,
    chiTiet: sanPham.chiTiet,
    muas: sanPham.muas,
    description: sanPham.description,
  });
  const btnAddclick = () => {
    setSP({ ...sp, soLuong: sp.soLuong + 1 });
  };
  const btnRemoveclick = () => {
    setSP({ ...sp, soLuong: sp.soLuong - 1 });
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Box className="Main_Box_Right_Name">
        <Box marginTop={-2}>
          <HeaderTypography
            variant="button"
            text={sanPham.ten}
            color={"primary"}
          />
        </Box>
        <Box sx={{ display: "flex" }} display={"none"}>
          <RatingInfolPanel size={"medium"} />
          <ShareIcon sx={{ float: "right", width: "10%" }} />
        </Box>
        <Box marginTop={1}>
          <PriceTypography
            giaCu={sanPham.giaCu}
            gia={sanPham.gia}
            isMobile={isMobile}
            fontSize={24}
          />
        </Box>
      </Box>
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className="Main_Box_Right_Color">
        <Box marginTop={1}>
          <CountTypography
            variant="button"
            text={"Màu sắc"}
            color={"secondary"}
            size={18}
            padding={"1px 0px"}
          />
        </Box>
        <Box marginBottom={1}>
          <ColorButtonGroup
            colors={sanPham.mauSacs}
            selected={selectedColor}
            setSelected={setSelectedColor}
            only={true}
          />
        </Box>
      </Box>
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className="Main_Box_Right_Size">
        <Box marginY={1}>
          <CountTypography
            variant="button"
            text={"Kích thước"}
            color={"secondary"}
            size={18}
            padding={"1px 0px"}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <ImageList cols={sanPham.kichThuocs.length} gap={15} variant="woven">
            {sanPham.kichThuocs.map((s) => (
              <SizeButton
                size={s}
                selected={selectedSize}
                setSelected={setSelectedSize}
                only={true}
              />
            ))}
          </ImageList>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", marginTop: 1 }}
        className="Main_Box_Right_Size_Guide"
      >
        <Button onClick={openSizeGuideDialog}>
          <StraightenIcon />
          <h4 style={{ marginTop: 2.7, marginLeft: 5 }}>SIZE GUIDE</h4>
        </Button>
      </Box>
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className="Main_Box_Right_Input_SL">
        <Box sx={{ alignContent: "center", display: "flex" }} marginY={1}>
          <ButtonGroup variant="outlined">
            <Button
              sx={{ width: 10 }}
              onClick={btnRemoveclick}
              disabled={sp.soLuong <= 0}
            >
              <RemoveIcon />
            </Button>
            <Button disableRipple>
              <InputBase
                value={sp.soLuong}
                onChange={(e) => {
                  let value = Number(e.target.value);
                  setSP({
                    ...sp,
                    soLuong:
                      value < 0
                        ? 0
                        : value > sanPham.tonKho
                        ? sanPham.tonKho
                        : value,
                  });
                }}
                sx={{ flex: 1, width: 30 }}
                type="number"
              />
            </Button>
            <Button
              sx={{ width: 10 }}
              onClick={btnAddclick}
              disabled={sp.soLuong >= sanPham.tonKho}
            >
              <AddIcon />
            </Button>
          </ButtonGroup>
          <Button
            variant="contained"
            sx={{
              alignItems: "center",
              height: 40,
              width: "50%",
              marginLeft: 2,
              background: "#303537",
              borderRadius: 1,
              marginTop: 0.2,
            }}
            disabled={!sp.soLuong}
            onClick={handleClickOpen}
          >
            Thêm vào giỏ hàng
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Thêm vào giỏ hàng thành công
            </Alert>
          </Snackbar>
        </Box>
        <Box marginY={1}>
          <Typography>Số lượng sản phẩm còn {sanPham.tonKho}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <Button onClick={openCollectionDialog}>
            <AddBox />
            <h4 style={{ marginTop: 2.7, marginLeft: 5 }}>
              THÊM VÀO DANH SÁCH
            </h4>
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default InfoProduct;
