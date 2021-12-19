import { Box, Button, Stack, Typography } from "@mui/material";
import { SystemColor } from "../../color";

const info = (title, info, isDefault) => (
  <Stack
    direction="row"
    spacing="40px"
    alignItems={title === "Địa chỉ" ? "flex-start" : "center"}
  >
    <Typography
      sx={{ width: "100px" }}
      fontWeight="bold"
      color="secondary"
      textAlign="right"
    >
      {title}
    </Typography>
    {title === "Địa chỉ" ? (
      <Typography fontWeight="normal" color="primary">
        {info.home}
        <br />
        {info.town}
        <br />
        {info.district}
        <br />
        {info.province}
      </Typography>
    ) : (
      <Typography
        fontWeight={title === "Họ tên" ? "bold" : "normal"}
        color="primary"
      >
        {info}
      </Typography>
    )}
    {isDefault ? (
      <Box
        sx={{
          color: "white",
          backgroundColor: SystemColor.main,
          p: "4px 18px",
        }}
      >
        <Typography textAlign="center">MẶC ĐỊNH</Typography>
      </Box>
    ) : null}
  </Stack>
);

const AddressCard = ({ realName, phoneNumber, address }) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="column" spacing="8px">
          {info("Họ tên", realName, address.isDefault)}
          {info("Số điện thoại", phoneNumber, false)}
          {info("Địa chỉ", address.name, false)}
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          spacing="12px"
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing="28px"
          >
            <Button
              sx={{ fontWeight: "bold", height: "fit-content" }}
              variant="text"
              color="primary"
              size="large"
            >
              SỬA
            </Button>
            {address.isDefault ? null : (
              <Button
                sx={{ height: "fit-content" }}
                variant="text"
                color="primary"
                size="large"
              >
                XÓA
              </Button>
            )}
          </Stack>
          {address.isDefault ? null : (
            <Button
              variant="outlined"
              color="primary"
              size="large"
            >
              THIẾT LẬP MẶC ĐỊNH
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AddressCard;
