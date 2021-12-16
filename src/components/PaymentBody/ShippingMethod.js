import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

import React from "react";
import { SystemColor } from "../../color";
import numberWithCommas from "./../../utils/numberWithCommas";

const ShippingMethodItem = ({ name, price, startTime, endTime }) => (
  <Stack direction="column" alignItems="flex-start">
    <Typography display="inline">
      {name}
      <Typography display="inline" fontWeight="bold">{` ${numberWithCommas(
        price
      )}`}</Typography>
    </Typography>
    <Typography color="secondary" fontSize="0.7rem">
      {`Giao hàng vào ngày ${startTime} - ${endTime}`}
    </Typography>
  </Stack>
);
const ShippingMethod = () => {
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
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Typography variant="button" fontWeight="bold" color="secondary">
          PHƯƠNG THỨC GIAO HÀNG
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            defaultValue="saving"
            name="radio-buttons-group"
          >
            <FormControlLabel
              sx={{ marginBottom: "8px" }}
              value="saving"
              control={<Radio />}
              label={
                <ShippingMethodItem
                  name="Giao hàng tiết kiệm"
                  price={30000}
                  startTime="12/12/2021"
                  endTime="15/12/2021"
                />
              }
            />
            <FormControlLabel
              value="fast"
              control={<Radio />}
              label={
                <ShippingMethodItem
                  name="Giao hàng hỏa tốc"
                  price={50000}
                  startTime="11/12/2021"
                  endTime="12/12/2021"
                />
              }
            />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
};
export default ShippingMethod;
