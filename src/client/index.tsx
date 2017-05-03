import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

// TODO figure out how to declare components correctly in ts
const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root"),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}
