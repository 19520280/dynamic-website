import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderTypography from "../Typographys/HeaderTypography";
export default function AddNewWishListModal({
  state,
  setState,
  setStateParent,
  text,
  severity,
  closeAfterSecond,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const handleOpen = () => setState(true);
  const handleClose = () => {
    setState(false);
    if (setStateParent != null) {
      setStateParent(false);
    }
  };
  useEffect(() => {
    if (state == true && closeAfterSecond == true) {
      setTimeout(handleClose, 3000);
    }
  }, [state]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "200px" : "300px",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "4px",
  };
  const body = (
    <>
      <Fade in={state}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <Alert severity={severity ? severity : "success"}>{text}</Alert>
          </Stack>
        </Box>
      </Fade>
    </>
  );
  return (
    <div style={{ outline: "none" }}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={state}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        outlined="none"
      >
        {body}
      </Modal>
    </div>
  );
}
