import "./TrackingDetail.css";

import { Stack, Typography } from "@mui/material";
import { Step, StepLabel, Stepper } from "@material-ui/core";

import CircleIcon from "@mui/icons-material/Circle";
import React from "react";
import { SystemColor } from "../../color";

const TrackingDetail = ({ timelines }) => {
  const TrackingInfo = ({ timeline, index }) => (
    <div className="trackingRow">
      {index < timelines.length - 1 ? (
        <div className="trackingRowConnector" />
      ) : null}
      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={1}
        sx={{ paddingBottom: 1 }}
      >
        <CircleIcon
          fontSize="smaller"
          sx={{
            zIndex: 1,
            color: index === 0 ? SystemColor.error : SystemColor.gray,
          }}
        />
        <Typography color={index === 0 ? SystemColor.error : SystemColor.gray}>
          {timeline.date} {timeline.status}
        </Typography>
      </Stack>
    </div>
  );
  return timelines.map((timeline, index) => (
    <TrackingInfo timeline={timeline} index={index} />
  ));
};

export default TrackingDetail;
