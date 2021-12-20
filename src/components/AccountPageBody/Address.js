import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { SystemColor } from "../../color";
import AddressCard from "../AddressCard/AddressCard";
import ModalWithButton from "../Modal/ModalWithButton";
import HeaderTypography from "../Typographys/HeaderTypography";
import { AuthContext } from "../../context/context";
import ChangeAddressDialog from "../Dialogs/ChangeAddressDialog";
import { showChangeAddressDialog } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ChangeAddressDialogState$ } from "../../redux/selectors";
import AddressModal from "../Modal/AddressModal";

const Address = () => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));

  const { userData } = useContext(AuthContext);

  const [child, setChild] = useState(false);

  const listField = [
    "Số nhà, đường",
    "Thị trấn/Phường",
    "Huyện/Quận",
    "Tỉnh/Thành phố",
  ];

  return (
    <Container>
      <HeaderTypography text="Địa chỉ" />
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <Button
          variant="contained"
          size="large"
          style={{ margin: "0px 20px 20px" }}
          onClick={() => setChild(true)}
        >
          THÊM MỚI
        </Button>
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          border: "1px solid",
          borderColor: SystemColor.gray,
          borderRadius: "4px",
          p: isLaptop ? "36px 40px" : "12px 4px",
          backgroundColor: "white",
        }}
      >
        {/* <AddressCard
          realName={realName}
          phoneNumber={phoneNumber}
          address={address[0]}
        />
        <Divider sx={{ m: "12px 0px" }} />
        <AddressCard
          realName={realName}
          phoneNumber={phoneNumber}
          address={address[1]}
        /> */}
        {userData.address.name.length < 1 ? (
          <Typography fontWeight="bold" color="primary" textAlign="center">
            Bạn chưa thêm địa chỉ
          </Typography>
        ) : (
          userData.address.name.map((item) => (
            <Box key={item.key}>
              <AddressCard address={item} isLaptop={isLaptop}></AddressCard>
              {item !==
              userData.address.name[userData.address.name.length - 1] ? (
                <Divider sx={{ m: "12px 0px" }} />
              ) : null}
            </Box>
          ))
        )}
      </Box>
      <AddressModal state={child} setState={setChild} />
    </Container>
  );
};

export default Address;
