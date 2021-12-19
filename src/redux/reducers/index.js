import Account from "./Account.js";
import AccountMenu from "./AccountMenu.js";
import CollectionDialog from "./CollectionDialog.js";
import OrderStatus from "./OrderStatus.js";
import SizeGuideDialog from "./SizeGuideDialog.js";
import SaleBanner from "./SaleBanner.js";
import ShoppingCartDrawer from "./ShoppingCartDrawer.js";
import MessageModal from "./MessageModal.js";
import ProductDialog from "./ProductDialog.js";

import { combineReducers } from "redux";

export default combineReducers({
  SaleBanner,
  CollectionDialog,
  Account,
  AccountMenu,
  OrderStatus,
  SizeGuideDialog,
  ShoppingCartDrawer,
  MessageModal,
  ProductDialog,
  
});
