import { getType, hideQuickViewDialog, showQuickViewDialog } from "../actions";

import { INIT_STATE } from "../../constant";

export default function QuickViewDialogReducers(
  state = INIT_STATE.QuickViewDialog,
  action
) {
  switch (action.type) {
    case getType(showQuickViewDialog):
      return {
        isShow: true,
      };
    case getType(hideQuickViewDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
