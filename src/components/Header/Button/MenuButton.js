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
} from "@mui/material";

function MenuButton({ page }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleOver = (event) => {
    console.log("Open");
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("Close");
    setAnchorEl(null);
  };

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
