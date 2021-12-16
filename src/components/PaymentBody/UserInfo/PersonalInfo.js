import { Stack, TextField } from "@mui/material";

import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <TextField required id="outlined-required" label="Họ và tên" />
      <Stack
        direction="row"
        spacing={2}
        sx={{
          "& .MuiTextField-root": { width: "100%" },
        }}
      >
        <TextField
          label="Số điện thoại"
          required
          inputProps={{ inputMode: "tel" }}
        />
        <TextField label="Email" inputProps={{ inputMode: "email" }} />
      </Stack>
    </>
  );
};

export default PersonalInfo;
