import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import HeaderTypography from "../Typographys/HeaderTypography";
import MessageModal from "./MessageModal";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

export default function ModalWithButton({
  action,
  body,
  btnText,
  handleClose,
  handleClick,
  header,
  maxWidthDialog,
  messageText,
  open,
  setState,
  typeMessage,
}) {
  //action: callbackfuntion when confirmed
  //body: content dialog
  //btnText: text of primary button of this modal, if none, do not display dialog action
  //header: header(string) of this Modal
  //maxWidthDialog: set maxWidth for dialog
  //messageText: what string you want to show when click primary button
  //state, setState: state and setState of this component
  //typeMessage: type of this message, see "MessageModal" for more
  //noToastMessage: default "false", if true, toast Mesage after click primary button.
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);

  const handleOnClickButton = () => {
    if (handleClick) {
      handleClick();
    } else {
      setChild(true);
      setTimeout(handleClose, 2100);
    }
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      fullScreen={isMobile}
      onClose={handleClose ? handleClose : null}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        maxHeight: maxWidthDialog ? "100%" : "80%",
        "& .css-10jb4jx-MuiPaper-root-MuiDialog-paper": {
          maxWidth: maxWidthDialog,
          minWidth: "25%",
          color: "primary",
        },
      }}
    >
      <DialogTitle id="scroll-dialog-title">
        {header}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            marginLeft: 3,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {body}
      {btnText ? (
        <DialogActions>
          <Button onClick={handleClose} variant="text">
            H???y
          </Button>

          <Button onClick={handleOnClickButton} variant="contained">
            {btnText}
          </Button>
        </DialogActions>
      ) : null}
      {messageText ? (
        <MessageModal
          state={child}
          setState={setChild}
          setStateParent={setState}
          action={action}
          text={messageText}
          severity={typeMessage}
          closeAfterSecond={true}
        />
      ) : null}
    </Dialog>
  );
}
