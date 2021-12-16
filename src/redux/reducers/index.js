import CollectionDialog from "./CollectionDialog.js";
import SaleBanner from "./SaleBanner.js";
import Account from "./Account.js";
import AccountMenu from "./AccountMenu.js";
import OrderStatus from "./OrderStatus.js";

import { combineReducers } from "redux";

export default combineReducers({
  SaleBanner,
  CollectionDialog,
  Account,
  AccountMenu,
  OrderStatus,
});
