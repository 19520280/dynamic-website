import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { BtnColor } from "../../color";
import moment from "moment";
import { spacing } from "@mui/system";

export const Item = ({ text }) => {
  return (
      <Typography textAlign="center">{text}</Typography>
  );
};

const CountDownGroup = ({ endDate }) => {
  const [state, setState] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  useEffect(() => {
    let timer = null;
    if (endDate) {
      timer = setInterval(() => {
        const then = moment(endDate);
        const now = moment();
        const countdown = then.subtract(now);
        const days = countdown.format("D");
        const hours = countdown.format("HH");
        const minutes = countdown.format("mm");
        const seconds = countdown.format("ss");
        setState({ days, hours, minutes, seconds });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
      timer = null;
    };
  }, [endDate]);
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={1}
    >
      <Item text={state.days} />
      <Item text={state.hours} />
      <Item text={state.minutes} />
      <Item text={state.seconds} />
    </Stack>
  );
};

export default CountDownGroup;
