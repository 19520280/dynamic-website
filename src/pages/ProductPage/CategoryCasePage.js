import React from "react";
import { useLocation } from "react-router-dom";
import Filter from "./Filter";
import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
const CategoryCasePage = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Box
        style={{
          backgroundColor: "#FCFCFC",
        }}
      >
        <Filter/>
      </Box>
    </div>
  );
};

export default CategoryCasePage;
