import { Avatar, Box, Button, Stack, Typography } from "@mui/material";

const ProfileAvatar = ({ data, setData, isLaptop }) => {
  return (
    <Box width={isLaptop ? "200px" : "100%"}>
      <Stack
        direction={isLaptop ? "column" : "row"}
        spacing={isLaptop ? "28px" : "0px"}
        justifyContent={isLaptop ? "flex-start" : "center"}
        alignItems="center"
      >
        <Avatar
          alt={data.accountName}
          src={data.avatarImage}
          sx={
            isLaptop
              ? { width: "150px", height: "150px" }
              : { width: "110px", height: "110px" }
          }
        />
        <Stack direction="column" spacing={isLaptop ? "28px" : "8px"} alignItems="center">
          <Button variant="outlined">CHỌN ẢNH</Button>
          <Typography
            width={isLaptop ? "200px" : "170px"}
            variant="body1"
            color="secondary"
            component="div"
            align="center"
          >
            Dung lượng file tối đa 1 MB
            <br />
            Định dạng: .JPEG, .PNG
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProfileAvatar;
