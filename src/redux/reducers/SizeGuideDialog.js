import { getType, hideSizeGuideDialog, showSizeGuideDialog } from "../actions";

import { INIT_STATE } from "../../constant";

export default function SizeGuideDialogReducers(
  state = INIT_STATE.SizeGuideDialog,
  action
) {
  switch (action.type) {
    case getType(showSizeGuideDialog):
      return {
        isShow: true,
      };
    case getType(hideSizeGuideDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
