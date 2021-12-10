import "./Banner.css";

import {
  Box,
  Button,
  Grow,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { ChevronRight } from "@mui/icons-material";

const slide1 =
  require("../../assets/images/banners/complex_slide01.jpg").default;

const slide2 =
  require("../../assets/images/banners/complex_slide02.jpg").default;
const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* #region  use for transition */
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setchecked(true);
  });
  const containerRef = React.useRef(null);
  /* #endregion */

  return (
    <div className="fullwidthbanner-container">
      <div className="fullwidthbanner">
        <img className="defaultimg" src={slide1}></img>
        <div className="caption">
          <Box
            sx={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "max-content",
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
                  fontSize="calc(1.4rem + 2vw)"
                  fontWeight="bold"
                  color="secondary"
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
            <Slide
              direction="up"
              in={checked}
              container={containerRef.current}
              orientation="horizontal"
              {...{ timeout: 800 }}
            >
              <Box>
                <Typography
                  fontSize="calc(0.8rem + 0.05vw)"
                  fontWeight="light"
                  color="secondary"
                  margin="16px 0px 0px 0px"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </>
                </Typography>
                {isMobile ? (
                  <Button variant="text" endIcon={<ChevronRight />} sx={{padding:"0px", fontSize:"12px"}}>
                    Khám phá
                  </Button>
                ) : (
                  <>
                    <Button variant="contained" >Khám phá</Button>
                    <Button variant="outlined" sx={{ m:1}}>
                      Mua ngay
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
};

export default Banner;
