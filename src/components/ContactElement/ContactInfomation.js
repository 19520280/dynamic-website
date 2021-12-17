import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { problems } from "./../../dataSources/Problems";

const ItemInfo = ({ lable, item }) => (
  <Stack direction="row" spacing={1}>
    <Typography color="secondary">{lable}</Typography>
    {item}
  </Stack>
);
const ContactInfomation = () => {
  const [problem, setproblem] = React.useState("");
  const handleChangeProblem = (event) => {
    setproblem(event.target.value);
  };
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Vấn đề</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={problem}
          onChange={handleChangeProblem}
          label="Vấn đề"
        >
          {problems.map((problem, index) => (
            <MenuItem key={index} value={problem}>
              {problem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Email"
        inputProps={{ inputMode: "email" }}
        sx={{ borderRadius: "4px" }}
      />
      <TextField
        label="Số điện thoại"
        required
        inputProps={{ inputMode: "tel" }}
      />
      <TextField required id="outlined-required" label="Tiêu đề" />
      <TextField
        id="outlined-multiline-flexible"
        label="Nội dung"
        multiline
        maxRows={4}
      />
      <Button size="large" variant="contained">
        Gửi yêu cầu
      </Button>
    </Stack>
  );
};

export default ContactInfomation;
