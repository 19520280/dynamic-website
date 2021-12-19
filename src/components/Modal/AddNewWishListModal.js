import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack, TextField, useMediaQuery, useTheme } from "@mui/material";
import HeaderTypography from "../Typographys/HeaderTypography";
import SuccessModal from "./SuccessModal";
export default function AddNewWishListModal({ state, setState }) {
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
    padding: isMobile?"30px 40px":"40px 80px",
    borderRadius: "4px",
  };
  const body = (
    <>
      <Fade in={state}>
        <Box sx={style}>
          <Stack direction="column" spacing={2}>
            <HeaderTypography padding="0px" text="Thêm danh sách yêu thích" />
            <TextField label="Tên danh sách yêu thích"></TextField>
            <Button onClick={handleClick} variant="contained">
              THÊM MỚI
            </Button>
          </Stack>
          <SuccessModal
            state={child}
            setState={setChild}
            setStateParent={setState}
            text="Thêm mới thành công"
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
