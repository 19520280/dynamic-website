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
  Container,
} from "@mui/material";
import TextFieldWithTitlePassword from "../TextFields/TextFiledWithTittlePassword";
import HeaderTypography from "../Typographys/HeaderTypography";
import MessageModal from "../Modal/MessageModal";
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
    <Container>
      <MessageModal
        text={"Đổi mật khẩu thành công"}
        severity={"success"}
        closeAfterSecond={true}
        state={open}
        setState={setOpen}
      />
      <MessageModal
        text={"Mật khẩu không khớp"}
        severity={"error"}
        closeAfterSecond={true}
        state={openerr}
        setState={setOpenerr}
      />
      <HeaderTypography text="Đổi mật khẩu" />
      <Box
        width="100%"
        display={isMobile ? null : "flex"}
        border="1px solid #BEBEBE"
        borderRadius={1}
        paddingX={4}
        paddingY={3.6}
        marginTop={3}
        backgroundColor="white"
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
          </Stack>
          <Button
            sx={{
              p: "8 32px",
              width: "fit-content",
              height: "fit-content",
              marginTop: 3,
              marginLeft: "33%",
            }}
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
        </Box>
        <Box marginTop={1} marginLeft={isMobile ? "20%" : 2}>
          <Button variant="text">Quên mật khẩu?</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangePassword;
