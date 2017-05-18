import * as React from "react";
import { State as SessionState } from "../core/session/reducer";
import WithSession, { Session } from "../core/session/WithSession";
import LoginLock from "./LoginLock";

/**
 * Will display the LoginLock in an overlay if the user is not logged in.
 */
function LoginOverlay() {
  return (
    <WithSession>
      {({ isLoggedIn }: Session) => {
        if (isLoggedIn === false) { return <LoginLock />; }
        return null;
      }}
    </WithSession>
  );
}

export default LoginOverlay;
