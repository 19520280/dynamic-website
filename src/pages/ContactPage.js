import { Stack, useMediaQuery, useTheme } from "@mui/material";

import BottomInfomation from "./../components/ContactElement/BottomInfomation";
import FeedbackInfomation from "../components/ContactElement/FeedbackInfomation";
import HeaderTypography from "../components/Typographys/HeaderTypography";
import Map from "../components/ContactElement/Map";
import React from "react";

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <HeaderTypography text="Liên hệ" />
      <Stack direction="column" spacing={6}>
        <Stack direction={isMobile ? "column" : "row"} spacing={5}>
          <Map />
          <FeedbackInfomation />
        </Stack>
        <BottomInfomation />
      </Stack>
    </div>
  );
};

export default ContactPage;
