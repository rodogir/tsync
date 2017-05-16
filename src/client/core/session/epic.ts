import { Action } from "redux";
import { ActionsObservable, combineEpics } from "redux-observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { sessionEstablished, SessionEstablished, UserAuthenticated } from "./actions";
import { RESUMPTION_REQUESTED, USER_AUTHENTICATED } from "./constants";

function establishedEpic(action$: ActionsObservable<Action>) {
  return action$
    .ofType(USER_AUTHENTICATED)
    .map((action: UserAuthenticated) => {
      localStorage.setItem("token", action.data.token);
      return sessionEstablished();
    });
}

function resumeEpic(action$: ActionsObservable<Action>) {
  return action$
    .ofType(RESUMPTION_REQUESTED)
    .map(() => {
      const token = localStorage.getItem("token");
      if (token) {
        return sessionEstablished();
      }
      return null;
    })
    .filter((a: SessionEstablished | null) => a !== null);
}

export default combineEpics(
  establishedEpic,
  resumeEpic,
);
