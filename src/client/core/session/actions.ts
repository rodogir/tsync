// tslint:disable:object-literal-sort-keys
import { Action } from "redux";
import { SessionEstablished } from "./actions";
import { SESSION_ESTABLISHED } from "./constants";

export interface SessionEstablished extends Action {
  type: typeof SESSION_ESTABLISHED;
  data: {
    token: string,
  };
}

export function sessionEstablished(token: string): SessionEstablished {
  return {
    type: SESSION_ESTABLISHED,
    data: {
      token,
    },
  };
}
