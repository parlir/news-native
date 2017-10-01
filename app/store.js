import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "remote-redux-devtools";
import logger from "redux-logger";

import reducers from "./reducers";

export default createStore(
  reducers,
  applyMiddleware(thunk, logger)
  //composeWithDevTools(applyMiddleware(thunk))
);
