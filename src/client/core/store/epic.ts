import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import sessionEpic from "../session/epic";

const rootEpic = combineEpics(
  sessionEpic,
);

export default rootEpic;
