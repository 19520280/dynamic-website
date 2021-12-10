import "./Banner.css";

import {
  Box,
  Button,
  Collapse,
  Grow,
  Paper,
  Slide,
  Stack,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const slide1 =
  require("../../assets/images/banners/complex_slide01.jpg").default;

const slide2 =
  require("../../assets/images/banners/complex_slide02.jpg").default;
const Banner = () => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setchecked(true);
  });

  const containerRef = React.useRef(null);
  console.log(checked);
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
                  fontSize="calc(0.8rem + 1vw)"
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
                  fontSize="calc(2rem + 1vw)"
                  fontWeight="bold"
                  color="secondary"
                  paddingTop="0px"
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
                  fontSize="calc(0.8rem + 1vw)"
                  fontWeight="light"
                  color="secondary"
                  paddingTop="0px"
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
                margin="16px 0px 16px 0px"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </>
              </Typography>
              <Button variant="contained">Khám phá</Button>
              </Box>
            </Slide>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Banner;
