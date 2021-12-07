import * as React from "react";
import "./Header.css";

import Logo from "../../assets/images/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {
  TextField,
  Box,
  InputAdornment,
  Avatar,
  Stack,
  Badge,
  IconButton
} from "@mui/material";

function Topbar() {
  return (
    <Stack direction="row" className="topbar">
      <Box component="div" sx={{ display: "inline", flex: 1 }}>
        <img src={Logo} />
      </Box>
      <Stack direction="row" spacing={2} sx={{ flex: 2 }}  justifyContent="flex-end">
        <Box component="form" noValidate autoComplete="off">
          <TextField
            focused
            variant="outlined"
            color="secondary"
            placeholder="Tìm kiếm sản phẩm"
            style={{
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
                    <SearchIcon style={{ color: "white" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <IconButton>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </IconButton>
        <Avatar sx={{ bgcolor: "white" }} />
      </Stack>
    </Stack>
  );
}

export default Topbar;
