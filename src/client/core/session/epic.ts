import { Action } from "redux";
import { ActionsObservable } from "redux-observable";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { sessionEstablished, UserAuthenticated } from "./actions";
import { USER_AUTHENTICATED } from "./constants";

function establishedEpic(action$: ActionsObservable<Action>) {
  return action$
    .ofType(USER_AUTHENTICATED)
    .map((action: UserAuthenticated) => {
      localStorage.setItem("token", action.data.token);
      return sessionEstablished();
    });
}

export default establishedEpic;
