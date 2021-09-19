import { call, put, select, takeEvery } from "redux-saga/effects";
import { AnyAction } from "redux";
import { push } from "connected-react-router";
import {
  signinAsync,
  setTokenToLS,
  removeTokenFromLS,
  logoutAsync,
} from "../../services/auth";
import { SigninReqType } from "../../types/auth";
import {
  SIGNIN_PENDING,
  LOGOUT,
  signinSuccess,
  signinFail,
  logoutSuccess,
} from "../modules/auth";

interface SigninAction extends AnyAction {
  reqData: SigninReqType;
}

function* signin(action: SigninAction) {
  try {
    const token: string = yield call(signinAsync, action.reqData);
    setTokenToLS(token);
    yield put(signinSuccess(token));
    yield put(push("/"));
  } catch (error: any) {
    yield put(
      signinFail(new Error(error?.response?.data?.error || "Unknown Error"))
    );
  }
}

function* logout(action: SigninAction) {
  const token: string = yield select((state) => state.auth.token);
  try {
    yield call(logoutAsync, token);
  } catch (error: any) {
  } finally {
    removeTokenFromLS();
    yield put(logoutSuccess());
  }
}

function* authSaga() {
  yield takeEvery(SIGNIN_PENDING, signin);
  yield takeEvery(LOGOUT, logout);
}

export default authSaga;
