import { Action } from "redux";

export const STATE_IDENTIFIER = "session";

interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false,
};

function reducer(state: State = initialState, action: Action) {
  return state;
}

export default reducer;
