import {
  getType,
  hideCollectionDialog,
  showCollectionDialog,
} from "../actions";

import { INIT_STATE } from "../../constant";

export default function CollectionDialogReducers(
  state = INIT_STATE.CollectionDialog,
  action
) {
  switch (action.type) {
    case getType(showCollectionDialog):
      return {
        isShow: true,
      };
    case getType(hideCollectionDialog):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
