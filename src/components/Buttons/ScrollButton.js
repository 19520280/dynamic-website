import { Fab } from "@mui/material";
import React from "react";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollButton = ({ isMobile }) => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      (document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50) &&
      !isMobile
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  function topFunction() {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div id="myBtn">
      <Fab onClick={topFunction} title="Go to top" sx={{bottom:"30px", right:"0px"}}>
        <UpIcon />,
      </Fab>
    </div>
  );
};
