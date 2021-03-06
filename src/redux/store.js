import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducer";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware( loggerMiddleware)
);

export { store };
