import "./Homepage/Banner.css";

import * as actions from "../../redux/actions/index";

import { useInView } from "react-intersection-observer";

import {
  Box,
  Button,
  Grow,
  IconButton,
  Slide,
  Typography,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SaleBannerState$ } from "../../redux/selectors/index";
import CountTypography from "../Typographys/CountTypography";
import { useHistory } from "react-router-dom";
const video1 = require("../../assets/videos/Video1.mp4").default;
const video2 = require("../../assets/videos/Video2.mp4").default;
const video3 = require("../../assets/videos/Video3.mp4").default;
const image1 = require("../../assets/images/collection/image1.png").default;
const image2 = require("../../assets/images/collection/image2.png").default;
const image3 = require("../../assets/images/collection/image3.png").default;

const ImageBanner = ({ image, video, caption, title, btnText }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef(null);
  const [checked, setchecked] = useState(false);
  const [bannerShow, setBannerShow] = useState(0);
  const handleClick = () => {
    history.push("/Bo-suu-tap/Mua-dong-2021");
  };
  const SaleBanner = useSelector(SaleBannerState$);
  const setSaleBanner = React.useCallback(() => {
    dispatch(actions.showSaleBanner(false));
  }, [dispatch]);

  /* #region  list */

  const banner1 = (
    <div className="custome-image-container2">
      <div className="custome-image-overlay">
        <Grow
          direction="right"
          in={checked}
          orientation="vertical"
          {...(checked ? { timeout: 2000 } : {})}
        >
          {video ? (
            <video
              width={"100%"}
              muted="true"
              autoPlay={true}
              playsinline
              loop={true}
            >
              <source
                src={
                  video == 1
                    ? video1
                    : video == 2
                    ? video2
                    : video == 3
                    ? video3
                    : null
                }
                type="video/mp4"
              />
            </video>
          ) : image ? (
            <img
              className="defaultimg"
              src={image == 1 ? image1 : image == 2 ? image2 : image3}
            ></img>
          ) : null}
        </Grow>
      </div>
      <div className="custome-image-middle">
        <div className="caption-fourth">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "max-content",
            }}
            overflow="hidden"
            ref={containerRef}
          >
            <Grow
              in={checked}
              {...{ timeout: 1000 }}
              style={{ transitionDelay: checked ? "500ms" : "0ms" }}
            >
              <Typography
                fontSize={isMobile ? "1.5rem" : "5rem"}
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                {title ? title : null}
              </Typography>
            </Grow>
            <Slide
              direction="up"
              in={checked}
              container={containerRef.current}
              orientation="horizontal"
              {...{ timeout: 1000 }}
            >
              <Typography
                fontSize={isMobile ? "0.8rem" : "calc(0.05rem + 2vw)"}
                paddingBottom={isMobile ? "10px" : "0px"}
                fontWeight="medium"
                color="white"
                textAlign="center"
              >
                {caption}
              </Typography>
            </Slide>
            <Slide
              direction="up"
              in={checked}
              container={containerRef.current}
              orientation="horizontal"
              {...{ timeout: 800 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "max-content",
                }}
              >
                {isMobile ? (
                  <Button
                    variant="outlined"
                    onClick={handleClick}
                    sx={{
                      fontSize: "calc(0.8rem + 0.05vw)",
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    Khám phá
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="outlined"
                      onClick={handleClick}
                      sx={{ m: 2, color: "white", borderColor: "white" }}
                    >
                      Khám phá
                    </Button>
                  </>
                )}
              </Box>
            </Slide>
          </Box>
        </div>
      </div>
    </div>
  );

  const listBanner = [banner1];
  /* #endregion */

  /* #region  use for transition */
  function setIndex() {
    if (bannerShow < listBanner.length - 1) setBannerShow(bannerShow + 1);
    else setBannerShow(0);
  }
  useEffect(() => {
    if (!checked) {
      setchecked(true);
    }
  }, [checked]);

  useEffect(() => {
    let timer = setInterval(function () {
      setIndex();
    }, 5000);
    return () => {
      clearInterval(timer);
      timer = null;
    };
  });
  /* #endregion */

  return (
    <div className={inView ? "slider--zoom--banner" : "slider--banner"} ref={ref}>
     <div className="fullwidthbanner-container" style={{ marginBottom: "0px" }}>
      <Box
        style={{
          display: SaleBanner.payload ? "none" : "block",
        }}
      >
        {listBanner.map((banner, index) => (
          <div key={index}> {index === bannerShow ? banner : null}</div>
        ))}
      </Box>
    </div>
  </div>
   
  );
};

export default ImageBanner;
