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
import { useState } from "react";
import { SystemColor } from "../../color";
import AddressCard from "../AddressCard/AddressCard";
import ModalWithButton from "../Modal/ModalWithButton";
import HeaderTypography from "../Typographys/HeaderTypography";

const Address = ({ data, setData }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));

  const [modalAddAddressState, setModalAddAddressState] = useState(false);

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
          onClick={() => setModalAddAddressState(true)}
          style={{ margin: "0px 20px 20px" }}
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
        {data.address.name.length < 1 ? (
          <Typography fontWeight="bold" color="primary" textAlign="center">
            Bạn chưa thêm địa chỉ
          </Typography>
        ) : (
          data.address.name.map((item) => (
            <Box key={item.key}>
              <AddressCard
                data={data}
                setData={setData}
                address={item}
                isLaptop={isLaptop}
                onEdit={() => setModalAddAddressState(true)}
              ></AddressCard>
              {item !== data.address.name[data.address.name.length - 1] ? (
                <Divider sx={{ m: "12px 0px" }} />
              ) : null}
            </Box>
          ))
        )}
      </Box>
      <ModalWithButton
        state={modalAddAddressState}
        setState={setModalAddAddressState}
        listField={listField}
        header="Thêm địa chỉ mới"
        btnText="Thêm mới"
        messageText="Thêm mới thành công"
        typeMessage="success"
      />
    </Container>
  );
};

export default Address;
