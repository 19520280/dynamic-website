import * as React from "react";
import "./WishListCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import { CardActionArea, Grid, Stack, Tooltip, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";
import { SystemColor } from "../../color";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ModalWithButton from "../Modal/ModalWithButton";
import MessageModal from "../Modal/MessageModal";
import ConfirmModal from "../Modal/ConfirmModal";

const slide2 =
  require("../../assets/images/products/basic-tee/black01.jpg").default;
const useStyle = makeStyles({
  root: {
    "& .icon-button": {
      padding: "2px",
      "&:hover": {},
    },
  },
  header: {
    margin: "0",
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: "1.1rem",
    /* line-height: 38px; */
    color: "#5e6669",

    paddingTop: "8px",
  },
  boxContent: {
    padding: "0px",
  },
  card: {
    maxWidth: "330px",
    minHeight: "340px",
    border: "1px solid #bebebe",
    borderRadius: "4px",
    padding: "0px",
  },
  image: {
    border: "1px solid #bebebe",
    borderRadius: "4px",
  },
  boxicon: {
    float: "center",
    padding: "16px 24px 0px 12px",
  },

  subcontent: {
    margin: "0",
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "1.1 rem",
    /* line-height: 38px; */
    color: "#5e6669",
    padding: "0px",
  },
});

export default function WishListCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [stateEdit, setStateEdit] = React.useState(false);
  const [stateDelete, setStateDelete] = React.useState(false);

  const open = Boolean(anchorEl);
  const history = useHistory();

  const classes = useStyle();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickEdit = () => {
    setStateEdit(true);
  };

  const handleClickDelete = () => {
    setStateDelete(true);
  };

  const listField = ["T??n sanh s??ch y??u th??ch"];

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            history.push("/Ca-nhan/Danh-sach-quan-tam/Chi-tiet");
          }}
        >
          <Grid
            container
            justifyContent="center"
            style={{ padding: "8px 12px 8px 12px" }}
          >
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
        </CardActionArea>

        <Grid container>
          <Grid xs={8} xl={8} item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 1,
                paddingLeft: 1.5,
              }}
            >
              <CardContent style={{ padding: "0px" }}>
                <Typography
                  className={classes.header}
                  wrapped
                  gutterBottom
                  component="div"
                  fontSize="0.8rem"
                >
                  DANH S??CH Y??U TH??CH
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          <Grid xs={4} xl={4} item>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 1.5,
                paddingRight: 1,
              }}
              className={classes.boxicon}
              alignContent="center"
            >
              <IconButton
                onClick={handleClickEdit}
                aria-label="edit"
                className="icon-button"
              >
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={handleClickDelete} aria-label="delete" className="icon-button">
                <DeleteOutlineOutlinedIcon fontSize="small" />
              </IconButton>

              <IconButton
                aria-label="share"
                className="icon-button"
                onMouseEnter={handleClick}
                // onClick={handlePopoverOpen}
                onClick={handleClick}
                // onMouseLeave={handleClose}
              >
                <ShareIcon fontSize="small" />
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
            <CardContent style={{ padding: "0px 0px 15px 0px" }}>
              <Typography
                className={classes.subcontent}
                gutterBottom
                component="sub"
              >
                3 s???n ph???m
              </Typography>
            </CardContent>
          </Box>
        </Grid>

        <Popover
          id="mouse-over-popover"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          PaperProps={{
            style: {
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: 0,
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              mt: "10px",
              "&::before": {
                boxShadow: 3,
                backgroundColor: "#ECECEC",
                content: '""',
                display: "block",
                position: "absolute",
                width: 12,
                height: 12,
                top: -6,
                transform: "rotate(45deg)",
                left: "calc(50% - 6px )",
              },
            }}
          />
          <Typography
            sx={{ p: 0.5, backgroundColor: "#ECECEC", borderRadius: "4px" }}
          >
            <IconButton
              aria-label="twitter"
              className="icon-button"
              size="small"
            >
              <TwitterIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="facebook"
              className="icon-button"
              size="small"
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>

            <IconButton
              aria-label="instagram"
              className="icon-button"
              size="small"
            >
              <InstagramIcon fontSize="inherit" />
            </IconButton>
          </Typography>
        </Popover>
      </Card>
      <ModalWithButton
        listField={listField}
        header="Ch???nh s???a danh s??ch y??u th??ch"
        btnText="C???P NH???T"
        state={stateEdit}
        setState={setStateEdit}
        listField={listField}
        header="Ch???nh s???a danh s??ch y??u th??ch"
        btnText="C???P NH???T"
        messageText="C???p nh???t th??nh c??ng"
        typeMessage="success"
      />

      <ConfirmModal
        header="X??a danh s??ch y??u th??ch?"
        state={stateDelete}
        setState={setStateDelete}
        messageText="X??a th??nh c??ng"
        typeMessage="success"
      />

    </div>
  );
}
