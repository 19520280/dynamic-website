import {
  Box,
  Container,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import ConfirmModal from "../Modal/ConfirmModal";
import HeaderTypography from "../Typographys/HeaderTypography";
import ProfileAvatar from "../Avatar/ProfileAvatar";
import ProfileTextFieldGroup from "../TextFields/ProfileTextFieldGroup";
import { SystemColor } from "../../color";
import { useState } from "react";

const Profile = ({ data, setData }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));

  const [modalSaveConfirmState, setModalSaveConfirmState] = useState(false);

  return (
    <Container>
      <HeaderTypography text="Hồ sơ" />
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          border: "1px solid",
          borderColor: SystemColor.gray,
          borderRadius: "4px",
          backgroundColor: "white",
          p: "36px 40px",
          marginTop: 3,
        }}
      >
        <Stack
          width="100%"
          direction={isLaptop ? "row" : "column-reverse"}
          justifyContent="flex-start"
          divider={
            <Divider
              orientation={isLaptop ? "vertical" : "horizontal"}
              flexItem
            />
          }
          alignItems="flex-start"
          spacing={isLaptop ? "40px" : "20px"}
        >
          <ProfileTextFieldGroup
            data={data}
            setData={setData}
            isLaptop={isLaptop}
            onSaveClick={() => setModalSaveConfirmState(true)}
          />
          <ProfileAvatar data={data} setData={setData} isLaptop={isLaptop} />
        </Stack>
      </Box>
      <ConfirmModal
        header="Lưu hồ sơ tài khoản?"
        state={modalSaveConfirmState}
        setState={setModalSaveConfirmState}
        messageText="Lưu thành công"
        typeMessage="success"
      />
    </Container>
  );
};

export default Profile;
