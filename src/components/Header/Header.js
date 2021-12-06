import * as React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import { Stack, AppBar,Divider } from "@mui/material";

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
