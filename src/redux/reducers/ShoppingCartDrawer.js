import {
  getType,
  hideShoppingCartDrawer,
  showShoppingCartDrawer,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function ShoppingCartDrawerReducers(
  state = INIT_STATE.ShoppingCartDrawer,
  action
) {
  switch (action.type) {
    case getType(showShoppingCartDrawer):
      return {
        isShow: true,
      };
    case getType(hideShoppingCartDrawer):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
