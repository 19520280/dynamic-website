import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";

import CartProductDetail from "../CartProductDetail/CartProductDetail";
import PriceTypography from "./../Typographys/PriceTypography";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SystemColor } from "../../color";
import { cartProducts } from "../../dataSources/CartProducts";
import numberWithCommas from "./../../utils/numberWithCommas";
import { useHistory } from "react-router-dom";

const ShoppingCartItem = ({ product }) => (
  <Stack
    direction="row"
    alignContent="strecth"
    alignItems="center"
    sx={{ width: "100%" }}
    spacing={3}
  >
    <CartProductDetail sanPham={product} readOnly />
    <PriceTypography
      gia={product.soLuong * product.gia}
      justifyContent="flex-end"
    />
  </Stack>
);

const ShoppingCartPopover = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <IconButton
        onClick={() => history.push("/Gio-hang")}
        sx={{ cursor: "pointer" }}
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Badge badgeContent={3} color="error">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handlePopoverClose}
      >
        <Box
          onMouseEnter={handlePopoverOpen}
          sx={{
            p: 2,
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid",
            borderColor: SystemColor.gray,
            width: "100%",
            minWidth: "min-content",
          }}
        >
          <Stack
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={1}
          >
            <Typography variant="button" fontWeight="bold" color="secondary">
              GIỎ HÀNG
            </Typography>
            {cartProducts.map((product, index) => (
              <div key={index}>
                <ShoppingCartItem product={product} />
                <Divider />
              </div>
            ))}
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Typography fontSize="1rem" fontWeight="bold" color="primary">
                Tổng cộng
              </Typography>
              <PriceTypography gia={500000} />
            </Stack>
          </Stack>
        </Box>
      </Popover>
    </div>
  );
};

export default ShoppingCartPopover;
