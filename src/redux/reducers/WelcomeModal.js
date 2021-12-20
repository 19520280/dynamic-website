import { INIT_STATE } from "../../constant";
import { getType, openWelcomeModal, closeWelcomeModal } from "../actions";

export default function WelcomeModalReducers(state = INIT_STATE.WelcomeModal, action) {
  switch (action.getType) {
    case getType(openWelcomeModal):
      return {
        isShow: true,
      };

    case getType(closeWelcomeModal):
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
