import { getType, showSaleBanner } from '../actions';

import { INIT_STATE } from '../../constant';

export default function SaleBannerReducers(state = INIT_STATE.SaleBanner, action) {
  switch (action.type) {
    case getType(showSaleBanner):
      return {
        isShow: action,
      };
    default:
      return state;
  }
}