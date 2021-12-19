import "./Header.css";

import * as actions from "../../redux/actions/index";

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
import { useDispatch, useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { SaleBannerState$ } from "../../redux/selectors/index";

function MenuButton({ page, setOpenMenu }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const setSaleBanner = React.useCallback(() => {
    dispatch(actions.showSaleBanner(false));
  }, [dispatch]);

  /* #region  Normal */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl) && !isMobile;
  const history = useHistory();

  const handleOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    isMobile ? setOpenMenu(false) : setAnchorEl(null);
  };
  /* #endregion */

  return (
    <>
      <Button
        variant="text"
        aria-controls={`${page.title}-page`}
        aria-haspopup="true"
        onClick={() => {
          handleClose();
          history.push(page.path);
        }}
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
          <Paper sx={{ p: "0px", borderColor: "secondary" }} variant="outlined">
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
    </>
  );
}

export default MenuButton;
