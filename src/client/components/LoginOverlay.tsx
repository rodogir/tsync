import * as React from "react";
import { State as SessionState } from "../core/session/reducer";
import WithSession from "../core/session/WithSession";

/**
 * Will display the auth0 lock in an overlay whenever the user is not logged in.
 */
function LoginOverlay() {
  return (
    <WithSession>
      <div/>
    </WithSession>
  );
}

export default LoginOverlay;
