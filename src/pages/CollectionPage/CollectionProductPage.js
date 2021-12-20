import React from "react";
import ImageBanner from "../../components/Banner/ImageBanner";

import { useTheme, useMediaQuery } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import FooterCollection from "../../components/Footer/FooterCollection";
import image1 from "../../assets/images/collection/image4.png";
import image1m from "../../assets/images/collection/image4mobile.png";

export default function CollectionProductPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Hero imageSrc={isMobile?image1m:image1} title="READY-TO-WEAR" caption="keep it simple. " />

     
    </div>
  );
}
