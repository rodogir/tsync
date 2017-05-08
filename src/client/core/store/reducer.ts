import { Action } from "redux";

interface State {
  [reducerNs: string]: object;
}

function reducer(state: State = {}, action: Action): State {
  return state;
}

export default reducer;
