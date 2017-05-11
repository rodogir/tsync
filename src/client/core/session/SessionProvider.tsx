import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Action } from "redux";
import { userAuthenticated } from "./actions";
import { AuthResult, onAuthenticated } from "./auth";

interface ConnectedProps {
  dispatchSessionEstablished: (token: string) => void;
}

class SessionProvider extends React.Component<ConnectedProps, void> {
  public render(): null {
    return null;
  }

  private componentDidMount() {
    onAuthenticated(this.props.dispatchSessionEstablished);
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action>): ConnectedProps {
  return {
    dispatchSessionEstablished: (token: string) =>
      dispatch(userAuthenticated(token)),
  };
}

export default connect(null, mapDispatchToProps)(SessionProvider);
