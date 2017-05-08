import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools());

if (module.hot) {
  module.hot.accept("./reducer", () => {
    store.replaceReducer(require("./reducer").default);
  });
}

export default store;
