import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./App";

const render = (Component: () => React.ReactElement<any>) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById("app"),
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    render(require("./App").default);
  });
}
