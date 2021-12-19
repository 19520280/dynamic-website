import "./Header.css";

import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";

import MenuButton from "./MenuButton";
import MenuIcon from "@mui/icons-material/Menu";
import { navbar } from "../../dataSources/Pages";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* #region  responsive */
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const CustomStack = (content) => {
    if (isMobile) {
      return (
        <>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="column" spacing={2}>
            {openMenu ? content : null}
          </Stack>
        </>
      );
    } else {
      {
        return (
          <Stack direction="row" spacing={6}>
            {content}
          </Stack>
        );
      }
    }
  };
  /* #endregion */
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
      className="navbar"
    >
      {CustomStack(
        navbar.map((page, index) => (
          <MenuButton key={index} page={page} setOpenMenu={setOpenMenu} />
        ))
      )}
    </Box>
  );
}

export default Navbar;
