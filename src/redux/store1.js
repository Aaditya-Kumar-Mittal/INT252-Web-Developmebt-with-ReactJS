import { createStore } from "redux";

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
      break;
    case 'DECREMENT':
      return { count: state.count - 1 }
      break;
    case 'RESET':
      return { count: 0 }
      break;
    default:
      return state;
  }
}

const store1 = createStore(counterReducer);

export default store1;