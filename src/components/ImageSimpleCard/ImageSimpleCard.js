import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { toUnitless } from "@mui/material/styles/cssUtils";
import React from "react";
import { useHistory } from "react-router-dom";
import CustomeImage from "../Banner/CustomeImage";

export default function ImageSimpleCard({ image, width, title }) {

  return (
    <div>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <CustomeImage image={image} btnText="MUA NGAY" />
        <Typography>{title}</Typography>
      </Stack>
    </div>
  );
}
