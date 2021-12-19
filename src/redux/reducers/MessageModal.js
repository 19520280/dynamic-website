import { getType, setMessageModal } from '../actions';

import { INIT_STATE } from '../../constant';

export default function MessageModalReducers(state = INIT_STATE.SaleBanner, action) {
  switch (action.type) {
    case getType(setMessageModal):
      return {
        isShow: action,
      };
    default:
      return state;
  }
}