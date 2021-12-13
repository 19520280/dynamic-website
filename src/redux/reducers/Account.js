import { INIT_STATE } from "../../constant";
import { getType, getAccount } from "../actions";

export default function AccountReducers(state = INIT_STATE.Account, action) {
  switch (action.getType) {
    case getType(getAccount):
      return {
        ...state,
      };

    default:
      return state;
  }
}
