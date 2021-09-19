import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./modules/index";
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware as routerMW } from "connected-react-router";
import history from "./history";
import { getTokenFromLS } from "../services/auth";
import { LOCAL_STORAGE_TOKEN_KEY_NAME } from "../constants/auth";
import { initState as authInitState } from "./modules/auth";

const token = getTokenFromLS(LOCAL_STORAGE_TOKEN_KEY_NAME);

const sagaMw = createSagaMiddleware();

const store = createStore(
  reducer(history),
  {
    auth: {
      ...authInitState,
      token,
    },
  },
  composeWithDevTools(applyMiddleware(sagaMw, routerMW(history)))
);

sagaMw.run(rootSaga);

export default store;
