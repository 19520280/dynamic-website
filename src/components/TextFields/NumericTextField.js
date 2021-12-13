import React from "react";
import { TextField } from "@mui/material";
import { styled } from '@mui/system';

const StyledInputElement = styled('input')`
  width: 100%;
  font-size: 1rem;
  background: white;
  padding: 6px 6px;
  &:hover {
    border: 1px solid #303537;
  }

  &:focus {
      border: 1px solid #303537;
  }
`;
const NumericTextField = () => {
  return (
    <TextField
      id="outlined-number"
      type="number"
    sx={{StyledInputElement}}
    />
  );
};

export default NumericTextField;
