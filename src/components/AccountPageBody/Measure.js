import * as React from "react";
import { Box, Typography } from "@mui/material";
const Measure = () => {
  return (
    <Box paddingY={3}>
      <Box height={72}>
        <h2>Chỉ số cơ thể</h2>
      </Box>
      <Box width="100%" border={1} paddingX={4} paddingY={3.6}>
        <Box>
          <Typography>
            Thêm
            <span style={{ fontWeight: "bold" }}>{" chỉ số cơ thể "}</span>
            có lợi ích gì?
          </Typography>
          <Box paddingX={6}>
            <ul>
              <li>Tự động áp kích thước của sản phẩm phù hợp với bạn</li>
              <li>
                Dễ dàng tìm đọc các bài review của NLMT-ers khác có cùng số đo
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Measure;
