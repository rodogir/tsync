import * as React from "react";
import { show } from "../core/session/auth";

class LoginLock extends React.Component<{}, void> {
  public render(): null {
    return null;
  }

  private componentDidMount() {
    show();
  }
}

export default LoginLock;
