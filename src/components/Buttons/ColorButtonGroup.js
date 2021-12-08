import { Box } from "@mui/system";
import ColorButton from "./ColorButton";
import { Grid } from "@mui/material";
import { Item } from "../../../../Shop-Manegement/client/node_modules/rc-menu/lib";
import React from "react";
import { Stack } from "@mui/material";

const ColorButtonGroup = ({ colors, selected, setSelected, only }) => {
 //Thuộc tính only: nếu only = true, chỉ được chọn 1 màu trong group. Ngược lại, chọn được nhiều màu
  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 12, md: 12 }}
      >
        {colors.map((color, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <ColorButton
              color={color}
              selected={selected}
              setSelected={setSelected}
              only={only}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorButtonGroup;
