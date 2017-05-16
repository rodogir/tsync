// tslint:disable:object-literal-sort-keys
import { Action } from "redux";
import { SessionEstablished } from "./actions";
import { RESUMPTION_REQUESTED, SESSION_ESTABLISHED, USER_AUTHENTICATED } from "./constants";

export interface UserAuthenticated extends Action {
  type: typeof USER_AUTHENTICATED;
  data: {
    token: string,
  };
}

export function userAuthenticated(token: string): UserAuthenticated {
  return {
    type: USER_AUTHENTICATED,
    data: {
      token,
    },
  };
}

export interface SessionEstablished extends Action {
  type: typeof SESSION_ESTABLISHED;
}

export function sessionEstablished(): SessionEstablished {
  return {
    type: SESSION_ESTABLISHED,
  };
}

export interface SessionResumptionRequested extends Action {
  type: typeof RESUMPTION_REQUESTED;
}

export function sessionResumptionRequested(): SessionResumptionRequested {
  return {
    type: RESUMPTION_REQUESTED,
  };
}
