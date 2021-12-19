import {
  getType,
  hideMixMatchDialog,
  showMixMatchDialog,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function MixMatchDialogReducers(
  state = INIT_STATE.MixMatchDialog,
  action
) {
  switch (action.type) {
    case getType(showMixMatchDialog):
      return {
        isShow: true,
      };
    case getType(hideMixMatchDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
