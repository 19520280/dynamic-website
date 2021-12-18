import { getType, setOrderStatus } from '../actions';

import { INIT_STATE } from '../../constant';

export default function OrderStatusReducers(state = INIT_STATE.OrderStatus, action) {
  switch (action.type) {
    case getType(setOrderStatus):
      return {
        data: action,
      };
    default:
      return state;
  }
}