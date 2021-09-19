import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import auth from "./auth";
import book from "./book";
import { History } from "history";

const reducer = (history: History<unknown>) =>
  combineReducers({
    auth,
    book,
    router: connectRouter(history),
  });

export default reducer;
