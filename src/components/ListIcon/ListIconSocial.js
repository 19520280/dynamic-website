import React from "react";
import IconButton from "@mui/material/IconButton";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Stack } from "@mui/material";
import { TxtColor } from "../../color";

export default function ListIconSocial({justifyContent}) {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent={justifyContent ? justifyContent : "flex-start"}
    >
      <IconButton aria-label="fb" sx={{ color: TxtColor.txtWhite }}>
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="ig" sx={{ color: TxtColor.txtWhite }}>
        <InstagramIcon />
      </IconButton>
      <IconButton aria-label="tt" sx={{ color: TxtColor.txtWhite }}>
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="yt" sx={{ color: TxtColor.txtWhite }}>
        <YouTubeIcon />
      </IconButton>
      <IconButton aria-label="p" sx={{ color: TxtColor.txtWhite }}>
        <PinterestIcon />
      </IconButton>
    </Stack>
  );
}
