import { Action } from "redux";
import { ActionsObservable, combineEpics } from "redux-observable";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { Observable } from "rxjs/Observable";
import { verifyToken } from "../api/index";
import { sessionEstablished, SessionEstablished, sessionTimedOut, UserAuthenticated } from "./actions";
import { RESUMPTION_REQUESTED, USER_AUTHENTICATED } from "./constants";
import { getToken, setToken } from "./token";

function establishedEpic(action$: ActionsObservable<Action>) {
  return action$
    .ofType(USER_AUTHENTICATED)
    .map((action: UserAuthenticated) => {
      setToken(action.data.token);
      return sessionEstablished();
    });
}

function resumeEpic(action$: ActionsObservable<Action>) {
  return action$
    .ofType(RESUMPTION_REQUESTED)
    .mergeMap((action) =>
      Observable.fromPromise(verifyToken())
        .map(sessionEstablished)
        .catch((error) => Observable.of(sessionTimedOut())));
}

export default combineEpics(
  establishedEpic,
  resumeEpic,
);
