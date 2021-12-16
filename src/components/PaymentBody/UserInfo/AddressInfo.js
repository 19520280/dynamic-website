import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { districs, provinces, wards } from "../../../dataSources/Provinces";

import React from "react";

const AddressInfo = () => {
  const [province, setprovince] = React.useState("");
  const [distric, setdistric] = React.useState("");
  const [ward, setward] = React.useState("");

  const handleChangeProvince = (event) => {
    setprovince(event.target.value);
  };
  const handleChangeDistric = (event) => {
    setdistric(event.target.value);
  };
  const handleChangeWard = (event) => {
    setward(event.target.value);
  };
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          "& .MuiTextField-root": { width: "100%" },
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tỉnh/Thành phố</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={province}
            onChange={handleChangeProvince}
            label="Tỉnh/Thành phố"
          >
            {provinces.map((province, index) => (
              <MenuItem key={index} value={province}>
                {province}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quận/Huyện</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={distric}
            onChange={handleChangeDistric}
            label="Quận/Huyện"
          >
            {districs.map((distric, index) => (
              <MenuItem key={index} value={distric}>
                {distric}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Xã/Phường</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ward}
            onChange={handleChangeWard}
            label="Quận/Huyện"
          >
            {wards.map((ward, index) => (
              <MenuItem key={index} value={ward}>
                {ward}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <TextField required id="outlined-required" label="Địa chỉ" />
    </>
  );
};

export default AddressInfo;
