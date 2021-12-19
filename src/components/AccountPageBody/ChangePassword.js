import * as React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import TextFieldWithTitlePassword from "../TextFields/TextFiledWithTittlePassword";
const imgMeesure =
  require("../../assets/images/meesure/measurements.png").default;
const ChangePassword = ({ data, setData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const [openerr, setOpenerr] = React.useState(false);

  const handleCloseerr = () => {
    setOpenerr(false);
  };
  const [OldPassword, setOldPassword] = React.useState();

  const handleChangeOldPassword = (value) => {
    setOldPassword(value);
  };
  const [NewPassword, setNewPassword] = React.useState();

  const handleChangeNewPW = (value) => {
    setNewPassword(value);
  };
  const [RePassword, setRePassword] = React.useState();

  const handleChangeRePW = (value) => {
    setRePassword(value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box paddingY={3}>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="success" width="100%">
          Đổi mật khẩu thành công
        </Alert>
      </Snackbar>
      <Snackbar open={openerr} autoHideDuration={3000} onClose={handleCloseerr}>
        <Alert severity="error" width="100%">
          Mật khẩu không khớp
        </Alert>
      </Snackbar>
      <Box height={60}>
        <Typography
          color={"#303537"}
          fontSize={isMobile ? 20 : 28}
          fontWeight={"bold"}
        >
          Đổi mật khẩu
        </Typography>
      </Box>
      <Box
        width="100%"
        display={isMobile ? null : "flex"}
        border="1px solid #BEBEBE"
        borderRadius={1}
        paddingX={4}
        paddingY={3.6}
      >
        <Box width={isMobile ? "100" : "60%"}>
          <Stack direction="column" spacing="20px">
            <TextFieldWithTitlePassword
              title="Mật khẩu cũ"
              placeholder="Nhập mật khẩu cũ"
              value={OldPassword}
              onChange={handleChangeOldPassword}
            />
            <TextFieldWithTitlePassword
              title="Mật khẩu mới"
              placeholder="Nhập mật khẩu cũ"
              value={NewPassword}
              onChange={handleChangeNewPW}
            />
            <TextFieldWithTitlePassword
              title="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              value={RePassword}
              onChange={handleChangeRePW}
            />
            <Button
              sx={{ p: "8 32px", width: "fit-content", height: "fit-content" }}
              variant="contained"
              size="large"
              onClick={() => {
                if (
                  RePassword === NewPassword &&
                  RePassword != null &&
                  OldPassword
                )
                  setOpen(true);
                else setOpenerr(true);
              }}
            >
              Đổi mật khẩu
            </Button>
          </Stack>
        </Box>
        <Box marginTop={1} marginLeft={2}>
          <Button variant="text">Quên mật khẩu</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
