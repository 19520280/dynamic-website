import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import HeaderTypography from "../Typographys/HeaderTypography";
import MessageModal from "./MessageModal";

export default function ModalWithButton({
  state,
  setState,
  listField,
  header,
  btnText,
  custombody,
  messageText,
  typeMessage,
  footer,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);
  const handleOpen = () => setState(true);
  const handleClose = () => {
    setState(false);
  };
  const handleClick = () => {
    messageText ? setChild(true) : setState(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "300px" : "579px",
    bgcolor: "background.paper",
    boxShadow: 24,
    padding: isMobile ? "30px 40px" : "40px 80px",
    borderRadius: "4px",
  };
  const body = (
    <>
      <Fade in={state}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <HeaderTypography padding="0px" text={header} />

            {listField
              ? listField.map((Field) => <TextField label={Field}></TextField>)
              : custombody}
            <Stack direction="row" justifyContent="flex-end">
              <Button onClick={handleClick} variant="contained">
                {btnText}
              </Button>
            </Stack>
          </Stack>
          {messageText ? (
            <MessageModal
              state={child}
              setState={setChild}
              setStateParent={setState}
              text={messageText}
              severity={typeMessage}
              closeAfterSecond={true}
            />
          ) : null}
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
