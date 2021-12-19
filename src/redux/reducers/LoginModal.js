import { INIT_STATE } from "../../constant";
import { getType, openLoginModal, closeLoginModal } from "../actions";

export default function LoginModalReducers(state = INIT_STATE.LoginModal, action) {
  switch (action.getType) {
    case getType(openLoginModal):
      return {
        isShow: true,
      };

    case getType(closeLoginModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
