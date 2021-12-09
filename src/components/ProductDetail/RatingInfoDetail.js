import * as React from "react";
import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function RatingInfoDetail() {
  return (
    <Box sx={{ display: "flex", padding: 3 }}>
      <Box minWidth={250}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }}>
            NL
          </Avatar>
          <Box sx={{ marginLeft: 2 }}>
            <Typography fontWeight = {500}>Username</Typography>
            <Typography  color="gray">
              Đã tham gia 2 năm
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              sx={{ marginRight: 1 }}
            />
            <h4>Tiêu đề đánh giá</h4>
          </Box>
          <Box maxWidth={500} sx={{ marginBottom: 2 }}>
            <Typography sx={{ textAlign: "justify" }}>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </Typography>
          </Box>
          <Box>
            <Typography color="gray">
              Kích cỡ: L - Màu: Đen <br />
              Đánh giá vào 7 tháng trước - Đã dùng 2 tháng
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
