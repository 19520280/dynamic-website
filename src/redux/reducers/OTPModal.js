import { INIT_STATE } from "../../constant";
import { getType, openOTPModal, closeOTPModal } from "../actions";

export default function OTPModalReducers(state = INIT_STATE.OTPModal, action) {
  switch (action.getType) {
    case getType(openOTPModal):
      return {
        isShow: true,
      };

    case getType(closeOTPModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
