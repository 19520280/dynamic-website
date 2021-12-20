import { INIT_STATE } from "../../constant";
import { getType, getAccount, login, logout } from "../actions";

export default function AccountReducers(state = INIT_STATE.Account, action) {
  switch (action.getType) {
    case getType(getAccount):
      return {
        ...state,
      };

    case getType(login):
      return {
        ...state,
        isLoggedin: true,
      };

    case getType(logout):
      return {
        ...state,
        isLoggedin: false,
      };

    default:
      return state;
  }
}
