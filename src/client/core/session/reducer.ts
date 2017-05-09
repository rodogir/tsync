import { Action } from "redux";

export interface State {
  isLoggedIn: boolean;
}

const initialState: State = {
  isLoggedIn: false,
};

function reducer(state: State = initialState, action: Action) {
  return state;
}

export default reducer;
