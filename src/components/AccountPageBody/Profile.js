import {
  Box,
  Container,
  Divider,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SystemColor } from "../../color";
import ProfileAvatar from "../Avatar/ProfileAvatar";
import ProfileTextFieldGroup from "../TextFields/ProfileTextFieldGroup";
import HeaderTypography from "../Typographys/HeaderTypography";

const Profile = ({ data, setData }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));

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
          direction={isLaptop ? "row" : "column-reverse"}
          justifyContent="flex-start"
          divider={<Divider orientation={isLaptop ? "vertical" : "horizontal"} flexItem />}
          alignItems="flex-start"
          spacing={isLaptop ? "40px" : "20px"}
        >
          <ProfileTextFieldGroup data={data} setData={setData} isLaptop={isLaptop} />
          <ProfileAvatar data={data} setData={setData} isLaptop={isLaptop}/>
        </Stack>
      </Box>
    </Container>
  );
};

export default Profile;
