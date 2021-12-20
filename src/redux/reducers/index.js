import Account from "./Account.js";
import AccountMenu from "./AccountMenu.js";
import AddCollectionDialog from './AddCollectionDialog';
import CollectionDialog from "./CollectionDialog.js";
import LoginModal from "./LoginModal.js";
import MessageModal from "./MessageModal.js";
import MixMatchDialog from './MixMatchDialog';
import OrderStatus from "./OrderStatus.js";
import ProductDialog from "./ProductDialog.js";
import QuickViewDialog from "./QuickViewDialog.js";
import RegisterModal from "./RegisterModal.js";
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
  MixMatchDialog,
  QuickViewDialog,
  MessageModal,
  ProductDialog,
  LoginModal,
  RegisterModal,
  AddCollectionDialog,
});
