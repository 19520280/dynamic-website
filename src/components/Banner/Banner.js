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

  return (
    <div className="fullwidthbanner-container">
      <div className="fullwidthbanner">
        <img className="defaultimg" src={slide1}></img>
        <div className="caption">
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <div>
              <Collapse in={checked} {...{timeout: 800}}>
                <Typography
                  fontWeight="light"
                  fontSize="calc(0.8rem + 1vw)"
                  color="secondary"
                  lineHeight="1"
                >
                  Giáng sinh mặc gì?
                </Typography>
              </Collapse>
              <Typography
                fontSize="calc(2rem + 1vw)"
                fontWeight="bold"
                color="secondary"
                paddingTop="0px"
                lineHeight="1.4"
              >
                Phối đồ chất
              </Typography>
              <Typography
                fontSize="calc(0.8rem + 1vw)"
                fontWeight="light"
                color="secondary"
                paddingTop="0px"
                lineHeight="1"
              >
                đi chơi cùng Dynamic
              </Typography>
            </div>
            <Typography
              fontSize="calc(0.8rem + 0.05vw)"
              fontWeight="light"
              color="secondary"
              lineHeight="1.3"
            >
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </div>
            </Typography>
            <Zoom in={checked} {...{timeout:500}}>
              <Button variant="contained">Khám phá</Button>
            </Zoom>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Banner;
