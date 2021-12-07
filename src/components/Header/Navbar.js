import React, { useState } from "react";
import "./Header.css";
import {
  Box,
  Button,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../../dataSources/Pages";
import MenuButton from "./Button/MenuButton";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFC",
      }}
      className="navbar"
    >
      {/* <Stack direction="row" spacing={6}>
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        ) : null} */}
      {CustomStack(
        pages.map((page, index) => <MenuButton key={index} page={page} />)
      )}
      {/* </Stack> */}
    </Box>
  );
}

export default Navbar;
