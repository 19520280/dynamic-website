import { Button, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import "./CustomeImage.css";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";

const video1 = require("../../assets/videos/VideoSquare1.mp4").default;
const image1 = require("../../assets/videos/SubVideo1.png").default;

const video2 = require("../../assets/videos/VideoSquare1.mp4").default;
const image2 = require("../../assets/images/collection/image3.png").default;

export default function CustomeImage({
  video,
  image,
  fullWidth,
  width,
  btnText,
}) {
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log(video, image, image1);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  });
  const handleClickProduct = () => {
    console.log("clo");
    history.push("/Ao/Ao-thun/basic-tee");
  };
  const handleClick = () => {
    history.push("/");
  };
  const handleClickCollection = () => {
    history.push("/Bo-suu-tap/Mua-dong-2021");
  };
  return (
    <div
      className={
        fullWidth ? "custome-image-container2" : "custome-image-container"
      }
    >
      <div
        className={inView ? "slider--zoom--banner" : "slider--banner"}
        ref={ref}
      >
        <div className="custome-image-overlay">
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
            <img
              width={width ? width : "100%"}
              src={image == 1 ? image1 : image == 2 ? image2 : image}
            ></img>
          ) : null}
        </div>

        <div className="custome-image-middle">
          <Button
            style={{ display: image == 2 ? "none" : "block" }}
            variant="outlined"
            onClick={
              btnText !== "XEM THÊM"
                ? handleClickProduct
                : handleClickCollection
            }
            sx={{
              fontSize: "calc(0.8rem + 0.05vw)",
              color: "white",
              borderColor: "white",
            }}
          >
            {btnText ? btnText : "XEM THÊM"}
          </Button>
        </div>
      </div>
    </div>
  );
}
