import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";

import HoverMenu from "material-ui-popup-state/HoverMenu";
import PriceTypography from "../Typographys/PriceTypography";
import React from "react";
import ShoppingCartDrawer from "../Drawers/ShoppingCartDrawer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartItem from "../CartProductDetail/ShoppingCartItem";
import { SystemColor } from "../../color";
import { cartProducts } from "../../dataSources/CartProducts";
import { shadowColor } from "./../../color";
import { showShoppingCartDrawer } from "./../../redux/actions/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const getTotal = () => {
  let totalQty = 0;
  let totalPrice = 0;
  cartProducts.forEach((product) => {
    totalQty += product.soLuong;
    totalPrice += product.soLuong * product.gia;
  });
  return { totalQty, totalPrice };
};

/* #region  Desktop */
export const ShoppingCartPopoverDesktop = () => {
  const history = useHistory();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });
  const { totalQty, totalPrice } = getTotal();
  return (
    <React.Fragment>
      <IconButton
        onClick={() => history.push("/Gio-hang")}
        sx={{ cursor: "pointer" }}
        {...bindHover(popupState)}
      >
        <Badge badgeContent={totalQty} color="error">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <HoverMenu
        id="mouse-over-popover"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            boxShadow: shadowColor,
            mt: 1.5,

            padding: "12px 16px 12px 16px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        {...bindMenu(popupState)}
      >
        <Stack
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={1}
        >
          <div>
            <Typography variant="button" fontWeight="bold" color="secondary">
              GIỎ HÀNG
            </Typography>
            <Divider />
          </div>
          {cartProducts.map((product, index) => (
            <MenuItem key={index} onClick={popupState.close} sx={{ p: 0 }}>
              <ShoppingCartItem product={product} />
            </MenuItem>
          ))}
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            spacing={2}
          >
            <Typography fontSize="1.2rem" fontWeight="bold" color="primary">
              Tổng cộng
            </Typography>
            <PriceTypography gia={totalPrice} fontSize="1.2rem" />
          </Stack>
        </Stack>
      </HoverMenu>
    </React.Fragment>
  );
};

/* #endregion */

export const ShoppingCartPopoverMobile = () => {
  const { totalQty, totalPrice } = getTotal();
  const dispatch = useDispatch();
  const openShoppingCartDrawer = React.useCallback(() => {
    dispatch(showShoppingCartDrawer());
  }, [dispatch]);

  return (
    <React.Fragment>
      <IconButton onClick={openShoppingCartDrawer} sx={{ cursor: "pointer" }}>
        <Badge badgeContent={totalQty} color="error">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <ShoppingCartDrawer cartProducts={cartProducts} totalPrice={totalPrice} />
      {/* <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ borderRadius: "4px" }}
      >
        <ListDrawer />
      </Drawer> */}
    </React.Fragment>
  );
};
