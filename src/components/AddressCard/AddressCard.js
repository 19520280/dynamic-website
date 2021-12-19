import { MoreVert, StarRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { SystemColor } from "../../color";

const info = (title, info, isDefault, isLaptop) => (
  <Stack
    direction="row"
    spacing={isLaptop ? "40px" : "12px"}
    alignItems={title === "Địa chỉ" ? "flex-start" : "center"}
  >
    <Typography
      sx={{ width: isLaptop ? "100px" : "90px" }}
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
    {isLaptop && isDefault ? (
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

const AddressCard = ({ data, setData, address, isLaptop }) => {
  // buttons for laptop size
  const buttons = (
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
        <Button variant="outlined" color="primary" size="large">
          THIẾT LẬP MẶC ĐỊNH
        </Button>
      )}
    </Stack>
  );

  // menu button for mobile and tablet size
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = (
    <Box>
      {address.isDefault ? <StarRounded /> : null}
      <IconButton
        sx={{ ml: "4px", pt: "0px" }}
        id="menu-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Sửa</MenuItem>
        <MenuItem onClick={handleClose}>Xóa</MenuItem>
        <MenuItem onClick={handleClose}>Thiết lập mặc định</MenuItem>
      </Menu>
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems={isLaptop ? "center" : "flex-start"}
      >
        <Stack direction="column" spacing="8px">
          {info("Họ tên", data.realName, address.isDefault, isLaptop)}
          {info("Số điện thoại", data.phoneNumber, false, isLaptop)}
          {info("Địa chỉ", address.name, false, isLaptop)}
        </Stack>
        {isLaptop ? buttons : menu}
      </Stack>
    </Box>
  );
};

export default AddressCard;
