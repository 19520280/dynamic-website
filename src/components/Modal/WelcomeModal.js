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
import { useHistory } from "react-router-dom";

export default function WelcomeModal() {
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [child, setChild] = useState(false);

  const { welcomeModalState, closeWelcomeModal } = useContext(AuthContext);

  const handleClick = () => {
    closeWelcomeModal();
    history.push("/Ca-nhan/Tai-khoan/Ho-so");
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
      <Fade in={welcomeModalState}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <HeaderTypography padding="0px" text="Cập nhật thông tin" />
            <Typography>
              Thông tin của bạn chưa được hoàn thành
              <br />
              Hãy cập nhật thông tin để có những trải nghiệm tốt nhất
            </Typography>
            <Button
              id="7"
              onClick={handleClick}
              size="large"
              variant="contained"
            >
              XÁC NHẬN
            </Button>
            <Typography>
              Hoàn thành thông tin để có thêm <b>5 phút</b>
            </Typography>
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
        open={welcomeModalState}
        onClose={closeWelcomeModal}
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
