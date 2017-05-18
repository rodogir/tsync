import { assoc } from "ramda";
import { Action } from "redux";
import { SESSION_ESTABLISHED, SESSION_TIMED_OUT } from "./constants";

export const UNDEFINED: "undefined" = "undefined";

export interface State {
  isLoggedIn: boolean | typeof UNDEFINED;
}

const initialState: State = {
  isLoggedIn: UNDEFINED,
};

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case SESSION_ESTABLISHED:
      return assoc("isLoggedIn", true, state);
      case SESSION_TIMED_OUT:
      return assoc("isLoggedIn", false, state);
    default:
      return state;
  }
}

export default reducer;
