import {
  Grid,
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Slide,
  Button,
} from "@mui/material";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import CustomeImage from "../../components/Banner/CustomeImage";
import ImageBanner from "../../components/Banner/ImageBanner";

const video1 = "../../assets/videos/Video1.mp4";

export default function CollectionPage() {
  const history = useHistory();
  const vid = 1;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div>
      <ImageBanner
        video={vid}
        caption="S P R I N G C O L L E C T I O N 2 0 2 1"
      />
      <Slide direction="right" in={true}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent={"center"}
          style={{ height: "60vh", margin: isMobile ? "50px" : "70px 250px" }}
        >
          <Box>
            <Typography fontSize={isMobile ? "1.8rem" : "2rem"}>
              <h3>THE 2021/22 MÉTIERS D’ART COLLECTION</h3>
            </Typography>
            <Typography>
              <h4>
                The 2021/22 Métiers d’art collection by Virginie Viard was
                presented at le19M, the new Parisian building imagined by CHANEL
                dedicated to the Fashion Métiers d'art. Metropolitan yet
                sophisticated, the collection is rich in details crafted in the
                Maisons d'art ateliers, with nods to le19M’s architecture
                through embroideries and structured proportions.
              </h4>
            </Typography>
          </Box>
        </Stack>
      </Slide>

      <ImageBanner video={2} caption="S P E C I A L B R A N D" />
      <ImageBanner
        image={1}
        title="I C O N I C"
        caption="H e r e  i s  l o o k i n g  a t  y o u ."
      />

      <Stack direction="row">
        <CustomeImage video={1} />
        <CustomeImage video={null} image={1} />
      </Stack>
      <Slide direction="right" in={true}>
        <Stack
          direction="column"
          spacing={2}
          justifyContent={"center"}
          style={{ height:  "60vh", margin: isMobile ? "50px" : "70px 250px" }}
        >
          <Typography fontSize={isMobile ? "1.8rem" : "2rem"}>
            <h3>
              WITH ALL THE HISTORY IT CARRIES INSIDE, IT REPRESENTS MORE THAN A
              BAG: IT’S LIKE CARRYING PARIS ON YOUR SHOULDER.
            </h3>
          </Typography>
        </Stack>
      </Slide>
      <ImageBanner video={3} title="O N T H E W A Y" />
      <ImageBanner image={2} title="L U X U R Y" />
      {isMobile ? (<ImageBanner image={3} caption="" />) : null}
      <Slide direction="right" in={true}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"center"}
          style={{ height: "80vh", margin: isMobile ? "10px" : "70px 70px" }}
        >
          {!isMobile ? (<CustomeImage image={2} />) : null}

          <Stack direction="column" justifyContent="center" paddingTop="30px">
            <Typography paddingLeft={isMobile?"50px":"0px"} fontSize={isMobile ? "1.6rem" : "2rem"}>
              <h3>KHÁM PHÁ NHIỀU HƠN NHỮNG TRANG PHỤC MỚI TẠI DYNAMIC</h3>
            </Typography>
            <Stack
              direction="row"
              justifyContent={isMobile?"flex-end":"flex-start"}
              paddingTop="30px"
              paddingRight="30px"
            >
              <Button onClick={handleClick} variant="contained">
                KHÁM PHÁ
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Slide>
    </div>
  );
}
