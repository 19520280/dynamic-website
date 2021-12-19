import * as React from "react";

import { AppBar, Stack, useMediaQuery, useTheme } from "@mui/material";
import { TopbarDesktop, TopbarMobile } from "./Topbar";

import Navbar from "./Navbar";

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar elevation={0} position="static">
      <Stack direction="column">
        {isMobile ? <TopbarMobile/> : <TopbarDesktop />}
        <Navbar isMobile={isMobile} />
      </Stack>
    </AppBar>
  );
}

export default Header;
