import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Stack,
  Menu,
  MenuItem,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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

  
  //   const handleClick =(path) =>{
  //     handleClose();
  //     history.push("/");
  //   }

  return (
    <>
      <Button
        variant="text"
        aria-controls={`${page.title}-page`}
        aria-haspopup="true"
        // onClick={}
        onMouseOver={handleOver}
        endIcon={(page.menu.length && !isMobile) ? <KeyboardArrowDownIcon /> : null}
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
              <MenuItem key={key} onClick={handleClose} href={item.path}>
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
