import { INIT_STATE } from "../../constant";
import { getType, expandMenu, collapseMenu } from "../actions";

export default function AccountMenuReducers(
  state = INIT_STATE.AccountMenu,
  action
) {
  switch (action.type) {
    case getType(expandMenu):
      return {
        isExpanded: true,
      };

    case getType(collapseMenu):
      return {
        isExpanded: false,
      };

    default:
      return state;
  }
}
