import React from "react";
import { useHistory } from "react-router-dom";
import {
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
  Slide
} from "@mui/material";
import { Box } from "@mui/system";
import ImageBanner from "../Banner/ImageBanner";
import CustomeImage from "../Banner/CustomeImage";


export default function FooterCollection() {
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      {isMobile ? (<ImageBanner image={3} caption="" />) : null}
      <Slide direction="right" in={true}>
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"center"}
          style={{ height: "80vh", margin: isMobile ? "10px" : "70px 70px" }}
        >
          {!isMobile ? (<CustomeImage image={2} />) : null}

          <Stack direction="column" justifyContent="center" paddingTop="30px" paddingLeft={isMobile?"0px":"30px"}>
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
    </>
  );
}
