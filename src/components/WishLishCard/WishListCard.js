import * as React from "react";
import "./WishListCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box } from "@mui/system";
const slide2 =
  require("../../assets/images/products/basic-tee/black01.jpg").default;
export default function WishListCard() {
  return (
    <Card sx={{ maxWidth: "330px", minHeight: "340px" }}>
      <CardActionArea>
        <Grid container style={{ padding: "8px 12px 0px 12px" }}>
          <Grid xs={6} paddingRight="8px">
            <CardMedia
              style={{ border: "1px solid #bebebe", borderRadius: "4px" }}
              component="img"
              height="237px"
              width="149px"
              image={slide2}
              alt="image"
            />
          </Grid>
          <Grid xs={6}>
            <CardMedia
              style={{
                border: "1px solid #bebebe",
                borderRadius: "4px",
                marginBottom: "8px",
              }}
              component="img"
              height="114.5px"
              width="149px"
              image={slide2}
              alt="image1"
            />
            <CardMedia
              style={{ border: "1px solid #bebebe", borderRadius: "4px" }}
              component="img"
              height="114.5px"
              width="149px"
              image={slide2}
              alt="image3"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={8} item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 1.5,
                paddingLeft: 2,
              }}
            >
              <CardContent>
                <Typography wrapped gutterBottom component="div">
                  DANH SÁCH YÊU THÍCH
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          <Grid xs={4} item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 1.5,
                paddingLeft: 2,
                paddingRight: 2,
              }}
              style={{ float: "center" }}
              alignContent="center"
            >
              <IconButton aria-label="edit">
                <EditOutlinedIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",

              paddingLeft: 2,
            }}
          >
            <CardContent style={{paddingBottom:"20px"}}>
              <Typography className="sub-content" gutterBottom component="sub">3 sản phẩm</Typography>
            </CardContent>
          </Box>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
