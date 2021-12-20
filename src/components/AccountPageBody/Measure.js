import * as React from "react";
import {
  Box,
  Divider,
  Switch,
  Typography,
  TextField,
  Fab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderTypography from "../Typographys/HeaderTypography";

const imgMeesure =
  require("../../assets/images/meesure/measurements.png").default;
const Measure = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [height, setHeight] = React.useState(150);
  const [weight, setWeight] = React.useState(45);
  const [round1, setRound1] = React.useState(90);
  const [round2, setRound2] = React.useState(60);
  const [round3, setRound3] = React.useState(90);

  return isMobile ? (
    <Box paddingY={3}>
      <Box>
        <Typography color={"#303537"} fontSize={20} fontWeight={"bold"}>
          Chỉ số cơ thể
        </Typography>
      </Box>
      <Box width="100%" border={1} paddingX={2} paddingY={3.6}>
        <Box marginBottom={4}>
          <Typography>
            Thêm
            <span style={{ fontWeight: "bold" }}>{" Chỉ số cơ thể "}</span>
            có lợi ích gì?
          </Typography>
          <Box paddingX={2} marginY={2}>
            <ul>
              <li>Tự động áp kích thước của sản phẩm phù hợp với bạn</li>
              <li>
                Dễ dàng tìm đọc các bài review của NLMT-ers khác có cùng số đo
              </li>
            </ul>
          </Box>
          <Box display={"flex"} alignContent={"center"}>
            <Box marginTop={0.5}>
              <Typography fontWeight={"bold"} color={"#5E6669"}>
                Cho phép hiển thị số đo ở đánh giá
              </Typography>
            </Box>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>
        <Divider orientation="horizontal" />
        <Box marginTop={4}>
          <Box width={"100%"}>
            <Box
              display={"flex"}
              alignContent={"center"}
              height={40}
              marginY={1}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Chiều cao
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              height={40}
              marginY={1}
              alignContent={"center"}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Cân nặng
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              height={40}
              marginY={1}
              alignContent={"center"}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Vòng 1
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={round1}
                  onChange={(e) => setRound1(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignContent={"center"}
              height={40}
              marginY={1}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Vòng 2
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={round2}
                  onChange={(e) => setRound2(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignContent={"center"}
              height={40}
              marginY={1}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Vòng 3
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={round3}
                  onChange={(e) => setRound3(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box marginX={2}>
            <img src={imgMeesure} width={"100%"} height={500} />
          </Box>
          <Box>
            <Box sx={{ textAlign: "justify" }}>
              <Box display={"flex"}>
                <Box width={60}>
                  <Fab size="small" color="primary">
                    1
                  </Fab>
                </Box>
                <Box width={"100%"}>
                  <Typography
                    fontWeight={"bold"}
                    color={"#5E6669"}
                    style={{ marginBottom: 10 }}
                  >
                    Vòng 1
                  </Typography>
                  <span>Đo 1 vòng đi qua đỉnh ngực ra phía sau lưng</span>
                </Box>
              </Box>
              <Box display={"flex"} marginY={2}>
                <Box width={60}>
                  <Fab size="small" color="primary">
                    2
                  </Fab>
                </Box>
                <Box width={"100%"}>
                  <Typography
                    fontWeight={"bold"}
                    color={"#5E6669"}
                    style={{ marginBottom: 10 }}
                  >
                    Vòng 2
                  </Typography>
                  <span>
                    Đo 1 vòng quanh eo (nơi nhỏ nhất, thường trên rốn 3 - 5cm)
                  </span>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box width={60}>
                  <Fab size="small" color="primary">
                    3
                  </Fab>
                </Box>
                <Box width={"100%"}>
                  <Typography
                    fontWeight={"bold"}
                    color={"#5E6669"}
                    style={{ marginBottom: 10 }}
                  >
                    Vòng 3
                  </Typography>
                  <span>Đo 1 vòng quanh hông (nơi nở nhất)</span>
                </Box>
              </Box>
            </Box>
            <Box marginTop={5}>
              <Typography fontWeight={"bold"} color={"#5E6669"}>
                Lưu ý:
              </Typography>
              <Box paddingLeft={6} marginY={2} sx={{ textAlign: "justify" }}>
                <ul>
                  <li>
                    Tất cả các vòng đều đo sát cơ thể (nên mặc quần, áo mỏng)
                  </li>
                  <li>Các vòng đo phải song song với mặt đất</li>
                  <li>
                    Khi đo tại các vị trí đã chọn, các bạn nên hơi xoay và di
                    chuyển thước dây lên xuống để xác định nơi đo là nhỏ nhất/nở
                    nhất như yêu cầu
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box paddingY={3}>
      <HeaderTypography text="Chỉ số cơ thể" padding={"12px 0px"} />
      <Box
        width="100%"
        border="1px solid #BEBEBE"
        borderRadius={1}
        paddingX={4}
        paddingY={3.6}
      >
        <Box marginBottom={4}>
          <Typography>
            Thêm
            <span style={{ fontWeight: "bold" }}>{" Chỉ số cơ thể "}</span>
            có lợi ích gì?
          </Typography>
          <Box paddingX={6} marginY={2}>
            <ul>
              <li>Tự động áp kích thước của sản phẩm phù hợp với bạn</li>
              <li>
                Dễ dàng tìm đọc các bài review của NLMT-ers khác có cùng số đo
              </li>
            </ul>
          </Box>
          <Box display={"flex"} alignContent={"center"}>
            <Box marginTop={0.5}>
              <Typography fontWeight={"bold"} color={"#5E6669"}>
                Cho phép hiển thị số đo ở đánh giá
              </Typography>
            </Box>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Box>
        </Box>
        <Divider orientation="horizontal" />
        <Box marginTop={4} display={"flex"}>
          <Box width={215}>
            <Box
              display={"flex"}
              alignContent={"center"}
              height={48}
              marginY={2}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Chiều cao
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              height={48}
              marginY={2}
              alignContent={"center"}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Cân nặng
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              height={48}
              marginY={2}
              alignContent={"center"}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Vòng 1
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={round1}
                  onChange={(e) => setRound1(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignContent={"center"}
              height={48}
              marginY={2}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Vòng 2
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={round2}
                  onChange={(e) => setRound2(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignContent={"center"}
              height={48}
              marginY={2}
            >
              <Box paddingY={1}>
                <Typography width={100} fontWeight={"bold"} color={"#5E6669"}>
                  Vòng 3
                </Typography>
              </Box>
              <Box display={"flex"} alignContent={"center"}>
                <TextField
                  id="outlined-size-small-textfield"
                  size="small"
                  type="number"
                  value={round3}
                  onChange={(e) => setRound3(e.target.value)}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", fontSize: "0.9rem" },
                  }}
                  sx={{
                    borderRadius: "0",
                    width: 60,
                  }}
                />
                <Typography width={36} marginLeft={1.6} paddingY={1}>
                  cm
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box marginX={2}>
            <img src={imgMeesure} width={170} />
          </Box>
          <Box>
            <Box sx={{ textAlign: "justify" }}>
              <Box display={"flex"}>
                <Box width={60}>
                  <Fab size="small" color="primary">
                    1
                  </Fab>
                </Box>
                <Box width={"100%"}>
                  <Typography
                    fontWeight={"bold"}
                    color={"#5E6669"}
                    style={{ marginBottom: 10 }}
                  >
                    Vòng 1
                  </Typography>
                  <span>Đo 1 vòng đi qua đỉnh ngực ra phía sau lưng</span>
                </Box>
              </Box>
              <Box display={"flex"} marginY={2}>
                <Box width={60}>
                  <Fab size="small" color="primary">
                    2
                  </Fab>
                </Box>
                <Box width={"100%"}>
                  <Typography
                    fontWeight={"bold"}
                    color={"#5E6669"}
                    style={{ marginBottom: 10 }}
                  >
                    Vòng 2
                  </Typography>
                  <span>
                    Đo 1 vòng quanh eo (nơi nhỏ nhất, thường trên rốn 3 - 5cm)
                  </span>
                </Box>
              </Box>
              <Box display={"flex"}>
                <Box width={60}>
                  <Fab size="small" color="primary">
                    3
                  </Fab>
                </Box>
                <Box width={"100%"}>
                  <Typography
                    fontWeight={"bold"}
                    color={"#5E6669"}
                    style={{ marginBottom: 10 }}
                  >
                    Vòng 3
                  </Typography>
                  <span>Đo 1 vòng quanh hông (nơi nở nhất)</span>
                </Box>
              </Box>
            </Box>
            <Box marginTop={5}>
              <Typography fontWeight={"bold"} color={"#5E6669"}>
                Lưu ý:
              </Typography>
              <Box paddingLeft={6} marginY={2} sx={{ textAlign: "justify" }}>
                <ul>
                  <li>
                    Tất cả các vòng đều đo sát cơ thể (nên mặc quần, áo mỏng)
                  </li>
                  <li>Các vòng đo phải song song với mặt đất</li>
                  <li>
                    Khi đo tại các vị trí đã chọn, các bạn nên hơi xoay và di
                    chuyển thước dây lên xuống để xác định nơi đo là nhỏ nhất/nở
                    nhất như yêu cầu
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Measure;
