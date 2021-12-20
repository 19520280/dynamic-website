import { Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "./CustomeImage.css";
const video1 = require("../../assets/videos/VideoSquare1.mp4").default;
const image1 = require("../../assets/videos/SubVideo1.png").default;

const video2 = require("../../assets/videos/VideoSquare1.mp4").default;
const image2 = require("../../assets/images/collection/image3.png").default;


export default function CustomeImage({ video, image }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(video, image, image1);

  return (
    <div className="container">
      <div className="overlay">
        {video != null ? (
          <video
            width={"100%"}
            muted="true"
            autoPlay={true}
            playsinline
            loop={true}
          >
            <source src={video == 1 ? video1 : video2} type="video/mp4" />
          </video>
        ) : image != null ? (
          <img width={"100%"} src={image==1?image1:image2}></img>
        ) : null}

        <div className="middle">
          <Button
            style = {{display:image==2?"none":"block"}}
            variant="outlined"
            sx={{
              fontSize: "calc(0.8rem + 0.05vw)",
              color: "white",
              borderColor: "white",
            }}
          >
            XEM THÊM
          </Button>
        </div>
      </div>
    </div>
  );
}
