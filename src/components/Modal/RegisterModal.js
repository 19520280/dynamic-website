import {
  Avatar,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
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

export default function RegisterModal() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);
  const [checked, setChecked] = useState(false);

  const {
    openLoginModal,
    registerModalState,
    closeRegisterModal,
    openOTPModal,
    openWelcomeModal,
    login,
  } = useContext(AuthContext);

  const handleClick = () => {
    setChild(true);
    if (checked) {
      login();
    }
  };

  const handleNextClick = () => {
    if (checked) {
      openOTPModal();
      closeRegisterModal();
    } else {
      setChild(true);
    }
  };

  const handleLoginClick = () => {
    openLoginModal();
    closeRegisterModal();
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
      <Fade in={registerModalState}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <HeaderTypography padding="0px" text="Đăng ký" />
            <TextField label="Email / Số điện thoại" />
            <TextField label="Mật khẩu" type="password" />
            <TextField label="Nhập lại mật khẩu" type="password" />
            <Button onClick={handleNextClick} size="large" variant="contained">
              ĐĂNG KÝ
            </Button>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Checkbox
                checked={checked}
                onClick={(e) => setChecked(e.target.checked)}
              />
              <Typography>
                Đồng ý với{" "}
                <Link sx={{ cursor: "pointer" }}>Điều khoản sử dụng</Link>
              </Typography>
            </Stack>
            <Divider>HOẶC</Divider>
            <Stack
              direction="row"
              spacing="24px"
              justifyContent="center"
              alignsItems="center"
            >
              <IconButton size="small" onClick={() => handleClick()}>
                <Avatar sx={{ width: 32, height: 32 }} src={facebook} />
              </IconButton>
              <IconButton size="small" onClick={() => handleNextClick()}>
                <Avatar sx={{ width: 32, height: 32 }} src={google} />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center">
              <ChevronLeft />
              <Link
                sx={{ cursor: "pointer" }}
                onClick={() => handleLoginClick()}
              >
                Đăng nhập
              </Link>
            </Stack>
          </Stack>
          <MessageModal
            state={child}
            setState={setChild}
            action={checked ? openWelcomeModal : null}
            text={
              checked ? "Đăng ký thành công" : "Chưa đồng ý điều khoản sử dụng"
            }
            severity={checked ? "success" : "warning"}
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
        open={registerModalState}
        onClose={closeRegisterModal}
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
