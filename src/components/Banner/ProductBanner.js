import "./Homepage/Banner.css";

import * as actions from "../../redux/actions/index";

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

const slide1 = require("../../assets/images/banners/SB1.jpg").default;

const slide2 = require("../../assets/images/banners/SB2.jpg").default;

const slide3 = require("../../assets/images/banners/SB3.jpg").default;

const slide4 = require("../../assets/images/banners/SB4.jpg").default;
const ProductBanner = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = React.useRef(null);
  const [checked, setchecked] = useState(false);
  const [bannerShow, setBannerShow] = useState(0);

  const SaleBanner = useSelector(SaleBannerState$);
  const setSaleBanner = React.useCallback(() => {
    dispatch(actions.showSaleBanner(false));
  }, [dispatch]);

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
                Th??ng n??y c?? g???
              </Typography>
            </Slide>
            <Grow
              in={checked}
              {...{ timeout: 1000 }}
              style={{ transitionDelay: checked ? "500ms" : "0ms" }}
            >
              <Typography
                varient="h1"
                fontSize={
                  isMobile ? "calc(1.4rem + 0.5vw)" : "calc(1.4rem + 2vw)"
                }
                fontWeight="bold"
                color="primary"
              >
                WINTER COLLECTION
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
                fontSize="calc(0.05rem + 1.5vw)"
                fontWeight="light"
                color="secondary"
              >
                B??? s??u t???p m???i mang c???m h???ng t??? c?? ph??
              </Typography>
            </Slide>
          </div>
          <Zoom direction="up" in={checked} {...{ timeout: 1000 }}>
            <Box>
              {isMobile ? (
                <Button
                  variant="text"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    padding: "4px 0px 0px 0px",
                    fontSize: "calc(0.8rem + 0.05vw)",
                  }}
                >
                  Kh??m ph??
                </Button>
              ) : (
                <>
                  <Button variant="contained">Kh??m ph??</Button>
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
        direction="right"
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
          <Grow
            in={checked}
            {...{ timeout: 1000 }}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
          >
            <Typography
              fontSize="calc(1.4rem + 2vw)"
              fontWeight="bold"
              color="secondary"
              textAlign="center"
            >
              SALE UP TO 20%
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
              color="secondary"
              textAlign="center"
            >
              cho kh??ch h??ng ?????t tr?????c
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
              {/* <Typography
                fontSize="calc(0.8rem + 0.05vw)"
                fontWeight="light"
                color="white"
                margin="16px 0px 8px 0px"
                textAlign="center"
              >
                <>Lorem ipsum dolor sit amet, consectetur adipiscing elit</>
              </Typography> */}
              {isMobile ? (
                <Button
                  variant="text"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    padding: "4px 0px 0px 0px",
                    fontSize: "calc(0.8rem + 0.05vw)",
                    color: "secondary",
                  }}
                >
                  Kh??m ph??
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "secondary" }}
                  >
                    Kh??m ph??
                  </Button>
                </>
              )}
            </Box>
          </Slide>
        </Box>
      </div>
    </div>
  );

  const banner3 = (
    <div className="fullwidthbanner">
      <Slide
        direction="right"
        in={checked}
        orientation="vertical"
        {...(checked ? { timeout: 2000 } : {})}
      >
        <img className="defaultimg" src={slide3}></img>
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
          <Grow
            in={checked}
            {...{ timeout: 1000 }}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
          >
            <Typography
              fontSize="calc(1.4rem + 2vw)"
              fontWeight="bold"
              color="secondary"
              textAlign="center"
            >
              CH???T LI???U B???T M???T
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
              color="secondary"
              textAlign="center"
            >
              ???????c nh???p kh???u t??? ?????c
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
                  variant="text"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    padding: "4px 0px 0px 0px",
                    fontSize: "calc(0.8rem + 0.05vw)",
                    color: "secondary",
                  }}
                >
                  Kh??m ph??
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "secondary" }}
                  >
                    Kh??m ph??
                  </Button>
                </>
              )}
            </Box>
          </Slide>
        </Box>
      </div>
    </div>
  );

  const banner4 = (
    <div className="fullwidthbanner">
      <Slide
        direction="right"
        in={checked}
        orientation="vertical"
        {...(checked ? { timeout: 2000 } : {})}
      >
        <img className="defaultimg" src={slide4}></img>
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
          <Grow
            in={checked}
            {...{ timeout: 1000 }}
            style={{ transitionDelay: checked ? "500ms" : "0ms" }}
          >
            <Typography
              fontSize="calc(1.4rem + 2vw)"
              fontWeight="bold"
              color="secondary"
              textAlign="center"
            >
              KI???U D??NG TRENDY
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
              color="secondary"
              textAlign="center"
            >
              must-have-item c???a nhi???u ng?????i n???i ti???ng
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
                  variant="text"
                  endIcon={<ChevronRightIcon />}
                  sx={{
                    padding: "4px 0px 0px 0px",
                    fontSize: "calc(0.8rem + 0.05vw)",
                    color: "secondary",
                  }}
                >
                  Kh??m ph??
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "secondary" }}
                  >
                    Kh??m ph??
                  </Button>
                </>
              )}
            </Box>
          </Slide>
        </Box>
      </div>
    </div>
  );

  const listBanner = [banner1, banner2, banner3, banner4];
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
    <div className="fullwidthbanner-container" style={{ marginBottom: "20px" }}>
      <Box
        style={{
          display: SaleBanner.payload ? "none" : "block",
        }}
      >
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
      </Box>
    </div>
  );
};

export default ProductBanner;
