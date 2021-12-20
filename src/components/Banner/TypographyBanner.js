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
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SaleBannerState$ } from "../../redux/selectors/index";
import CountTypography from "../Typographys/CountTypography";
import { blueGrey } from "@mui/material/colors";
const bg = require("../../assets/videos/whitebg.png").default;

const TypographyBanner = ({ caption, title }) => {
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
      <Stack style={{ width: "80vh" }}>
        <div className="caption">
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
                fontSize={
                  isMobile ? "calc(1.4rem + 0.5vw)" : "calc(1.4rem + 2vw)"
                }
                fontWeight="bold"
                color="black"
                textAlign="center"
              >
                {title}
              </Typography>
            </Grow>
            <Slide
              direction="up"
              in={checked}
              container={containerRef.current}
              orientation="horizontal"
              {...{ timeout: 1000 }}
            >
              <Box style={{ padding: "10px" }}>
                <Typography
                  flexWrap
                  fontSize={isMobile ? "4rem" : "calc(0.05rem + 2vw)"}
                  paddingBottom={isMobile ? "10px" : "0px"}
                  fontWeight="medium"
                  color="black"
                  textAlign="center"
                >
                  {caption}
                </Typography>
              </Box>
            </Slide>
          </Box>
        </div>
      </Stack>
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
  );
};

export default TypographyBanner;
