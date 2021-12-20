import React, { useState, useCallback } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  ButtonGroup,
  ImageList,
  InputBase,
  Popover,
  IconButton,
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
import MessageModal from "../Modal/MessageModal";
import { SystemColor } from "../../color";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
function InfoProduct({
  sanPham,
  isMobile,
  size,
  selectedColor,
  setSelectedColor,
}) {
  const dispatch = useDispatch();
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openpop = Boolean(anchorEl);
  const handleClickOpencopy = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box className="Main_Box_Right_Name">
        <Box marginBottom={size ? -0.5 : 0} marginTop={size ? -1 : 0}>
          <HeaderTypography
            variant="button"
            text={sanPham.ten}
            color={"primary"}
            padding={"5px 0px"}
          />
        </Box>
        <Box sx={{ display: "flex" }} display={"none"}>
          <RatingInfolPanel size={size ? size : "medium"} />
          <ShareIcon
            fontSize="small"
            onMouseEnter={handleClickOpencopy}
            onClick={handleClickOpencopy}
          />
          <Popover
            id="mouse-over-popover"
            open={openpop}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
                borderRadius: 0,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                mt: "10px",
                "&::before": {
                  boxShadow: 3,
                  backgroundColor: "#ECECEC",
                  content: '""',
                  display: "block",
                  position: "absolute",
                  width: 12,
                  height: 12,
                  top: -6,
                  transform: "rotate(45deg)",
                  left: "calc(50% - 6px )",
                },
              }}
            />
            <Typography
              sx={{ p: 0.5, backgroundColor: "#ECECEC", borderRadius: "4px" }}
            >
              <IconButton
                aria-label="twitter"
                className="icon-button"
                size="small"
              >
                <TwitterIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                aria-label="facebook"
                className="icon-button"
                size="small"
              >
                <FacebookIcon fontSize="inherit" />
              </IconButton>

              <IconButton
                aria-label="instagram"
                className="icon-button"
                size="small"
              >
                <InstagramIcon fontSize="inherit" />
              </IconButton>
            </Typography>
          </Popover>
        </Box>
        <Box marginTop={size ? 0.5 : 1} marginBottom={size ? -0.5 : 0}>
          <PriceTypography
            giaCu={sanPham.giaCu}
            gia={sanPham.gia}
            isMobile={isMobile}
            fontSize={size ? 20 : 24}
          />
        </Box>
      </Box>
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className="Main_Box_Right_Color" marginBottom={1}>
        <Box marginTop={size ? 0.5 : 1} marginBottom={size ? -1.5 : -1}>
          <CountTypography
            variant="button"
            text={"Màu sắc"}
            color={"secondary"}
            size={size ? 16 : 18}
            padding={"0px"}
          />
        </Box>
        <Box marginBottom={size ? 0.5 : 1}>
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
        <Box marginY={size ? 0.5 : 1}>
          <CountTypography
            variant="button"
            text={"Kích thước"}
            color={"secondary"}
            size={size ? 16 : 18}
            padding={"0px"}
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
        display="flex"
        marginY={size ? 0.5 : 1}
        className="Main_Box_Right_Size_Guide"
      >
        <Button
          onClick={openSizeGuideDialog}
          padding="0px"
          sx={{
            padding: 0,
            "&:last-child": {
              padding: 0,
            },
          }}
        >
          <StraightenIcon />
          <h4 style={{ marginTop: 2.7, marginLeft: 5 }}>SIZE GUIDE</h4>
        </Button>
      </Box>
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className="Main_Box_Right_Input_SL">
        <Box
          sx={{ alignContent: "center", display: "flex" }}
          marginTop={size ? 1 : 2}
        >
          <ButtonGroup variant="outlined" size={size ? "small" : "medium"}>
            <Button onClick={btnRemoveclick} disabled={sp.soLuong <= 0}>
              <RemoveIcon />
            </Button>
            <Button disableRipple>
              <InputBase
                value={sp.soLuong}
                size={size ? "small" : null}
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
                inputProps={{
                  style: {
                    textAlign: "right",
                    border: "0px solid gray",
                    borderRadius: "0px",
                    color: "secondary",
                  },
                }}
                style={{ flex: 1, width: 30 }}
                type="number"
              />
            </Button>
            <Button
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
              height: size ? 35 : 40,
              width: "60%",
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
          <MessageModal
            text={"Thêm vào giỏ hàng thành công"}
            severity={"success"}
            closeAfterSecond={true}
            state={open}
            setState={setOpen}
          />
        </Box>
        <Box marginTop={size ? 0.5 : 1}>
          <Typography fontSize={size ? 14 : 15}>
            Số lượng sản phẩm còn {sanPham.tonKho}
          </Typography>
        </Box>
        <Box display="flex" alignContent="center" marginY={size ? 0 : 1}>
          <Button
            onClick={openCollectionDialog}
            sx={{
              padding: 0,
              "&:last-child": {
                padding: 0,
              },
            }}
          >
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
