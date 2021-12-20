import "./Header.css";

import * as actions from "../../redux/actions/index";

import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SaleBannerState$ } from "../../redux/selectors/index";
import { shadowColor } from './../../color';

function MenuButton({ page, setOpenMenu }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const setSaleBanner = React.useCallback(() => {
    dispatch(actions.showSaleBanner(false));
  }, [dispatch]);

  /* #region  Normal */
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    isMobile ? setOpenMenu(false) : setAnchorEl(null);
  };
  const open = Boolean(anchorEl) && !isMobile;
  /* #endregion */
  return (
    <div>
      <Button
        variant="text"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onClick={() => {
          handleClose();
          history.push(page.path);
        }}
        onMouseEnter={handleOver}
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
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              boxShadow: shadowColor,
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
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
          <Paper>
            {page.menu.map((item, key) => (
              <MenuItem
                key={key}
                onClick={() => {
                  setSaleBanner();
                  history.push(item.path);
                  handleClose();
                }}
              >
                {item.title}
              </MenuItem>
            ))}
          </Paper>
        </Menu>
      ) : null}
    </div>
  );
}

export default MenuButton;
