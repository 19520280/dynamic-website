import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { SystemColor } from "../../color";
import moment from "moment";

export const Item = ({ time, text }) => {
  return (
    <Box
      sx={{
        width: "calc(100%/4)",
        p:1,
      }}
    >
      <Typography textAlign="center" fontSize="1rem" fontWeight="bold">
        {time}
      </Typography>
      <Typography textAlign="center" fontSize="0.8rem">
        {text}
      </Typography>
    </Box>
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
      justifyContent="start"
      alignItems="stretch"
      spacing={0.5}
    >
      <Item time={state.days} text="Ngày" />
      <Item time={state.hours} text="Giờ" />
      <Item time={state.minutes} text="Phút" />
      <Item time={state.seconds} text="Giây" />
    </Stack>
  );
};

export default CountDownGroup;
