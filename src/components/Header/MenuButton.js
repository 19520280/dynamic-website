import "./Header.css";

import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MenuButton({ page }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* #region  Normal */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl) && !isMobile;
  const history = useHistory();

  const handleOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  /* #endregion */

  return (
    <>
      <Button
        variant="text"
        aria-controls={`${page.title}-page`}
        aria-haspopup="true"
        onClick={() => history.push(page.path)}
        onMouseOver={handleOver}
        endIcon={
          page.menu.length && !isMobile ? <KeyboardArrowDownIcon /> : null
        }
      >
        {page.title}
      </Button>
      {page.menu.length ? (
        <Menu
          elevation={0}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            disablePadding: true,
            onMouseLeave: handleClose,
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Paper sx={{ p: "8px", borderColor: "secondary" }} variant="outlined">
            {page.menu.map((item, key) => (
              <MenuItem
                key={key}
                onClick={() => {
                  handleClose();
                  history.push(item.path);
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Paper>
        </Menu>
      ) : null}
    </>
  );
}

export default MenuButton;
