import { Stack, TextField, Typography } from "@mui/material";

const TextFieldWithTitle = ({ title, value, placeholder, size, onChange }) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        sx={{ width: "40%" }}
        fontWeight="bold"
        color="secondary"
        textAlign="left"
      >
        {title}
      </Typography>
      <TextField
        fullWidth
        id={placeholder}
        value={value}
        placeholder={placeholder}
        required
        variant="outlined"
        size={size ? size : "medium"}
        onChange={(e) => onChange(e.target.value)}
      />
    </Stack>
  );
};

export default TextFieldWithTitle;
