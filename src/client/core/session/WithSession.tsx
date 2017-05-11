import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/reducer";
import { State as Session } from "./reducer";

interface OwnProps {
  children?: (session: Session) => React.ReactElement<any>;
}

interface ConnectedProps {
  session: Session;
}

function WithSession({ children, session }: OwnProps & ConnectedProps): React.ReactElement<any> {
  return children(session);
}

function mapStateToProps(state: State, ownProps: OwnProps): ConnectedProps {
  return {
    session: state.session,
  };
}

// TODO: figure out how to type this correctly. Children are not really type checked.
export default connect(mapStateToProps)(WithSession) as React.ComponentClass<OwnProps>;
export { Session };
