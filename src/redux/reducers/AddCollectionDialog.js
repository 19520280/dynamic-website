import {
  getType,
  hideAddCollectionDialog,
  showAddCollectionDialog,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function AddCollectionDialogReducers(
  state = INIT_STATE.AddCollectionDialog,
  action
) {
  switch (action.type) {
    case getType(showAddCollectionDialog):
      return {
        isShow: true,
      };
    case getType(hideAddCollectionDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
