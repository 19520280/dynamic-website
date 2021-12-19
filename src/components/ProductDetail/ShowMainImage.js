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
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageMagnify from "react-image-magnify";
function ShowMainImage({ sizeMainImg, sizeSubImg, isMobile, sanPham }) {
  const [listimg, setlistimg] = React.useState([]);
  React.useEffect(() => {
    if (sanPham) {
      sanPham.imgs[0].map((img) => listimg.push(img));
      sanPham.imgs[1].map((img) => listimg.push(img));
    }
  }, [sanPham]);
  const [openImg, setOpenIMG] = React.useState({
    show: false,
    src: "",
  });
  const handleClickShowIMGOpen = (img) => {
    setOpenIMG({
      show: true,
      src: listimg.findIndex((e) => e === img),
    });
  };
  const handleIMGClose = () => {
    setOpenIMG({ show: false, src: -1 });
  };

  const [imgMain, setImgMain] = useState(sanPham.imgs[0][0]);
  const handleMouseMove = (e) => {
    setImgMain(e);
  };
  const MainImage = (
    <img src={imgMain} width={"100%"} height={sizeMainImg} />
    /* <ReactImageMagnify
          background={BgColor.mainBg}
          position="absolute"
          top={50}
          right={20}
          {...{
            smallImage: {
              isFluidWidth: true,
              src: imgMain,
              width: "100%",
              height: "120%",
            },
            largeImage: {
              src: imgMain,
              width: 1500,
              height: 1800,
            },
          }}
        /> */
  );
  const showImage = (size) => (
    <Dialog open={openImg.show} onClose={handleIMGClose} maxWidth={size}>
      <DialogTitle id="scroll-dialog-title" marginBottom={2}>
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
              <Box
                onClick={() => {
                  let index = openImg.src;
                  if (index) handleClickShowIMGOpen(listimg[index - 1]);
                  else handleClickShowIMGOpen(listimg[listimg.length - 1]);
                }}
              >
                <ArrowBackIosNewIcon />
              </Box>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: listimg[openImg.src],
                  },
                  largeImage: {
                    src: listimg[openImg.src],
                    width: 1500,
                    height: 1800,
                  },
                }}
              />
              <Box
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
            <Box width="45%" marginLeft={"2%"}>
              <ImageList cols={4} gap={9} variant="woven">
                {listimg.map((img, index) => (
                  <Box onClick={() => handleClickShowIMGOpen(img)}>
                    <img src={img} width={"100%"} loading="lazy" />
                  </Box>
                ))}
              </ImageList>
            </Box>
          </Box>
        </DialogContent>
      )}

      <DialogActions>
        <Button onClick={handleIMGClose}>Đóng</Button>
      </DialogActions>
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
          {sanPham.imgs[0].map((img, index) => (
            <Box
              onClick={() => handleMouseMove(img)}
              border={
                listimg
                  ? index === listimg.findIndex((i) => i === imgMain)
                    ? "2px solid #BEBEBE"
                    : 0
                  : 0
              }
            >
              <img src={img} width={"100%"} loading="lazy" />
            </Box>
          ))}
        </ImageList>
      </Box>
    </>
  ) : (
    <>
      <Box className="Main_Box_List_img" width="20%" height={"100%"}>
        <ImageList cols={1} variant="woven">
          {sanPham.imgs[0].map((img, index) => (
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
          ))}
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
