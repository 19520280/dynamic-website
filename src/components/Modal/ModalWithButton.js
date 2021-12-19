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
  messageText,
  typeMessage,
  footer,
}) {
  //state, setState: state and setState of this component
  //listField: arrya of string, eg: ["Text Field 1", "Text Field 2"]
  //header: header(string) of this Modal
  //btnText: text of primary button of this modal
  //messageText: what string you want to show when click primary button
  //typeMessage: type of this message, see "MessageModal" for more
  //footer: custom footer you want
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);
  const handleOpen = () => setState(true);
  const handleClose = () => {
    setState(false);
  };
  const handleClick = () => {
    setChild(true);
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

            {listField.map((Field) => (
              <TextField label={Field}></TextField>
            ))}
            <Button onClick={handleClick} variant="contained">
              {btnText}
            </Button>
          </Stack>
          <MessageModal
            state={child}
            setState={setChild}
            setStateParent={setState}
            text={messageText}
            severity={typeMessage}
            closeAfterSecond={true}
          />
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
