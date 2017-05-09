import * as React from "react";
import * as ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Link, Route, Switch } from "react-router-dom";
import LoginOverlay from "./components/LoginOverlay";

function App() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>⚡🕗 TSYNC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <LoginOverlay />
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <div>
              👋 Hello World <br />
              🚧 tsync is being created here
              <Link to="/login">Login</Link>
            </div>
          );
        }} />
      </Switch>
    </div>);
}

export default App;
