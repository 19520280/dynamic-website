import { Box, Stack, TextField, Typography } from "@mui/material";

import AddressInfo from "./AddressInfo";
import PersonalInfo from "./PersonalInfo";
import React from "react";
import { SystemColor } from "../../../color";

const UserInfo = ({ auth, isGiven }) => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      <Typography variant="button" fontWeight="bold" color="secondary">
        {isGiven ? "THÔNG TIN NGƯỜI NHẬN" : "THÔNG TIN NGƯỜI MUA"}
      </Typography>
      <PersonalInfo />
      <AddressInfo />
      <TextField id="outlined-required" label="Ghi chú" />
    </Stack>
  );
};

export default UserInfo;
