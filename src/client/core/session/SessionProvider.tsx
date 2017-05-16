import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { Action } from "redux";
import { sessionResumptionRequested, userAuthenticated } from "./actions";
import { AuthResult, onAuthenticated } from "./auth";

interface ConnectedProps {
  dispatchUserAuthenticated: (token: string) => void;
  dispatchResumptionRequested: () => void;
}

class SessionProvider extends React.Component<ConnectedProps, void> {
  constructor(props: ConnectedProps) {
    super(props);
    props.dispatchResumptionRequested();
  }

  public render(): null {
    return null;
  }

  private componentDidMount() {
    onAuthenticated(this.props.dispatchUserAuthenticated);
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action>): ConnectedProps {
  return {
    dispatchResumptionRequested: () => dispatch(sessionResumptionRequested()),
    dispatchUserAuthenticated: (token: string) => dispatch(userAuthenticated(token)),
  };
}

export default connect(null, mapDispatchToProps)(SessionProvider);
