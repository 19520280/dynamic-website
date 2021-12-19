import { Box, Grid } from "@mui/material";

import MixMatchCard from "./../ProductCard/MixMatchCard";
import MixMatchDialog from "../Dialogs/MixMatchDialog/MixMatchDialog";
import React from "react";
import { mixMatchs } from "../../dataSources/MixMatch";

const MixMatchCardGrid = () => {
  const [currentSanPham, setCurrentSanPham] = React.useState({
    imgs: [],
    productIds: [],
  });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MixMatchDialog sanPham={currentSanPham} />
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 2, sm: 6, md: 8 }}
      >
        {mixMatchs.map((sanPham, index) => (
          <Grid item xs={1} sm={2} md={2} key={index}>
            <MixMatchCard
              sanPham={sanPham}
              setCurrentSanPham={setCurrentSanPham}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MixMatchCardGrid;
