import * as React from "react";
import { State as SessionState } from "../core/session/reducer";
import WithSession, { Session } from "../core/session/WithSession";

/**
 * Will display the auth0 lock in an overlay whenever the user is not logged in.
 */
function LoginOverlay() {
  return (
    <WithSession>
      {({ isLoggedIn }: Session) => {
        if (isLoggedIn) { return null; }
        return (
          <div>🚧 log in here soon</div>
        );
      }}
    </WithSession>
  );
}

export default LoginOverlay;
