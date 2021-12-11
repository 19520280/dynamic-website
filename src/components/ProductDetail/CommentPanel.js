import * as React from "react";
import { Avatar, Box, CardMedia, Rating, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import ImageSP from "../../assets/images/products/monarch-butterfly-t-shirt-white/32ce4a7de31032ca84dcc9a148ce01d2.jpg";

export default function RatingInfoDetail() {
  return (
    <Box sx={{ display: "flex", paddingY: 3, width: 1400 }}>
      <Box width={250}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }}>
            NL
          </Avatar>
          <Box sx={{ marginLeft: 2 }}>
            <Typography fontWeight={500}>Username</Typography>
            <Typography fontSize={14} color="gray">
              Đã tham gia 2 năm
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: 3, marginLeft: 8 }}>
          <Typography>Vòng 1: 90 cm</Typography>
          <Typography>Vòng 2: 60 cm</Typography>
          <Typography>Vòng 3: 90 cm</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box width={450}>
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
          <Box maxWidth={400} sx={{ marginBottom: 2 }}>
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
        <Box width={450}>
          <img src={ImageSP} width={150} height={150} />
          <img src={ImageSP} width={150} height={150} />
          <img src={ImageSP} width={150} height={150} />
        </Box>
      </Box>
    </Box>
  );
}
