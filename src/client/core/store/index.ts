import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import epic from "./epic";
import reducer from "./reducer";

const epicMiddleware = createEpicMiddleware(epic);

const middlewares = [
  epicMiddleware,
];

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middlewares),
));

if (module.hot) {
  module.hot.accept("./reducer", () => {
    store.replaceReducer(require("./reducer").default);
  });
  module.hot.accept("./epic", () => {
    epicMiddleware.replaceEpic(require("./epic").default);
  });
}

export default store;
