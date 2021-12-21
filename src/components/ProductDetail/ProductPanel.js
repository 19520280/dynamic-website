import React, { useState, useCallback } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  ButtonGroup,
  ImageList,
  InputBase,
  Stack,
} from "@mui/material";
import RatingInfolPanel from "./RatingInfoPanel";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductPolicy from "./ProductPolicy";
import { useDispatch } from "react-redux";
import { BgColor } from "../../color";
import ShowSizeGuide from "../Dialogs/ShowSizeGuide/ShowSizeGuide";
import PriceTypography from "../Typographys/PriceTypography";
import ShowMainImage from "./ShowMainImage";
import InfoProduct from "./InfoProduct";

function ProductPanel({ sanPham, isMobile }) {
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);

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

  if (sanPham) {
    if (isMobile) {
      return (
        <Box marginX={1} style={{ paddingTop: isMobile ? "10px" : "0px" }}>
          <ShowMainImage
            sizeMainImg={null}
            sizeSubImg={null}
            isMobile={isMobile}
            sanPham={sanPham}
            selectedColor={selectedColor}
          />
          <Box marginTop={1} style={{ paddingTop: isMobile ? "10px" : "0px" }}>
            <h3>{sanPham.ten}</h3>
            <PriceTypography
              giaCu={sanPham.giaCu}
              gia={sanPham.gia}
              isMobile={isMobile}
            />
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box className="Main_Box_Right_Color">
            <Box marginTop={2}>
              <h4>Màu sắc</h4>
            </Box>
            <Box marginY={1}>
              <ColorButtonGroup
                colors={sanPham.mauSacs}
                selected={selectedColor}
                setSelected={setSelectedColor}
                only={true}
              />
            </Box>
          </Box>
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box className="Main_Box_Right_Size" marginBottom={1}>
            <Box
              marginTop={1}
              style={{ paddingTop: isMobile ? "10px" : "0px" }}
            >
              <h4>Kích thước</h4>
            </Box>
            <Box
              sx={{ display: "flex" }}
              style={{ paddingTop: isMobile ? "10px" : "0px" }}
              style={{ paddingTop: isMobile ? "10px" : "0px" }}
            >
              <ImageList
                cols={sanPham.kichThuocs.length}
                gap={15}
                variant="woven"
              >
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
          <Divider variant="fullWidth" orientation="horizontal" />
          <Box className="Main_Box_Right_Input_SL">
            <Box sx={{ alignContent: "center", display: "flex" }} marginY={2}>
              <Stack direction="column">
                <Box marginTop={1}>
                  <h4>Số lượng</h4>
                </Box>
                <Box style={{ paddingTop: isMobile ? "10px" : "0px" }}>
                  <ButtonGroup variant="outlined">
                    <Button
                      sx={{ width: 10, height: 41 }}
                      onClick={btnRemoveclick}
                      disabled={sp.soLuong <= 0}
                    >
                      <RemoveIcon />
                    </Button>
                    <Button disableRipple height={41}>
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
                        size="small"
                      />
                    </Button>
                    <Button
                      sx={{ width: 10, height: 41 }}
                      onClick={btnAddclick}
                      disabled={sp.soLuong >= sanPham.tonKho}
                    >
                      <AddIcon />
                    </Button>
                  </ButtonGroup>
                </Box>
              </Stack>
            </Box>
            <Box marginY={1}>
              <Typography>Số lượng sản phẩm còn {sanPham.tonKho}</Typography>
            </Box>
          </Box>
          <Box marginY={1}>
            <RatingInfolPanel size={"small"} />
          </Box>
          <Box>
            <ProductPolicy />
          </Box>
        </Box>
      );
    } else
      return (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            paddingX: "2%",
            paddingY: "2%",
          }}
        >
          <ShowSizeGuide sanPham={sanPham} />
          <Box alignContent="center" width="60%" height="100%" display={"flex"}>
            <ShowMainImage
              sizeMainImg={650}
              sizeSubImg={150}
              isMobile={isMobile}
              sanPham={sanPham}
              selectedColor={selectedColor}
            />
          </Box>
          <Box className="Main_Box_Right" width={"38%"} marginLeft={3}>
            <InfoProduct
              sanPham={sanPham}
              isMobile={isMobile}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <Box backgroundColor="rgba(0, 0, 0, 0.04)" borderRadius={1}>
              <ProductPolicy />
            </Box>
          </Box>
        </Box>
      );
  }
}

export default ProductPanel;
