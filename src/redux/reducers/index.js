import Account from "./Account.js";
import AccountMenu from "./AccountMenu.js";
import CollectionDialog from "./CollectionDialog.js";
import MixMatchDialog from './MixMatchDialog';
import OrderStatus from "./OrderStatus.js";
import SaleBanner from "./SaleBanner.js";
import ShoppingCartDrawer from "./ShoppingCartDrawer.js";
import SizeGuideDialog from "./SizeGuideDialog.js";
import { combineReducers } from "redux";

export default combineReducers({
  SaleBanner,
  CollectionDialog,
  Account,
  AccountMenu,
  OrderStatus,
  SizeGuideDialog,
  ShoppingCartDrawer,
  MixMatchDialog
});
