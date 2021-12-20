import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { MoreVert, StarRounded } from "@mui/icons-material";

import ConfirmModal from "../Modal/ConfirmModal";
import { SystemColor } from "../../color";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/context";
import AddressModal from "../Modal/AddressModal";

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

const AddressCard = ({ address, isLaptop }) => {
  const [modalDeleteConfirmState, setModalDeleteConfirmState] = useState(false);

  const { userData, setUserData } = useContext(AuthContext);

  const handleSetAddressDefault = () => {
    setUserData({
      ...userData,
      address: { ...userData.address, isDefault: address.key },
    });
    if (!isLaptop) {
      handleClose();
    }
  };

  const [child, setChild] = useState(false);

  const handleDeleteClick = () => {
    setModalDeleteConfirmState(true);
    if (!isLaptop) {
      handleClose();
    }
  };

  const handleEditClick = () => {
    setChild(true);
    if (!isLaptop) {
      handleClose();
    }
  };

  const handleDeleteConfirm = () => {
    const newAddress = userData.address.name;
    newAddress.splice(address.key, 1);
    newAddress.forEach((item, index) => {
      item.key = index;
    });
    setUserData({ ...userData, address: { ...userData.address, name: newAddress } });
  };

  //region buttons for laptop size
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
          onClick={() => handleEditClick()}
        >
          SỬA
        </Button>
        {userData.address.isDefault === address.key ? null : (
          <Button
            sx={{ height: "fit-content" }}
            variant="text"
            color="primary"
            size="large"
            onClick={() => handleDeleteClick()}
          >
            XÓA
          </Button>
        )}
      </Stack>
      {userData.address.isDefault === address.key ? null : (
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => handleSetAddressDefault()}
        >
          THIẾT LẬP MẶC ĐỊNH
        </Button>
      )}
    </Stack>
  );
  //#endregion

  //#region menu button for mobile and tablet size
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
      {userData.address.isDefault === address.key ? <StarRounded /> : null}
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
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={() => handleEditClick()}>Sửa</MenuItem>
        {userData.address.isDefault === address.key ? null : (
          <MenuItem onClick={() => handleDeleteClick()}>Xóa</MenuItem>
        )}
        {userData.address.isDefault === address.key ? null : (
          <MenuItem onClick={() => handleSetAddressDefault()}>
            Thiết lập mặc định
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
  //#endregion

  //return
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
          {info(
            "Họ tên",
            userData.realName,
            userData.address.isDefault === address.key,
            isLaptop
          )}
          {info("Số điện thoại", userData.phoneNumber, false, isLaptop)}
          {info("Địa chỉ", address, false, isLaptop)}
        </Stack>
        {isLaptop ? buttons : menu}
      </Stack>
      <ConfirmModal
        header="Xóa địa chỉ được chọn?"
        state={modalDeleteConfirmState}
        setState={setModalDeleteConfirmState}
        action={handleDeleteConfirm}
        messageText="Xóa thành công"
        typeMessage="success"
      />
      <AddressModal address={address} state={child} setState={setChild} />
    </Box>
  );
};

export default AddressCard;
