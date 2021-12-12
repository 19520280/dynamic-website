import "./Banner.css";

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

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const slide1 =
  require("../../assets/images/banners/complex_slide01.jpg").default;

const slide2 =
  require("../../assets/images/banners/complex_slide02.jpg").default;

const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef(null);
  const [checked, setchecked] = useState(false);
  const [bannerShow, setBannerShow] = useState(0);

  /* #region  list */

  const banner1 = (
    <div className="fullwidthbanner">
      <Slide
        direction="right"
        in={checked}
        orientation="vertical"
        {...(checked ? { timeout: 2000 } : {})}
      >
        <img className="defaultimg" src={slide1}></img>
      </Slide>

      <div className="caption">
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "max-content",
            height: "max-content",
          }}
          overflow="hidden"
          ref={containerRef}
        >
          <div>
            <Slide
              direction="right"
              in={checked}
              container={containerRef.current}
              orientation="vertical"
              {...{ timeout: 1000 }}
            >
              <Typography
                fontWeight="light"
                fontSize="calc(0.04rem + 2vw)"
                color="secondary"
              >
                Chào tháng 12
              </Typography>
            </Slide>
            <Grow
              in={checked}
              {...{ timeout: 1000 }}
              style={{ transitionDelay: checked ? "500ms" : "0ms" }}
            >
              <Typography
                varient="h1"
                fontSize="calc(1.4rem + 2vw)"
                fontWeight="bold"
                color="primary"
              >
                Phối đồ chất
              </Typography>
            </Grow>
            <Slide
              direction="left"
              in={checked}
              container={containerRef.current}
              orientation="vertical"
              {...{ timeout: 1000 }}
            >
              <Typography
                fontSize="calc(0.05rem + 2vw)"
                fontWeight="light"
                color="secondary"
              >
                đi chơi Giáng sinh cùng Dynamic
              </Typography>
            </Slide>
          </div>
          <Zoom direction="up" in={checked} {...{ timeout: 1000 }}>
            <Box>
              <Typography
                fontSize="calc(0.8rem + 0.05vw)"
                fontWeight="light"
                color="secondary"
                margin="16px 0px 8px 0px"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </>
              </Typography>
              {isMobile ? (
                <Button
                  variant="text"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    padding: "4px 0px 0px 0px",
                    fontSize: "calc(0.8rem + 0.05vw)",
                  }}
                >
                  Khám phá
                </Button>
              ) : (
                <>
                  <Button variant="contained">Khám phá</Button>
                  <Button variant="outlined" sx={{ m: 2 }}>
                    Mua ngay
                  </Button>
                </>
              )}
            </Box>
          </Zoom>
        </Box>
      </div>
    </div>
  );
  const banner2 = (
    <div className="fullwidthbanner">
      <Slide
        direction="down"
        in={checked}
        orientation="vertical"
        {...(checked ? { timeout: 2000 } : {})}
      >
        <img className="defaultimg" src={slide2}></img>
      </Slide>

      <div className="caption-second">
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
          <Slide
            in={checked}
            container={containerRef.current}
            orientation="horizontal"
            {...{ timeout: 800 }}
          >
            <Typography
              fontWeight="light"
              fontSize="calc(0.04rem + 2vw)"
              color="white"
              align="center"
            >
              Wellcome to
            </Typography>
          </Slide>
          <Grow
            in={checked}
            {...{ timeout: 1000 }}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
          >
            <Typography
              fontSize="calc(1.4rem + 2vw)"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Dynamic
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
              fontSize="calc(0.05rem + 2vw)"
              fontWeight="light"
              color="white"
              textAlign="center"
            >
              Be your own kind of beautiful
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
              <Typography
                fontSize="calc(0.8rem + 0.05vw)"
                fontWeight="light"
                color="white"
                margin="16px 0px 8px 0px"
                textAlign="center"
              >
                <>Lorem ipsum dolor sit amet, consectetur adipiscing elit</>
              </Typography>
              {isMobile ? (
                <Button
                  variant="text"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    padding: "4px 0px 0px 0px",
                    fontSize: "calc(0.8rem + 0.05vw)",
                    color:"white"
                  }}

                >
                  Về chúng tôi
                </Button>
              ) : (
                <>
                  <Button variant="outlined" sx={{ m: 2, borderColor:"white", color:"white" }}>
                    Về chúng tôi
                  </Button>
                </>
              )}
            </Box>
          </Slide>
        </Box>
      </div>
    </div>
  );
  const listBanner = [banner1, banner2];
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
    <div className="fullwidthbanner-container">
      <IconButton className="icon left" onClick={setIndex}>
        <ChevronLeftIcon
          sx={{ color: "secondary", width: "2rem", height: "2rem" }}
        />
      </IconButton>
      <IconButton className="icon right" onClick={setIndex}>
        <ChevronRightIcon
          sx={{ color: "secondary", width: "2rem", height: "2rem" }}
        />
      </IconButton>
      {listBanner.map((banner, index) => (
        <div key={index}> {index === bannerShow ? banner : null}</div>
      ))}
    </div>
  );
};

export default Banner;
