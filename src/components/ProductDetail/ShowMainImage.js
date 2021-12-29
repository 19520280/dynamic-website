import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  ImageList,
  Button,
  Fab,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageMagnify from "react-image-magnify";
import { BgColor } from "../../color";
function ShowMainImage({
  sizeMainImg,
  sizeSubImg,
  isMobile,
  sanPham,
  selectedColor,
}) {
  const [listimg, setlistimg] = React.useState([]);
  const [listImgfull, setlistfull] = React.useState([]);
  const indexSelected = sanPham.mauSacs.indexOf(selectedColor);

  if (sanPham.imgs.length && listimg.length === 0) {
    sanPham.imgs[0].map((img) => listimg.push(img));
  }
  React.useEffect(() => {
    while (listImgfull.length) {
      listImgfull.pop();
    }
    sanPham.imgs.map((e) => e.map((img) => listImgfull.push(img)));
  }, [sanPham]);
  React.useEffect(() => {
    while (listimg.length) {
      listimg.pop();
    }
    if (indexSelected >= 0) {
      if (sanPham.imgs.length) {
        sanPham.imgs[indexSelected].map((img) => listimg.push(img));
      }
      setImgMain(sanPham.imgs[indexSelected][0]);
    } else {
      sanPham.imgs[0].map((img) => listimg.push(img));
      setImgMain(sanPham.imgs[0][0]);
    }
  }, [indexSelected]);
  const [openImg, setOpenIMG] = React.useState({
    show: false,
    src: "",
  });
  const handleClickShowIMGOpen = (img) => {
    setOpenIMG({
      show: true,
      src: listImgfull.findIndex((e) => e === img),
    });
  };
  const handleIMGClose = () => {
    setOpenIMG({ show: false, src: -1 });
  };

  const [imgMain, setImgMain] = useState(sanPham.imgs[0][0]);
  const handleMouseMove = (e) => {
    setImgMain(e);
  };
  const MainImage = <img src={imgMain} width={"100%"} height={sizeMainImg} />;
  const showImage = (size) => (
    <Dialog open={openImg.show} onClose={handleIMGClose} maxWidth={size}>
      <DialogTitle id="scroll-dialog-title" marginBottom={0}>
        <IconButton
          aria-label="close"
          onClick={handleIMGClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {isMobile ? (
        <DialogContent>
          <Box width={"100%"} display="flex" alignItems={"center"}>
            <Box
              marginLeft={-2}
              onClick={() => {
                let index = openImg.src;
                if (index) handleClickShowIMGOpen(listimg[index - 1]);
                else handleClickShowIMGOpen(listimg[listimg.length - 1]);
              }}
            >
              <ArrowBackIosNewIcon />
            </Box>
            <Zoom>
              <img src={listimg[openImg.src]} width={"100%"} />
            </Zoom>
            <Box
              marginRight={-2}
              onClick={() => {
                let index = openImg.src;
                if (index < listimg.length - 1)
                  handleClickShowIMGOpen(listimg[index + 1]);
                else handleClickShowIMGOpen(listimg[0]);
              }}
            >
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </DialogContent>
      ) : (
        <DialogContent>
          <Box width="100%" display={"flex"}>
            <Box width={"55%"} display="flex" alignItems={"center"}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: listImgfull[openImg.src],
                  },
                  largeImage: {
                    src: listImgfull[openImg.src],
                    width: 1500,
                    height: 1800,
                  },
                }}
              />
              <Button
                size="medium"
                onClick={() => {
                  let index = openImg.src;
                  if (index) handleClickShowIMGOpen(listImgfull[index - 1]);
                  else
                    handleClickShowIMGOpen(listImgfull[listImgfull.length - 1]);
                }}
                sx={{ position: "absolute", left: 10, top: "40%" }}
              >
                <ArrowBackIosNewIcon />
              </Button>
              <Button
                size="medium"
                onClick={() => {
                  let index = openImg.src;
                  if (index < listImgfull.length - 1)
                    handleClickShowIMGOpen(listImgfull[index + 1]);
                  else handleClickShowIMGOpen(listImgfull[0]);
                }}
                sx={{ position: "absolute", right: "46%", top: "40%" }}
              >
                <ArrowForwardIosIcon />
              </Button>
            </Box>
            <Box width="45%" marginLeft={"2%"}>
              <ImageList cols={4} gap={9} variant="woven">
                {listImgfull.map((img, index) => (
                  <Box onClick={() => handleClickShowIMGOpen(img)}>
                    <img src={img} width={"100%"} loading="lazy" />
                  </Box>
                ))}
              </ImageList>
            </Box>
          </Box>
        </DialogContent>
      )}
    </Dialog>
  );
  return isMobile ? (
    <>
      {showImage("xl")}
      <Box sx={{ marginX: 1 }} className="Main_Box_Main_img">
        {MainImage}
      </Box>
      <Box className="Main_Box_List_img">
        <ImageList cols={4} gap={5} variant="woven">
          {listimg
            ? listimg.map((img, index) => (
                <Box
                  onClick={() => handleMouseMove(img)}
                  border={
                    listimg
                      ? index === listimg.findIndex((i) => i === imgMain)
                        ? "2px solid #BEBEBE"
                        : 0
                      : 0
                  }
                  borderRadius={1}
                >
                  <img src={img} width={"100%"} loading="lazy" />
                </Box>
              ))
            : null}
        </ImageList>
      </Box>
    </>
  ) : (
    <>
      <Box className="Main_Box_List_img" width="20%" height={"100%"}>
        <ImageList cols={1} variant="woven">
          {listimg
            ? listimg.map((img, index) => (
                <Box
                  onClick={() => handleClickShowIMGOpen(img)}
                  marginBottom={0.5}
                  border={
                    listimg
                      ? index === listimg.findIndex((i) => i === imgMain)
                        ? "2px solid #BEBEBE"
                        : 0
                      : 0
                  }
                >
                  <img
                    src={img}
                    width={"100%"}
                    loading="lazy"
                    height={sizeSubImg}
                    onMouseMove={() => handleMouseMove(img)}
                  />
                </Box>
              ))
            : null}
        </ImageList>
      </Box>
      <Box
        sx={{ marginLeft: 2 }}
        className="Main_Box_Main_img"
        width="80%"
        height="100%"
        alignItems="center"
        onClick={() => handleClickShowIMGOpen(imgMain)}
      >
        {MainImage}
      </Box>
      {showImage("md")}
    </>
  );
}

export default ShowMainImage;
