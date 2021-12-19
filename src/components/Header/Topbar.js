import "./Header.css";

import * as actions from "../../redux/actions/index";

import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../../assets/images/Logo.png";
import { SaleBannerState$ } from "../../redux/selectors";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartPopover from "../Popovers/ShoppingCartPopover";
import { useHistory } from "react-router-dom";

function Topbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const SaleBanner = useSelector(SaleBannerState$);
  const [text, setText] = useState("");
  const setSaleBanner = React.useCallback(
    (value) => {
      dispatch(actions.showSaleBanner(value));
    },
    [dispatch]
  );
  useEffect(() => {}, [SaleBanner]);

  return (
    <Stack direction="row" className="topbar">
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
       <ShoppingCartPopover/>
        <Avatar
          sx={{ bgcolor: "white" }}
          onClick={() => history.push("/Ca-nhan/Tai-khoan/Ho-so")}
        />
      </Stack>
    </Stack>
  );
}

export default Topbar;
