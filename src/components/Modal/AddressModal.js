import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { ChangeAddressDialogState$ } from "../../redux/selectors";
import MemberInfo from "./../PaymentBody/UserInfo/MemberInfo";
import ModalWithButton from "../Modal/ModalWithButton";
import React, { useContext, useState } from "react";
import { hideChangeAddressDialog } from "../../redux/actions";
import TextFieldWithTitle from "../TextFields/TextFieldWithTitle";
import { AuthContext } from "../../context/context";
import { Box } from "@mui/system";

const AddressModal = ({ address, state, setState }) => {
  const handleClose = () => {
    setState(false);
    setData({
      key: 0,
      home: "",
      town: "",
      district: "",
      province: "",
    });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { userData, setUserData } = useContext(AuthContext);

  const [data, setData] = useState(
    address
      ? address
      : {
          key: "",
          home: "",
          town: "",
          district: "",
          province: "",
        }
  );

  const onHomeChange = (value) => {
    setData({ ...data, home: value });
  };

  const onTownChange = (value) => {
    setData({ ...data, town: value });
  };

  const onDistrictChange = (value) => {
    setData({ ...data, district: value });
  };

  const onProvinceChange = (value) => {
    setData({ ...data, province: value });
  };

  const handleSubmit = () => {
    const newAddress = data;
    const listAddress = userData.address.name;
    if (data.key && data.key !== "") {
      listAddress[data.key] = newAddress;
    } else {
      console.log(listAddress);
      newAddress.key = listAddress.length;
      listAddress.push(newAddress);
      setData({
        key: "",
        home: "",
        town: "",
        district: "",
        province: "",
      });
    }
    console.log(listAddress);
    setUserData({ ...userData, address: { ...userData, name: listAddress } });
    console.log(userData.address.name);
  };

  return (
    <>
      <ModalWithButton
        open={state}
        handleClose={handleClose}
        header={address ? "Chỉnh sửa địa chỉ" : "Thêm mới địa chỉ"}
        body={
          <>
            <Divider variant="light" />
            <Box sx={{ m: "8px" }} width={isMobile ? "500" : "500px"}>
              <Stack direction="column" spacing={2}>
                <TextFieldWithTitle
                  title="Số nhà, đường"
                  placeholder="Số nhà, đường"
                  value={data.home}
                  size={isMobile ? "small" : "medium"}
                  onChange={onHomeChange}
                />
                <TextFieldWithTitle
                  title="Phường/Thị trấn"
                  placeholder="Phường/Thị trấn"
                  value={data.town}
                  size={isMobile ? "small" : "medium"}
                  onChange={onTownChange}
                />
                <TextFieldWithTitle
                  title="Quận/Huyện"
                  placeholder="Quận/Huyện"
                  value={data.district}
                  size={isMobile ? "small" : "medium"}
                  onChange={onDistrictChange}
                />
                <TextFieldWithTitle
                  title="Thành phố/Tỉnh"
                  placeholder="Thành phố/Tỉnh"
                  value={data.province}
                  size={isMobile ? "small" : "medium"}
                  onChange={onProvinceChange}
                />
              </Stack>
            </Box>
            <Divider variant="light" />
          </>
        }
        setState={setState}
        action={handleSubmit}
        btnText="Đồng ý"
        messageText={address ? "Chỉnh sửa thành công" : "Thêm mới thành công"}
        severity="success"
      />
    </>
  );
};

export default AddressModal;
