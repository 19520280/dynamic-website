import * as React from "react";
import {
  Avatar,
  Box,
  CardMedia,
  ImageList,
  Rating,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function CommentPanel({ feedback }) {
  return feedback ? (
    <Box sx={{ display: "flex", paddingY: 3, width: 1150 }}>
      <Box width={250}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }}>
            NL
          </Avatar>
          <Box sx={{ marginLeft: 2 }}>
            <Typography fontWeight={500}>{feedback.author}</Typography>
            <Typography fontSize={14} color="gray">
              Đã tham gia {feedback.joined} năm
            </Typography>
          </Box>
        </Box>
        {feedback.showMeesure ? (
          <Box sx={{ marginTop: 3, marginLeft: 8 }}>
            <Typography>Vòng 1: {feedback.chiSo.v1} cm</Typography>
            <Typography>Vòng 2: {feedback.chiSo.v2} cm</Typography>
            <Typography>Vòng 3: {feedback.chiSo.v3} cm</Typography>
          </Box>
        ) : null}
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box width={450}>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Rating
              name="read-only"
              value={feedback.rate}
              precision={0.5}
              readOnly
              sx={{ marginRight: 1 }}
            />
            <h4>{feedback.tittle}</h4>
          </Box>
          <Box maxWidth={400} sx={{ marginBottom: 2 }}>
            <Typography sx={{ textAlign: "justify" }}>
              {feedback.content}
            </Typography>
          </Box>
          <Box>
            <Typography color="gray">
              Kích cỡ: {feedback.size} - Màu: {feedback.color} <br />
              Đánh giá vào {feedback.time} tháng trước - Đã dùng {feedback.used}{" "}
              ngày
            </Typography>
          </Box>
        </Box>
        <Box width={450}>
          <ImageList cols={3} gap={10} variant="woven">
            {feedback.imgs.map((img) => (
              <img src={img} width={140} height={150} loading="lazy" />
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  ) : null;
}
