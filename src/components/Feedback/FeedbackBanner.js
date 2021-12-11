import "./FeedbackBanner.css";

import { Box, IconButton, Slide, Typography, useMediaQuery, useTheme } from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
import feedbackBanner from "../../assets/images/feedbackBanner.jpg";
import { feedbacks } from "./../../dataSources/Feedback";

const FeedbackBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [checked, setchecked] = React.useState(false);
  const [feedbackShow, setfeedbackShow] = React.useState({
    index: 0,
    isNext: true,
  });

  React.useEffect(() => {
    setchecked(true);
  });
  function turnLeft() {
    setIndex(-1);
  }
  function turnRight() {
    setIndex(+1);
  }

  function setIndex(step) {
    if (feedbackShow.index + step < feedbacks.length) {
      setfeedbackShow({ index: feedbackShow.index + step, isNext: step == 1 });
    } else setfeedbackShow({ index: 0, isNext: true });
  }

  React.useEffect(() => {
    let timer = setInterval(function () {
      setIndex(+1);
    }, 4500);
    return () => {
      clearInterval(timer);
      timer = null;
    };
  });

  return (
    <div className="fullwidthbanner">
      <img src={feedbackBanner} />
      <div className="content">
        <Typography
          textAlign="center"
          fontSize={isMobile?"2.4vw":"calc(1.2rem + 1vw)"}
          fontWeight="bold"
          color="white"
          margin="calc(25% / 2)"
        >
          Nhận xét
        </Typography>
        {feedbacks.map((feedback, index) => {
          if (index === feedbackShow.index) {
            return (
              <div key={index} className="feedback">
                <Slide
                  direction={feedbackShow.isNext ? "left" : "right"}
                  in={checked}
                  {...(checked ? { timeout: 500 } : {})}
                >
                  <Box>
                    <Typography
                      textAlign="center"
                      variant="body1"
                      color="white"
                      fontSize={isMobile?"1.8vw":null}
                      paddingLeft={5}
                      paddingRight={5}
                      style={{ wordWrap: "break-word" }}
                    >
                      {feedback.content}
                    </Typography>
                    <Typography
                      textAlign="center"
                      variant="body2"
                      color="white"
                      fontStyle="italic"
                      margin={2}
                    >
                      {`- ${feedback.author} -`}
                    </Typography>
                  </Box>
                </Slide>
                <IconButton className="icon left" onClick={turnLeft}>
                  <ChevronLeftIcon
                    sx={{ color: "white", width: "2rem", height: "2rem" }}
                  />
                </IconButton>
                <IconButton className="icon right" onClick={turnRight}>
                  <ChevronRightIcon
                    sx={{ color: "white", width: "2rem", height: "2rem" }}
                  />
                </IconButton>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FeedbackBanner;
