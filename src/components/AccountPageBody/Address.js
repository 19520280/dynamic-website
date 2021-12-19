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
import { SystemColor } from "../../color";
import AddressCard from "../AddressCard/AddressCard";
import HeaderTypography from "../Typographys/HeaderTypography";

const Address = ({ data, setData }) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("lg"));
  
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
          p: isLaptop ? "36px 40px" : "12px 4px",
          backgroundColor: "white"
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
        {data.address.length < 1 ? (
          <Typography fontWeight="bold" color="primary" textAlign="center">
            Bạn chưa thêm địa chỉ
          </Typography>
        ) : (
          data.address.map((item) => (
            <Box
            key={item.name.home}
            >
              <AddressCard
                data={data}
                setData={setData}
                address={item}
                isLaptop={isLaptop}
              ></AddressCard>
              {item !== data.address[data.address.length - 1] ? (
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
