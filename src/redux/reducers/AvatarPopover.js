import { getType, showAvatarPopover, hideAvatarPopover } from "../actions";

import { INIT_STATE } from "../../constant";

export default function AvatarPopoverReducers(
  state = INIT_STATE.AvatarPopover,
  action
) {
  switch (action.type) {
    case getType(showAvatarPopover):
      return {
        isShow: true,
      };

    case getType(hideAvatarPopover):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
