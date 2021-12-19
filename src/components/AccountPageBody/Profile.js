import { Box, Container, Divider, Stack } from "@mui/material";
import { SystemColor } from "../../color";
import ProfileAvatar from "../Avatar/ProfileAvatar";
import ProfileTextFieldGroup from "../TextFields/ProfileTextFieldGroup";
import HeaderTypography from "../Typographys/HeaderTypography";

const Profile = ({ data, setData }) => {
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
          p: "36px 40px",
        }}
      >
        <Stack
          width="100%"
          direction="row"
          justifyContent="flex-start"
          divider={<Divider orientation="vertical" flexItem />}
          alignItems="flex-start"
          spacing="40px"
        >
          <ProfileTextFieldGroup data={data} setData={setData} />
          <ProfileAvatar data={data} setData={setData} />
        </Stack>
      </Box>
    </Container>
  );
};

export default Profile;
