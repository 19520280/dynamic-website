import {
  Box,
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
import { SystemColor } from "../../color";
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
    <Box
      sx={{
        p: 2,
        backgroundColor: "white",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: SystemColor.gray,
        width: "100%",
        minWidth: "min-content",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          "& .MuiTextField-root": { width: "100%" },
          width: "100%",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Vấn đề *</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={problem}
            onChange={handleChangeProblem}
            label="Vấn đề *"
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
          required
          inputProps={{ inputMode: "email" }}
          sx={{ borderRadius: "4px" }}
        />
        <TextField label="Số điện thoại" inputProps={{ inputMode: "tel" }} />
        <TextField required id="outlined-required" label="Tiêu đề" />
        <TextField
          id="outlined-multiline-flexible"
          label="Nội dung"
          multiline
          required
          rows={5}
        />
        <Typography color="secondary" fontStyle="italic">
              Bộ phận
            </Typography>
        <Button size="large" variant="contained">
          Gửi yêu cầu
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactInfomation;
