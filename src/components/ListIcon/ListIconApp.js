import React from 'react'
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/material";
import { TxtColor } from "../../color";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

export default function ListIconApp({justifyContent}) {
    return (
        <Stack direction="row" spacing={1} justifyContent={justifyContent?justifyContent:"flex-start"}>
        <IconButton aria-label="android" sx={{ color: TxtColor.txtWhite }}>
          <AndroidIcon />
        </IconButton>
        <IconButton aria-label="apple" sx={{ color: TxtColor.txtWhite }}>
          <AppleIcon />
        </IconButton>
      </Stack>
    )
}
