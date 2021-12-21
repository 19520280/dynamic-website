import "./Header.css";

import * as actions from "../../redux/actions/index";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  ShoppingCartPopoverDesktop,
  ShoppingCartPopoverMobile,
} from "../Popovers/ShoppingCartPopover";
import { useDispatch, useSelector } from "react-redux";

import { AuthContext } from "../../context/context";
import AvatarPopover from "../Popovers/AvatarPopover";
import CloseIcon from "@mui/icons-material/Close";
import LoginModal from "../Modal/LoginModal";
import Logo from "../../assets/images/Logo.png";
import OTPModal from "../Modal/OTPModal";
import { Person } from "@mui/icons-material";
import RegisterModal from "../Modal/RegisterModal";
import { SaleBannerState$ } from "../../redux/selectors";
import SearchIcon from "@mui/icons-material/Search";
import WelcomeModal from "../Modal/WelcomeModal";
import { useHistory } from "react-router-dom";

export const TopbarDesktop = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const SaleBanner = useSelector(SaleBannerState$);
  const [text, setText] = useState("");
  const setSaleBanner = React.useCallback(
    (value) => {
      dispatch(actions.showSaleBanner(value));
      if (value == true) {
        history.push("/Ket-qua-tim-kiem");
      } else history.push("/");
    },
    [dispatch]
  );
  useEffect(() => {}, [SaleBanner]);

  const { openLoginModal, userData } = useContext(AuthContext);
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <OTPModal />
      <WelcomeModal />
      <Stack direction="row" className="topbar">
        <Box component="div" sx={{ display: "inline", flex: 1 }}>
          <img
            src={Logo}
            onClick={() => history.push("/")}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{ flex: 2 }}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box component="form" noValidate autoComplete="off">
            <TextField
              focused
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  if (text != "") {
                    setSaleBanner(true);
                  } else setSaleBanner(false);
                  ev.preventDefault();
                }
              }}
              onSubmit={() => {
                if (text != "") {
                  setSaleBanner(true);
                } else setSaleBanner(false);
              }}
              variant="outlined"
              onChange={(e) => {
                setText(e.target.value);
                // if (e.target.value == "") {
                //   setSaleBanner(false);
                // }
              }}
              color="secondary"
              placeholder="Tìm kiếm sản phẩm"
              style={{
                border: "white",
                backgroundColor: "transparent",
              }}
              InputProps={{
                style: {
                  color: "white",
                  borderRadius: "30px",
                  height: "36px",
                  width: "auto",
                  fontSize: "14px",
                  padding: "8px",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon
                        style={{ color: "white" }}
                        onClick={() => {
                          if (text != "") setSaleBanner(true);
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <ShoppingCartPopoverDesktop />
          {userData && userData.isLoggedin ? (
            <AvatarPopover />
          ) : (
            <IconButton onClick={openLoginModal}>
              <Person style={{ color: "white" }} />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export const TopbarMobile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const SaleBanner = useSelector(SaleBannerState$);
  const [text, setText] = useState("");
  const setSaleBanner = React.useCallback(
    (value) => {
      dispatch(actions.showSaleBanner(value));
      if (value == true) {
        setOpenSearchBox(false);
        history.push("/Ket-qua-tim-kiem");
      } else history.push("/");
    },
    [dispatch]
  );
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const { openLoginModal, userData } = useContext(AuthContext);
  //Code vội nên ko chia nữa :'()
  const searchBox = (
    <Box sx={{ width: "100%", p: 2 }} role="presentation">
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
        sx={{ marginBottom: "50%" }}
      >
        <div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="button" fontWeight="bold" color="secondary">
              TÌM KIẾM
            </Typography>
            <IconButton
              onClick={() => setOpenSearchBox(false)}
              sx={{ cursor: "pointer" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
        </div>
        <TextField
          focused
          style={{ display: openSearchBox ? "none" : "block" }}
          variant="outlined"
          color="secondary"
          placeholder="Tìm kiếm sản phẩm"
          sx={{
            backgroundColor: "transparent",
            width: "100%",
          }}
          InputProps={{
            style: {
              borderRadius: "4px",
              height: "36px",
              width: "100%",
              fontSize: "14px",
              padding: "8px",
              marginTop: "5%",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
  const SearchBox = (
    <Box sx={{ width: "100%", p: 2 }} role="presentation">
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <TextField
          focused
          variant="outlined"
          placeholder="Tìm kiếm sản phẩm"
          sx={{
            backgroundColor: "transparent",
            width: "100%",
          }}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              if (text != "") {
                setSaleBanner(true);
              } else setSaleBanner(false);
              ev.preventDefault();
            }
          }}
          onSubmit={() => {
            if (text != "") {
              setSaleBanner(true);
            } else setSaleBanner(false);
          }}
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
            // if (e.target.value == "") {
            //   setSaleBanner(false);
            // }
          }}
          InputProps={{
            style: {
              borderRadius: "4px",
              height: "36px",
              width: "100%",
              fontSize: "14px",
              padding: "12px",
              color: "#fff",
              border: "1px solid white",
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon
                    style={{ color: "white" }}
                    onClick={() => {
                      if (text != "") setSaleBanner(true);
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Box>
  );
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <OTPModal />
      <WelcomeModal />
      {/* <Drawer
        anchor="bottom"
        open={openSearchBox}
        onClose={() => setOpenSearchBox(false)}
        sx={{ borderRadius: "4px" }}
      >
        {searchBox}
      </Drawer> */}
      <Stack direction="column" className="topbar">
        <Stack direction="row">
          <Box component="div" sx={{ display: "inline", flex: 1 }}>
            <img src={Logo} onClick={() => history.push("/")} />
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ flex: 2 }}
            justifyContent="flex-end"
            alignItems="center"
          >
            <IconButton onClick={() => setOpenSearchBox(!openSearchBox)}>
              {openSearchBox ? (
                <CloseIcon style={{ color: "white" }} />
              ) : (
                <SearchIcon style={{ color: "white" }} />
              )}
            </IconButton>
            <ShoppingCartPopoverMobile />
            {userData && userData.isLoggedin ? (
              <AvatarPopover />
            ) : (
              <IconButton onClick={openLoginModal}>
                <Person style={{ color: "white" }} />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ flex: 1 }}
          justifyContent="flex-end"
          alignItems="center"
          style={{ display: openSearchBox ? "block" : "none" }}
        >
          {SearchBox}
        </Stack>
      </Stack>
    </>
  );
};
