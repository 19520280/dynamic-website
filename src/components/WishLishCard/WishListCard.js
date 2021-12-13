import * as React from "react";
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
import { makeStyles } from "@material-ui/core";

const slide2 =
  require("../../assets/images/products/basic-tee/black01.jpg").default;

const useStyle = makeStyles({
  header: {
    margin: "0",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "18px",
    /* line-height: 38px; */
    color: "#5e6669",

    paddingTop: "8px",
  },
  boxContent: {
    padding: "0px",
  },
  iconbutton: {
    padding: "2px",
  },
  card: {
    maxWidth: "330px",
    minHeight: "340px",
    border: "1px solid #bebebe",
    borderRadius: "4px",
  },
  image: {
    border: "1px solid #bebebe",
    borderRadius: "4px",
  },
  boxicon: {
    float: "center",
    padding: "16px 8px",
  },
  subcontent: {
    margin: "0",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "18px",
    /* line-height: 38px; */
    color: "#5e6669",

    padding: "0px",
  }
});

export default function WishListCard() {
  const classes = useStyle();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Grid container style={{ padding: "8px 12px 0px 12px" }}>
          <Grid xs={6} paddingRight="8px">
            <CardMedia
              className={classes.image}
              component="img"
              height="237px"
              width="149px"
              image={slide2}
              alt="image"
            />
          </Grid>
          <Grid xs={6}>
            <CardMedia
              className={classes.image}
              style={{
                marginBottom: "8px",
              }}
              component="img"
              height="114.5px"
              width="149px"
              image={slide2}
              alt="image1"
            />
            <CardMedia
              className={classes.image}
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
              <CardContent style={{ padding: "0px" }}>
                <Typography
                  className={classes.header}
                  wrapped
                  gutterBottom
                  component="div"
                >
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
              className={classes.boxicon}
              alignContent="center"
            >
              <IconButton aria-label="edit" className={classes.iconbutton}>
                <EditOutlinedIcon />
              </IconButton>
              <IconButton aria-label="delete" className={classes.iconbutton}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
              <IconButton aria-label="share" className={classes.iconbutton}>
                <ShareIcon />
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
            <CardContent style={{ padding: "0px 0px 20px 0px" }}>
              <Typography
                className={classes.subcontent}
                gutterBottom
                component="sub"
              >
                3 sản phẩm
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
