import ContactInfomation from "../components/ContactElement/ContactInfomation";
import React from "react";
import { Stack } from "@mui/material";

const ContactPage = () => {
  return (
    <Stack direction="row" spacing={4}>
      <ContactInfomation />
    </Stack>
  );
};

export default ContactPage;
