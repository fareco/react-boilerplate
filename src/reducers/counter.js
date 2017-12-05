import { INCREMENT, DECREMENT, RESET } from '../actions';


export default function reducer(state = { count: 10 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}
