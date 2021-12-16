import React from "react";
import "./style.css";
import * as actions from "../../redux/actions/index";
import { SaleBannerState$ } from "../../redux/selectors/index";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    image: {
      maxWidth: "100%",
      height: "auto",
      // width: "auto\9";
    },
  });
  
export default function CarouselProduct({image}) {
  const dispatch = useDispatch();
  const classes = useStyle();
  const history = useHistory();
  const SaleBanner = useSelector(SaleBannerState$);
  const setSaleBanner = React.useCallback(() => {
    dispatch(actions.showSaleBanner(false));
  }, [dispatch]);
  return (
    <Box
      xs={12}
      xl={9.5}
      style={{
        display: SaleBanner.payload ? "none" : "block",
        height: "auto",
      }}
    >
      <Carousel autoPlay swipe animation="slide">
        <div className="container">
          <img src={image} alt="Avatar" className={classes.image} />
          <div className="middle">
            <Button
              variant="contained"
              className="text"
              onClick={() => {
                history.push("/");
              }}
            >
              XEM THÊM
            </Button>
          </div>
        </div>
        <div className="container">
          <img src={image} alt="Avatar" className={classes.image} />
          <div className="middle">
            <Button
              variant="contained"
              className="text"
              onClick={() => {
                history.push("/");
              }}
            >
              XEM THÊM
            </Button>
          </div>
        </div>
        <div className="container">
          <img src={image} alt="Avatar" className={classes.image} />
          <div className="middle">
            <Button
              variant="contained"
              className="text"
              onClick={() => {
                history.push("/");
              }}
            >
              XEM THÊM
            </Button>
          </div>
        </div>
      </Carousel>
    </Box>
  );
}
