import Account from "./Account.js";
import AccountMenu from "./AccountMenu.js";
import AddCollectionDialog from "./AddCollectionDialog";
import AvatarPopover from "./AvatarPopover.js";
import BuyMoreDialog from"./BuyMoreDialog";
import ChangeAddressDialog from './ChangeAddressDialog';
import CollectionDialog from "./CollectionDialog.js";
import LoginModal from "./LoginModal.js";
import MessageModal from "./MessageModal.js";
import MixMatchDialog from "./MixMatchDialog";
import OTPModal from "./OTPModal.js";
import OrderStatus from "./OrderStatus.js";
import ProductDialog from "./ProductDialog.js";
import QuickViewDialog from "./QuickViewDialog.js";
import RegisterModal from "./RegisterModal.js";
import SaleBanner from "./SaleBanner.js";
import ShoppingCartDrawer from "./ShoppingCartDrawer.js";
import SizeGuideDialog from "./SizeGuideDialog.js";
import WelcomeModal from "./WelcomeModal.js";
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
  AvatarPopover,
  ChangeAddressDialog,
  OTPModal,
  WelcomeModal,
  BuyMoreDialog,
});
