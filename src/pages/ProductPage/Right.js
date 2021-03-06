import "./style.css";

import * as actions from "../../redux/actions/index";

import { BgColor, SystemColor } from "../../color";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  Pagination,
  Stack,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import Carousel from "react-material-ui-carousel";
import HeaderTypography from "./../../components/Typographys/HeaderTypography";
import ProducCardGrid from "../../components/GridProductCard/ProducCardGrid";
import ProductCard from "../../components/ProductCard/ProductCard";
import React from "react";
import RecentSeen from "./../../components/GridProductCard/RecentSeen";
import { SaleBannerState$ } from "../../redux/selectors/index";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@material-ui/core";
import TabMenu from "../../components/Tab/TabMenu";
import CarouselProduct from "../../components/Carousel/CarouselProduct";
import ProductBanner from "../../components/Banner/ProductBanner";

const image = require("../../assets/images/banners/SaleBanner.png").default;

const Right = () => {
  const SaleBanner = useSelector(SaleBannerState$);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const lengthGrid = 8;

  const menuItems = [
    { value: 2, text: "PHỔ BIẾN" },
    { value: 3, text: "BÁN CHẠY" },
    { value: 4, text: "MỚI NHẤT" },
    { value: 5, text: "GIÁ CAO" },
    { value: 6, text: "GIÁ THẤP" },
  ];

  return (
    <Container style={{ maxWidth: "100%", maxHeight: "100%" }}>
      <HeaderTypography
        text={
          SaleBanner.payload == true
            ? "Kết quả tìm kiếm"
            : pathnames[0] == "Ao"
            ? "Áo"
            : pathnames[0] == "Quan"
            ? "Quần"
            : pathnames[0] == "Phu-kien"
            ? "Phụ kiện"
            : ""
        }
      />
      {/* <CarouselProduct image={image}/> */}
      <ProductBanner />
      <TabMenu menuItems={menuItems} />
      <section
        id="hot-products"
        className="containermain.fullwidthbanner-container"
      >
        <ProducCardGrid
          phanLoai={SaleBanner.payload == true ? null : pathnames[0]}
          lengthGrid={lengthGrid}
        />
      </section>
      <Stack alignItems="center">
        <Pagination
          count={11}
          defaultPage={6}
          color="primary"
          style={{ marginTop: 40, marginBottom: 40 }}
        />
      </Stack>

      <section
        id="recent-seen"
        className="containermain.fullwidthbanner-container"
      >
        <RecentSeen />
      </section>
    </Container>
  );
};

export default Right;
