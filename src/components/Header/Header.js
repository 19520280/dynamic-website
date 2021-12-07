import * as React from "react";

import { AppBar, Divider, Stack } from "@mui/material";

import Navbar from "./Navbar";
import Topbar from "./Topbar";

function Header() {
  return (
    <AppBar  elevation={0} >
      <Stack direction="column" >
        <Topbar />
        <Navbar />
      </Stack>
    </AppBar>
  );
}

export default Header;
