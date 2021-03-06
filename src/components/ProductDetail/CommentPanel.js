import "react-medium-image-zoom/dist/styles.css";

import * as React from "react";

import {
  Avatar,
  Box,
  CardMedia,
  ImageList,
  Rating,
  Typography,
} from "@mui/material";

import Zoom from "react-medium-image-zoom";
import { deepOrange } from "@mui/material/colors";

export default function CommentPanel({ feedback, isMobile }) {
  return feedback ? (
    isMobile ? (
      <Box sx={{ marginY: 3, width: "100%" }}>
        <Box width={"100%"} display="flex">
          <Box sx={{ display: "flex", alignItems: "center", width: "60%" }}>
            <Avatar sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}>
              A
            </Avatar>
            <Box sx={{ marginLeft: 1 }}>
              <Typography fontWeight={500}>{feedback.author}</Typography>
              <Typography fontSize={14} color="gray">
                Đã tham gia {feedback.joined} năm
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
            <Rating
              name="read-only"
              value={feedback.rate}
              precision={0.5}
              readOnly
              sx={{ marginRight: 1 }}
              size="small"
            />
          </Box>
        </Box>
        <Box width={"100%"}>
          <Box marginY={2}>
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
          <Box width={"100%"} marginY={1}>
            <ImageList cols={3} gap={10} variant="woven">
              {feedback.imgs.map((img) => (
                <Zoom>
                  <img src={img} width={140} height={150} loading="lazy" />
                </Zoom>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    ) : (
      <Box sx={{ display: "flex", paddingY: 3, width: "100%" }}>
        <Box width={"20%"}>
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
        <Box display="flex" width="80%">
          <Box width={"100%"}>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
            >
              <Rating
                name="read-only"
                value={feedback.rate}
                precision={0.5}
                readOnly
                sx={{ marginRight: 1 }}
              />
              <h4>{feedback.tittle}</h4>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography sx={{ textAlign: "justify" }}>
                {feedback.content}
              </Typography>
            </Box>
            <Box>
              <Typography color="gray">
                Kích cỡ: {feedback.size} - Màu: {feedback.color} <br />
                Đánh giá vào {feedback.time} tháng trước - Đã dùng{" "}
                {feedback.used} ngày
              </Typography>
            </Box>
          </Box>
          <Box width={"100%"}>
            <ImageList cols={3} gap={10} variant="woven">
              {feedback.imgs.map((img) => (
                <Zoom>
                  <img src={img} width={"100%"} height={150} loading="lazy" />
                </Zoom>
              ))}
            </ImageList>
          </Box>
        </Box>
      </Box>
    )
  ) : null;
}
