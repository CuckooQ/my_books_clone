import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import bookSaga from "./bookSaga";

function* rootSaga() {
  yield all([authSaga(), bookSaga()]);
}

export default rootSaga;
