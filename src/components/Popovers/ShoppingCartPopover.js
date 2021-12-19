import {
  Badge,
  Box,
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

import CartProductDetail from "../CartProductDetail/CartProductDetail";
import CloseIcon from "@mui/icons-material/Close";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import PriceTypography from "../Typographys/PriceTypography";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { SystemColor } from "../../color";
import { cartProducts } from "../../dataSources/CartProducts";
import { useHistory } from "react-router-dom";

const ShoppingCartItem = ({ product }) => (
  <div>
    <Stack
      direction="row"
      alignContent="strecth"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%" }}
      spacing={3}
    >
      <CartProductDetail sanPham={product} readOnly />
      <PriceTypography
        gia={product.soLuong * product.gia}
        justifyContent="flex-end"
      />
    </Stack>
    <Divider />
  </div>
);

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
        {...bindMenu(popupState)}
        sx={{
          "& .css-1q9g37b-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            {
              padding: "12px 16px 12px 16px",
              borderRadius: "4px",
              border: "1px solid",
              borderColor: SystemColor.gray,
            },
        }}
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
  const history = useHistory();
  const { totalQty, totalPrice } = getTotal();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const ListDrawer = () => (
    <Box sx={{ width: "100%", p: 2 }} role="presentation">
      <Stack
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={1}
      >
        <div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="button" fontWeight="bold" color="secondary">
              GIỎ HÀNG
            </Typography>
            <IconButton
              onClick={() => setOpenDrawer(false)}
              sx={{ cursor: "pointer" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider />
        </div>
        {cartProducts.map((product, index) => (
          <ShoppingCartItem product={product} />
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
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{ cursor: "pointer" }}
      >
        <Badge badgeContent={totalQty} color="error">
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
      </IconButton>
      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{ borderRadius: "4px" }}
      >
        <ListDrawer />
      </Drawer>
    </React.Fragment>
  );
};
