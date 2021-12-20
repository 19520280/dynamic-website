import {
  getType,
  hideChangeAddressDialog,
  showChangeAddressDialog,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function ChangeAddressDialogReducers(
  state = INIT_STATE.ChangeAddressDialog,
  action
) {
  switch (action.type) {
    case getType(showChangeAddressDialog):
      return {
        isShow: true,
      };
    case getType(hideChangeAddressDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
