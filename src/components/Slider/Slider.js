import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import { useHistory } from "react-router-dom";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    history.push("/Bo-suu-tap/Mua-dong-2021/Chi-tiet-san-pham");
  };
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Travel" className="slider__image" />
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <Button
              onClick={handleClick}
              variant="outlined"
              style={{ marginTop: isMobile ? "10px" : "20px" }}
            >
              MUA NGAY
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="slider__content">
            <h1 className="slider__title">{title}</h1>
            <p>{subtitle}</p>
            <Button
              variant="outlined"
              onClick={handleClick}
              style={{ marginTop: isMobile ? "10px" : "20px" }}
            >
              MUA NGAY
            </Button>
          </div>
          <img src={imageSrc} alt="Travel" className="slider__image" />
        </>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;
