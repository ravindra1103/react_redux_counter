import { INCREMENT, DECREMENT } from '../actions/Actions';
export const initialState = {
  counter: 0
};

export default function counterApp(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return({
        ...state,
        counter: ++state.counter
      });
      break;
    case DECREMENT:
      return({
        ...state,
        counter: --state.counter
      });
      break;
    default:
      return state;
  }
}
