import React from "react";
import "./Hero.css";
import { useTheme, useMediaQuery } from "@mui/material";
const Hero = ({ imageSrc, title, caption }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <h1 className={isMobile ? "hero__title__mobile" : "hero__title"}>
        {title}
      </h1>
      <h2 className="hero__caption">{caption}</h2>
    </div>
  );
};

export default Hero;
