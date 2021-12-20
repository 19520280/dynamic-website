import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import TextFieldWithTitle from "./TextFieldWithTitle";

const ProfileTextFieldGroup = ({ data, setData, isLaptop, onSaveClick }) => {
  const onRealNameChange = (value) => {
    setData({ ...data, realName: value });
  };

  const onDoBChange = (value) => {
    setData({ ...data, DoB: value });
  };

  const onGenderChange = (value) => {
    setData({ ...data, gender: value });
  };

  const onEmailChange = (value) => {
    setData({ ...data, Email: value });
  };

  const onPhoneNumberChange = (value) => {
    setData({ ...data, phoneNumber: value });
  };

  const onStyleChange = (value) => {
    setData({ ...data, style: value });
  };

  return (
    <Box width="100%">
      <Stack direction="column" spacing="20px">
        <TextFieldWithTitle
          title="Họ tên"
          placeholder="Họ tên"
          value={data.realName}
          size={isLaptop ? "medium" : "small"}
          onChange={onRealNameChange}
        />
        <TextFieldWithTitle
          title="Ngày sinh"
          placeholder="Ngày sinh"
          value={data.DoB}
          size={isLaptop ? "medium" : "small"}
          onChange={onDoBChange}
        />
        <Stack direction="row" alignItems="center">
          <Typography
            sx={{ width: "40%" }}
            fontWeight="bold"
            color="secondary"
            textAlign="left"
          >
            Giới tính
          </Typography>
          <FormControl fullWidth sx={{ pl: " 12px" }}>
            <RadioGroup
              row
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            >
              <FormControlLabel value="Nam" control={<Radio />} label="Nam" />
              <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
              <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
            </RadioGroup>
          </FormControl>
        </Stack>
        <TextFieldWithTitle
          title="Email"
          placeholder="Email"
          value={data.email}
          size={isLaptop ? "medium" : "small"}
          onChange={onEmailChange}
        />
        <TextFieldWithTitle
          title="Số điện thoại"
          placeholder="Số điện thoại"
          value={data.phoneNumber}
          size={isLaptop ? "medium" : "small"}
          onChange={onPhoneNumberChange}
        />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing="12px"
        >
          <Typography
            sx={{ width: "40%" }}
            fontWeight="bold"
            color="secondary"
            textAlign="left"
          >
            Phong cách
          </Typography>
          <FormControl fullWidth>
            <FormGroup row>
              <FormGroup>
                {/*Don gian*/}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.style.basic.isTrue}
                      onChange={(e) =>
                        setData({
                          ...data,
                          style: {
                            ...data.style,
                            basic: {
                              ...data.style.basic,
                              isTrue: !data.style.basic.isTrue,
                            },
                          },
                        })
                      }
                    />
                  }
                  label={data.style.basic.name}
                />
                {/*Hang ngay*/}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.style.daily.isTrue}
                      onChange={(e) =>
                        setData({
                          ...data,
                          style: {
                            ...data.style,
                            daily: {
                              ...data.style.daily,
                              isTrue: !data.style.daily.isTrue,
                            },
                          },
                        })
                      }
                    />
                  }
                  label={data.style.daily.name}
                />
              </FormGroup>
              <FormGroup>
                {/*Duong pho*/}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.style.street.isTrue}
                      onChange={(e) =>
                        setData({
                          ...data,
                          style: {
                            ...data.style,
                            street: {
                              ...data.style.street,
                              isTrue: !data.style.street.isTrue,
                            },
                          },
                        })
                      }
                    />
                  }
                  label={data.style.street.name}
                />
                {/*Di lam/Di hoc*/}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.style.formal.isTrue}
                      onChange={(e) =>
                        setData({
                          ...data,
                          style: {
                            ...data.style,
                            formal: {
                              ...data.style.formal,
                              isTrue: !data.style.formal.isTrue,
                            },
                          },
                        })
                      }
                    />
                  }
                  label={data.style.formal.name}
                />
              </FormGroup>
            </FormGroup>
          </FormControl>
        </Stack>
        <Box sx={{pl: "29%"}}>
          <Button
            sx={{
              p: "8px 40px",
              width: "fit-content",
              height: "fit-content",
            }}
            variant="contained"
            size="large"
            onClick={onSaveClick}
          >
            LƯU
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileTextFieldGroup;
