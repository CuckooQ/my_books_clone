import { push } from "connected-react-router";
import { AnyAction } from "redux";
import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  getBooksAsync,
  addBookAsync,
  deleteBookAsync,
} from "../../services/book";
import { BookAddReqType, BookType } from "../../types/book";
import {
  GET_BOOKS_PENDING,
  ADD_BOOK_PENDING,
  DELETE_BOOK_PENDING,
  DELETE_BOOK_SUCCESS,
  getBooksSuccess,
  getBooksFail,
  addBookFail,
  addBookSuccess,
  deleteBookSuccess,
  deleteBookFail,
} from "../modules/book";

interface BookAddAction extends AnyAction {
  book: BookAddReqType;
}
interface BookDeleteAction extends AnyAction {
  id: number;
}

function* getBooks() {
  const token: string = yield select((state) => state.auth.token);

  try {
    const books: BookType[] = yield call(getBooksAsync, token);
    yield put(getBooksSuccess(books));
  } catch (error: any) {
    yield put(
      getBooksFail(new Error(error?.response?.data?.error || "Unknown Error"))
    );
  }
}

function* addBook(action: BookAddAction) {
  const token: string = yield select((state) => state.auth.token);
  try {
    yield call(addBookAsync, token, action.book);
    yield put(addBookSuccess());
    yield put(push("/"));
  } catch (error: any) {
    yield put(
      addBookFail(new Error(error?.response?.data?.error || "Unknown Error"))
    );
  }
}
function* deleteBook(action: BookDeleteAction) {
  const token: string = yield select((state) => state.auth.token);
  try {
    yield call(deleteBookAsync, token, action.id);
    yield put(deleteBookSuccess());
  } catch (error: any) {
    yield put(
      deleteBookFail(new Error(error?.response?.data?.error || "Unknown Error"))
    );
  }
}

function* bookSaga() {
  yield takeEvery(GET_BOOKS_PENDING, getBooks);
  yield takeEvery(ADD_BOOK_PENDING, addBook);
  yield takeEvery(DELETE_BOOK_PENDING, deleteBook);
  yield takeEvery(DELETE_BOOK_SUCCESS, getBooks);
}

export default bookSaga;
