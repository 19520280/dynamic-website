import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { SystemColor } from "../../../color";

const Profile = ({ avatarImage }) => {
  return (
    <Card
      sx={{
        width: "100%",
        border: "1px solid",
        borderRadius: "4px",
        borderColor: SystemColor.Gray,
      }}
    >
      <Grid sx={{ p: "40px 36px" }} container direction="row" spacing="40px">
        <Grid item xs={8} container direction="column" spacing="20px">
          <Grid
            /*Họ tên*/
            item
            direction="row"
            container
            alignItems="center"
            spacing="20px"
          >
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="secondary"
                component="div"
              >
                Họ tên
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="HoTen"
                placeholder="Họ tên"
                required
                variant="outlined"
                size="medium"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            /*Ngày sinh*/
            item
            direction="row"
            container
            alignItems="center"
            spacing="20px"
          >
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="secondary"
                component="div"
              >
                Ngày sinh
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="NgaySinh"
                placeholder="Ngày sinh"
                required
                variant="outlined"
                size="medium"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            /*Giới tính*/
            sx={{ mt: "-30px", mb: "-10px" }}
            item
            direction="row"
            container
            alignItems="center"
            spacing="20px"
          >
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="secondary"
                component="div"
              >
                Giới tính
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <FormControl
                fullWidth
                required
                variant="outlined"
                component="radioField"
              >
                <RadioGroup row aria-label="gender">
                  <FormControlLabel
                    sx={{ mr: "40px" }}
                    color="primary"
                    value="Nam"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body1"
                        color="primary"
                        component="div"
                      >
                        Nam
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    sx={{ mr: "40px" }}
                    color="primary"
                    value="Nữ"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body1"
                        color="primary"
                        component="div"
                      >
                        Nữ
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    sx={{ mr: "40px" }}
                    color="primary"
                    value="Khác"
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        variant="body1"
                        color="primary"
                        component="div"
                      >
                        Khác
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            /*Email*/
            item
            direction="row"
            container
            alignItems="center"
            spacing="20px"
          >
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="secondary"
                component="div"
              >
                Email
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="Email"
                placeholder="Email"
                required
                variant="outlined"
                size="medium"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            /*Số điện thoại*/
            item
            direction="row"
            container
            alignItems="center"
            spacing="20px" /* nhớ sửa spacing */
          >
            <Grid item xs={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="secondary"
                component="div"
              >
                Số điện thoại
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                id="SoDienThoai"
                placeholder="Số điện thoại"
                required
                variant="outlined"
                size="medium"
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            /*Phong cách*/
            sx={{ mt: "-20px", mb: "-10px" }}
            item
            direction="column"
            container
            alignItems="flex-start"
            spacing="20px" /* nhớ sửa spacing */
          >
            <Grid item>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="secondary"
                component="div"
              >
                Phong cách
              </Typography>
            </Grid>
            <Grid item>
              <FormControl
                fullWidth
                required
                variant="outlined"
                component="radioField"
              >
                <FormGroup aria-label="style" row>
                  <FormControlLabel
                    value="Nam"
                    control={<Checkbox size="small" />}
                    label="Đơn giản"
                  />
                  <FormControlLabel
                    value="HangNgay"
                    control={<Checkbox size="small" />}
                    label="Hằng ngày"
                  />
                  <FormControlLabel
                    value="DuongPho"
                    control={<Checkbox size="small" />}
                    label="Đường phố"
                  />
                  <FormControlLabel
                    value="DiHocDiLam"
                    control={<Checkbox size="small" />}
                    label="Đi học/đi làm"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/* <Divider variant="middle" flexItem orientation="vertical"></Divider>   */}

        <Grid
          item
          xs={4}
          container
          direction="column"
          spacing="28px"
          alignItems="center"
        >
          <Grid item>
            <Avatar
              alt="avatarImage"
              src={avatarImage}
              sx={{ width: "130px", height: " 130px" }}
            ></Avatar>
          </Grid>
          <Grid item>
            <Button variant="outlined">CHỌN ẢNH</Button>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="secondary" component="div" align="center" >
              Dụng lượng file tối đa 1 MB
              <br />
              Định dạng:.JPEG, .PNG
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Profile;
