import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { SystemColor } from "../../color";
import AddressCard from "../AddressCard/AddressCard";
import HeaderTypography from "../Typographys/HeaderTypography";

const Address = ({ realName, phoneNumber, address }) => {
  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <HeaderTypography text="Địa chỉ" />
        <Button variant="contained" size="large">
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
          p: "36px 40px",
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
        {address.length < 1 ? (
          <Typography fontWeight="bold" color="primary" textAlign="center">
            Bạn chưa thêm địa chỉ
          </Typography>
        ) : (
          address.map((item) => (
            <Box>
              <AddressCard
                realName={realName}
                phoneNumber={phoneNumber}
                address={item}
              ></AddressCard>
              {item !== address[address.length - 1] ? (
                <Divider sx={{ m: "12px 0px" }} />
              ) : null}
            </Box>
          ))
        )}
      </Box>
    </Container>
  );
};

export default Address;
