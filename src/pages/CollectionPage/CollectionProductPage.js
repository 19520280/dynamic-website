import React from "react";
import ImageBanner from "../../components/Banner/ImageBanner";

import {
  useTheme,
  useMediaQuery,
  Stack,
  Box,
  Paper,
  Grid,
  Button,
} from "@mui/material";
import Hero from "../../components/Hero/Hero";
import Slider from "../../components/Slider/Slider";
import FooterCollection from "../../components/Footer/FooterCollection";
import image1 from "../../assets/images/collection/image4.png";
import image1m from "../../assets/images/collection/image4mobile.png";
import image2 from "../../assets/images/collection/image4-8.png";
import image3 from "../../assets/images/collection/image4-1.png";
import image4 from "../../assets/images/collection/image4-2.png";
import image5 from "../../assets/images/collection/image4-3.png";
import image6 from "../../assets/images/collection/image4-4.png";
import image7 from "../../assets/images/collection/image4-5.png";
import image8 from "../../assets/images/collection/image4-6.png";
import image9 from "../../assets/images/collection/image4-7.png";
import imagebg from "../../assets/images/collection/imagebg.png";

import CatalogBanners from "../../components/Banner/CatalogBanners/CatalogBanners";
import CustomeImage from "../../components/Banner/CustomeImage";
import ImageSimpleCard from "../../components/ImageSimpleCard/ImageSimpleCard";

export default function CollectionProductPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Hero
        imageSrc={isMobile ? image1m : image1}
        title="READY-TO-WEAR"
        caption="keep it simple. "
      />
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={0}
        justifyContent="space-between"
        alignItems={!isMobile ? "flex-start" : "stretch"}
      >
        {isMobile ? (
          <Hero
            imageSrc={ image2}

            // title="READY-TO-WEAR"
            // caption="keep it simple. "
          />
        ) : ( <Stack
          direction="column"
          alignItems="stretch"
          sx={{
            width: isMobile ? "100%" : "50%",
            minWidth: "max-conent",
            position: "sticky",
            top: "0px",
          }}
        >
          <Hero
            imageSrc={ image2}

            // title="READY-TO-WEAR"
            // caption="keep it simple. "
          />
        </Stack>)}
        {/* <Stack
          direction="column"
          alignItems="stretch"
          sx={{
            width: isMobile ? "100%" : "50%",
            minWidth: "max-conent",
            position: "sticky",
            top: "0px",
          }}
        >
          <Hero
            imageSrc={ image2}

            // title="READY-TO-WEAR"
            // caption="keep it simple. "
          />
        </Stack> */}
        <Stack
          direction="column"
          alignItems="stretch"
          sx={{
            width: isMobile ? "100%" : "50%",
            minWidth: "max-conent",
            paddingTop: "40px",
          }}
          spacing={4}
        >
          <ImageSimpleCard image={image3} title="BLOUSON" width="50%" />
          <ImageSimpleCard image={image4} title="NECKLACE" width="50%" />
          <ImageSimpleCard image={image5} title="EARRINGS" width="50%" />
          <ImageSimpleCard image={image6} title="RINGS" width="50%" />
          <ImageSimpleCard image={image7} title="POLO" width="50%" />
          <ImageSimpleCard image={image8} title="BELT" width="50%" />
          <ImageSimpleCard image={image9} title="PANTS" width="50%" />
        </Stack>
      </Stack>
      <FooterCollection/>
    </div>
  );
}
