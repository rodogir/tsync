import { Action, combineReducers } from "redux";
import sessionReducer, { State as SessionState } from "../session/reducer";

export interface State {
  session: SessionState;
  [reducerNs: string]: object;
}

const reducer = combineReducers({
  session: sessionReducer,
});

export default reducer;
