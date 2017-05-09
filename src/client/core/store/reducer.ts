import { Action, combineReducers } from "redux";
import sessionReducer, { STATE_IDENTIFIER as SESSION_STATE_IDENTIFIER } from "../session/reducer";

interface State {
  [reducerNs: string]: object;
}

const reducer = combineReducers({
  [SESSION_STATE_IDENTIFIER]: sessionReducer,
});

export default reducer;
