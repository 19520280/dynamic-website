import { Button, Stack, TextField } from "@mui/material";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";

const NumericTextField = ({ soLuong, setSoLuong }) => {
  const [value, setValue] = React.useState(soLuong);
  return (
    <Stack direction="row" spacing={0} justifyContent="center">
      <Button
        onClick={() => (soLuong - 1 >= 0 ? setValue(soLuong - 1) : setValue(1))}
        variant="outlined"
        sx={{
          padding: "0px",
          borderColor:"#BEBEBE",
          backgroundColor: "secondary",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "0px",
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <TextField
        id="outlined-size-small-textfield"
        size="small"
        type="number"
        value={value}
        onChange={(data) => setValue(data)}
        inputProps={{
          min: 0,
          style: {
            textAlign: "right",
            fontSize: "0.7rem",
            borderRadius: "0px",
            color: "secondary",
          },
          
        }}
        sx={{
          borderRadius: "0px",
          width: "40px",       
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
      />
      <Button
        onClick={() => setValue(soLuong + 1)}
        variant="outlined"
        sx={{
          padding: "0px",
          borderColor:"#BEBEBE",
          backgroundColor: "secondary",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "0px",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
      >
        <AddIcon fontSize="small" color="white" />
      </Button>
    </Stack>
  );
};

export default NumericTextField;
