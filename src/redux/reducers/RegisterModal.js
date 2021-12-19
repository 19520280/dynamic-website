import { INIT_STATE } from "../../constant";
import { getType, openRegisterModal, closeRegisterModal } from "../actions";

export default function RegisterReducers(state = INIT_STATE.RegisterModal, action) {
  switch (action.getType) {
    case getType(openRegisterModal):
      return {
        isShow: true,
      };

    case getType(closeRegisterModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
