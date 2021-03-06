import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { SystemColor } from "../../color";

export default function SearchInputypeof() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px 0px 0px ",
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: "1px solid",
        borderRadius: "4px",
        borderColor: SystemColor.gray,

      }}

    >
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tìm kiếm theo sản phẩm, ID đơn hàng"
        inputProps={{ "aria-label": "Tìm kiếm theo sản phẩm, ID đơn hàng" }}
      />
    </Paper>
  );
}
