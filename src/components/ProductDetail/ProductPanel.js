import "react-medium-image-zoom/dist/styles.css";

import {
  Box,
  Button,
  ButtonGroup,
  ImageList,
  InputBase,
} from "@mui/material";
import RatingInfolPanel from "./RatingInfoPanel";
import ColorButtonGroup from "../Buttons/ColorButtonGroup";
import SizeButton from "../Buttons/SizeButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ProductPolicy from "./ProductPolicy";
import { useDispatch } from "react-redux";
import { showCollectionDialog, showSizeGuideDialog } from "../../redux/actions";
import { BgColor } from "../../color";
import "react-medium-image-zoom/dist/styles.css";
import ShowSizeGuide from "../Dialogs/ShowSizeGuide/ShowSizeGuide";
import PriceTypography from "../Typographys/PriceTypography";
import ShowMainImage from "./ShowMainImage";
import InfoProduct from "./InfoProduct";


function ProductPanel({ sanPham, isMobile }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = React.useState(sanPham.mauSacs[0]);
  const [selectedSize, setSelectedSize] = React.useState(sanPham.kichThuocs[0]);
  const [inputSL, setInputSL] = React.useState(0);

  const [listimg, setlistimg] = React.useState([]);
  React.useEffect(() => {
    if (sanPham) {
      sanPham.imgs[0].map((img) => listimg.push(img));
      sanPham.imgs[1].map((img) => listimg.push(img));
    }
  }, [sanPham]);
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
        <Box marginX={1}>
          <ShowMainImage
            sizeMainImg={null}
            sizeSubImg={null}
            isMobile={isMobile}
            sanPham={sanPham}
          />
          <Box marginTop={1}>
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
            <Box marginTop={1}>
              <h4>Kích thước</h4>
            </Box>
            <Box sx={{ display: "flex" }}>
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
          }}
        >
          <ShowSizeGuide sanPham={sanPham} />
          <Box alignContent="center" width="60%" height="100%" display={"flex"}>
            <ShowMainImage
              sizeMainImg={640}
              sizeSubImg={150}
              isMobile={isMobile}
              sanPham={sanPham}
            />
          </Box>
          <Box
            className="Main_Box_Right"
            width={"40%"}
            marginLeft={3}
            bgcolor={BgColor}
          >
            <InfoProduct sanPham={sanPham} isMobile={isMobile} />
            <Divider variant="fullWidth" orientation="horizontal" />
            <Box>
              <ProductPolicy />
            </Box>
          </Box>
        </Box>
      );
  }
}

export default ProductPanel;
