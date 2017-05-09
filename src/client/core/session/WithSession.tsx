import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer";
import { State as SessionState } from "./reducer";

interface OwnProps {
  children: (session: SessionState) => React.ReactElement<any>;
}

interface ConnectedProps {
  session: SessionState;
}

function WithSession({ children, session }: OwnProps & ConnectedProps) {
  return children(session);
}

function mapStateToProps(state: State, ownProps: OwnProps): ConnectedProps {
  return {
    session: state.session,
  };
}

export default connect(mapStateToProps)(WithSession);
