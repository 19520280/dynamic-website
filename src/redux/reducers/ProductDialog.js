import {
  getType,
  hideProductDialog,
  showProductDialog,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function ProductDialogReducers(
  state = INIT_STATE.ProductDialog,
  action
) {
  switch (action.type) {
    case getType(showProductDialog):
      return {
        isShow: true,
      };
    case getType(hideProductDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
