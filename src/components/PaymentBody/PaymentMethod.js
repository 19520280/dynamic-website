import {
  Badge,
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

import { Collapse } from "@material-ui/core";
import React from "react";
import { SystemColor } from "../../color";
import { paymentMethods } from "./../../dataSources/PaymentMethod";

const PaymentMethodItem = ({ payment, checked }) => {
  const [brand, setBrand] = React.useState(0);
  return (
    <>
      <Stack direction="row" alignItems="center">
        {payment.img ? (
          <img src={payment.img} style={{ width: "12%", height: "10%" }} />
        ) : null}
        <Typography sx={{ margin: "0px 12px" }}>{payment.name}</Typography>

        {payment.tag ? (
          <Box
            sx={{
              color: "white",
              padding: "0px 8px",
              borderRadius: "2px",
              backgroundColor: SystemColor.error,
            }}
          >
            <Typography textAlign="center" fontSize="small">
              Giảm 10k
            </Typography>
          </Box>
        ) : null}
      </Stack>
      {payment.imgList.length > 0 ? (
        <Collapse in={checked}>
          {" "}
          <Box
            sx={{
              p: 2,
              marginTop: 1,
              backgroundColor: "white",
              borderRadius: "4px",
              border: "1px solid",
              borderColor: SystemColor.gray,
            }}
          >
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 2, sm: 6, md: 8 }}
              sx={{ marginTop: "8px" }}
            >
              {payment.imgList.map((image, index) => (
                <Grid item xs={1} sm={2} md={2} key={index}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100%",
                        border: brand === index ? "1px solid" : "1px dashed",
                        borderColor:
                          brand === index ? SystemColor.success : "rgba(0, 0, 0, 0.2)",
                        borderRadius: "4px",
                        padding: "8px",
                      }}
                      onClick={() => setBrand(index)}
                    >
                      <img
                        src={image}
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Collapse>
      ) : null}
    </>
  );
};
const PaymentMethod = () => {
  const [checked, setChecked] = React.useState(0);
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: "white",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: SystemColor.gray,
        width: "100%",
      }}
    >
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Typography variant="button" fontWeight="bold" color="secondary">
          PHƯƠNG THỨC THANH TOÁN
        </Typography>
        <FormControl>
          <RadioGroup
            aria-label="gender"
            value={checked}
            onChange={(event) => setChecked(event.target.value)}
            name="radio-buttons-group"
          >
            {paymentMethods.map((payment, index) => (
              <FormControlLabel
                sx={{ marginBottom: "8px", alignItems: "flex-start" }}
                value={index}
                control={<Radio />}
                label={
                  <PaymentMethodItem payment={payment} checked={checked == 3} />
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
};
export default PaymentMethod;
