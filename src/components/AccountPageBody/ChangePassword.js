import * as React from "react";
import {
  Box,
  Divider,
  Switch,
  Typography,
  TextField,
  Fab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NumericTextField from "./../TextFields/NumericTextField";
const imgMeesure =
  require("../../assets/images/meesure/measurements.png").default;
const ChangePassword = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [height, setHeight] = React.useState(150);
  const [weight, setWeight] = React.useState(45);
  const [round1, setRound1] = React.useState(90);
  const [round2, setRound2] = React.useState(60);
  const [round3, setRound3] = React.useState(90);

  return isMobile ? (
    <Box paddingY={3}>
      <Box>
        <Typography color={"#303537"} fontSize={20} fontWeight={"bold"}>
          Chỉ số cơ thể
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box paddingY={3}>
      <Box height={60}>
        <Typography color={"#303537"} fontSize={28} fontWeight={"bold"}>
          Đổi mật khẩu
        </Typography>
      </Box>
    </Box>
  );
};

export default ChangePassword;
