import { assoc } from "ramda";
import { Action } from "redux";
import { SESSION_ESTABLISHED } from "./constants";

export interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false,
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case SESSION_ESTABLISHED:
      return assoc("isLoggedIn", true, state);
    default:
      return state;
  }
}

export default reducer;
