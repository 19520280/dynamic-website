import {
  Avatar,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
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
import { ChevronRight } from "@mui/icons-material";

export default function LoginModal() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);

  const { loginModalState, closeLoginModal, openRegisterModal, login } =
    useContext(AuthContext);

  const handleClick = () => {
    setChild(true);
    login();
  };

  const handleRegisterClick = () => {
    openRegisterModal();
    closeLoginModal();
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
      <Fade in={loginModalState}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <HeaderTypography padding="0px" text="Đăng nhập" />
            <TextField label="Email / Số điện thoại" />
            <TextField label="Mật khẩu" type="password" />
            <Button onClick={handleClick} size="large" variant="contained">
              ĐĂNG NHẬP
            </Button>
            <Stack direction="row-reverse">
              <Button sx={{ fontWeight: "bold" }}>QUÊN MẬT KHẨU</Button>
            </Stack>
            <Divider>HOẶC</Divider>
            <Stack
              direction="row"
              spacing="24px"
              justifyContent="center"
              alignsItems="center"
            >
              <IconButton size="small " onClick={() => handleClick()}>
                <Avatar sx={{ width: 32, height: 32 }} src={facebook} />
              </IconButton>
              <IconButton size="small " onClick={() => handleClick()}>
                <Avatar sx={{ width: 32, height: 32 }} src={google} />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Link
                sx={{ cursor: "pointer" }}
                onClick={() => handleRegisterClick()}
              >
                Đăng ký
              </Link>
              <ChevronRight />
            </Stack>
          </Stack>
          <MessageModal
            state={child}
            setState={setChild}
            setStateParent={closeLoginModal}
            text="Đăng nhập thành công"
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
        open={loginModalState}
        onClose={closeLoginModal}
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
