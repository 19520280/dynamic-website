import { Box } from "@mui/system";
import ColorButton from "./ColorButton";
import { Grid } from "@mui/material";
import React from "react";

const ColorButtonGroup = ({ colors, selected, setSelected, only }) => {
  //Thuộc tính only: nếu only = true, chỉ được chọn 1 màu trong group. Ngược lại, chọn được nhiều màu
  return (
    <Box>
      <Grid
        container
        rowSpacing={1}
        marginTop={0.5}
        columnSpacing={{ xs: 0.5, sm: 0.5, md: 1 }}
      >
        {colors.map((color, index) => (
          <Grid item key={index}>
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
