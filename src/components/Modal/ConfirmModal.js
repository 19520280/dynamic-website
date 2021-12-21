import React, { useState } from "react";
import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import HeaderTypography from "../Typographys/HeaderTypography";
import MessageModal from "./MessageModal";
import Modal from "@mui/material/Modal";
import ModalWithButton from "./ModalWithButton";
import Typography from "@mui/material/Typography";

export default function ConfirmModal({
  state,
  setState,
  action,
  header,
  messageText,
  typeMessage,
}) {
  //state, setState: state and setState of this component
  //listField: arrya of string, eg: ["Text Field 1", "Text Field 2"]
  //action: callbackfuntion when confirmed
  //header: header(string) of this Modal
  //btnText: text of primary button of this modal
  //messageText: what string you want to show when click primary button
  //typeMessage: type of this message, see "MessageModal" for more
  //footer: custom footer you want
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setState(false);
  };
  return (
    <div>
      <ModalWithButton
        action={action ? action : null}
        open={state}
        handleClose={handleClose}
        header={header}
        btnText="Đồng ý"
        messageText={messageText}
        severity={typeMessage}
        setState={setState}
      />
    </div>
  );
}
