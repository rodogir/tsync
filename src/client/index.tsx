import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./core/store";

const render = (Component: () => React.ReactElement<any>) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <Component />
        </Router>
      </Provider>
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
