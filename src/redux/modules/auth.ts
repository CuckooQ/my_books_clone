import { AnyAction } from "redux";
import { SigninReqType } from "../../types/auth";
import { AuthState } from "../../types/state";

/* ACTION TYPES */
const ACTION_TYPE_PREFIX = "my-books/auth/";
export const SIGNIN_PENDING = ACTION_TYPE_PREFIX + "PENDING";
const SIGNIN_SUCCESS = ACTION_TYPE_PREFIX + "SUCCESS";
const SIGNIN_FAIL = ACTION_TYPE_PREFIX + "FAIL";
export const LOGOUT = ACTION_TYPE_PREFIX + "LOGOUT";
const LOGOUT_SUCCESS = ACTION_TYPE_PREFIX + "LOGOUT_SUCCESS";

/* ACTION CREATORS */
export function signinPending(reqData: SigninReqType) {
  return {
    type: SIGNIN_PENDING,
    reqData,
  };
}
export function signinSuccess(token: string) {
  return {
    type: SIGNIN_SUCCESS,
    token,
  };
}
export function signinFail(error: Error) {
  return {
    type: SIGNIN_FAIL,
    error,
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

/* REDUCER */
export const initState: AuthState = {
  token: null,
  loading: false,
  error: null,
};
function reducer(prevState: AuthState = initState, action: AnyAction) {
  switch (action.type) {
    case SIGNIN_PENDING: {
      const newState = { ...prevState };
      newState.token = null;
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case SIGNIN_SUCCESS: {
      const newState = { ...prevState };
      newState.token = action.token;
      newState.loading = false;
      newState.error = null;
      return newState;
    }
    case SIGNIN_FAIL: {
      const newState = { ...prevState };
      newState.token = null;
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }
    case LOGOUT_SUCCESS: {
      const newState = { ...initState };
      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
