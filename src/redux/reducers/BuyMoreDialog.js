import {
  getType,
  hideBuyMoreDialog,
  showBuyMoreDialog,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function BuyMoreDialogReducers(
  state = INIT_STATE.BuyMoreDialog,
  action
) {
  switch (action.type) {
    case getType(showBuyMoreDialog):
      return {
        isShow: true,
      };
    case getType(hideBuyMoreDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
