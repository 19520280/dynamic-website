import { Fab } from "@mui/material";
import React from "react";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";

export const ScrollButton = () => {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0;
  }
  return (
    <div id="myBtn">
      <Fab onclick={topFunction()} title="Go to top" >
        <UpIcon />,
      </Fab>
    </div>
  );
};
