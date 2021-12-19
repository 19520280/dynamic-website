import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

const ProfileAvatar = ({ data, setData }) => {
  return (
    <Box>
      <Stack direction="column" spacing="28px" alignItems="center">
        <Avatar
          alt={data.accountName}
          src={data.avatarImage}
          sx={{ width: "150px", height: " 150px" }}
        />
        <Button variant="outlined">CHỌN ẢNH</Button>
        <Typography
          variant="body1"
          color="secondary"
          component="div"
          align="center"
        >
          Dụng lượng file tối đa 1 MB
          <br />
          Định dạng: .JPEG, .PNG
        </Typography>
      </Stack>
    </Box>
  );
};

export default ProfileAvatar;
