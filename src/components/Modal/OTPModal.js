import {
  Avatar,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import HeaderTypography from "../Typographys/HeaderTypography";
import MessageModal from "./MessageModal";
import { facebook, google } from "../../constant";
import { ChevronLeft } from "@mui/icons-material";

export default function OTPModal() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);

  const { OTPModalState, closeOTPModal, openRegisterModal, openWelcomeModal, login } =
    useContext(AuthContext);

  const handleClick = () => {
    setChild(true);
    login();
  };

  const handleBack = () => {
    openRegisterModal();
    closeOTPModal();
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
      <Fade in={OTPModalState}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <HeaderTypography padding="0px" text="Xác nhận" />
            <Stack
              direction="row"
              spacing="8px"
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                id="1"
                type="number"
                onChange={(e) => {
                  document.getElementById("2").focus();
                  document.getElementById("2").value = "";
                }}
                onFocus={(e) => (e.target.value = "")}
              />
              <TextField
                id="2"
                type="number"
                onChange={(e) => {
                  document.getElementById("3").focus();
                  document.getElementById("3").value = "";
                }}
                onFocus={(e) => (e.target.value = "")}
              />
              <TextField
                id="3"
                type="number"
                onChange={(e) => {
                  document.getElementById("4").focus();
                  document.getElementById("4").value = "";
                }}
                onFocus={(e) => (e.target.value = "")}
              />
              <TextField
                id="4"
                type="number"
                onChange={(e) => {
                  document.getElementById("5").focus();
                  document.getElementById("5").value = "";
                }}
                onFocus={(e) => (e.target.value = "")}
              />
              <TextField
                id="5"
                type="number"
                onChange={(e) => {
                  document.getElementById("6").focus();
                  document.getElementById("6").value = "";
                }}
                onFocus={(e) => (e.target.value = "")}
              />
              <TextField
                id="6"
                type="number"
                onChange={(e) => {
                  document.getElementById("7").focus();
                  document.getElementById("7").value = "";
                }}
                onFocus={(e) => (e.target.value = "")}
              />
            </Stack>
            <Button
              id="7"
              onClick={handleClick}
              size="large"
              variant="contained"
            >
              XÁC NHẬN
            </Button>
            <Typography>
              Mã xác minh có hiệu lực trong vòng 5 phút
              <br />
              Không thấy mã? <Link sx={{ cursor: "pointer" }}>Gửi lại</Link>
            </Typography>
            <Stack direction="row" spacing="4px" alignItems="center">
              <ChevronLeft />
              <Link sx={{ cursor: "pointer" }} onClick={() => handleBack()}>
                Quay lại
              </Link>
            </Stack>
          </Stack>
          <MessageModal
            state={child}
            setState={setChild}
            setStateParent={closeOTPModal}
            action={openWelcomeModal}
            text="Đăng ký thành công"
            severity="success"
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
        open={OTPModalState}
        onClose={closeOTPModal}
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
