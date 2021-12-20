import { Box, Stack, TextField, Typography } from "@mui/material";

import AddressInfo from "./AddressInfo";
import PersonalInfo from "./PersonalInfo";
import React from "react";
import { SystemColor } from "../../../color";

const UserInfo = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
      marginTop={2}
    >
      <PersonalInfo />
      <AddressInfo />
      <TextField id="outlined-required" label="Ghi chú" />
    </Stack>
  );
};

export default UserInfo;
