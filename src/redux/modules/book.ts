import { AnyAction } from "redux";
import { BookState } from "../../types/state";
import { BookAddReqType, BookType } from "../../types/book";

/* ACTION TYPES */
const ACTION_TYPE_PREFIX = "my-books/book/";
export const GET_BOOKS_PENDING = ACTION_TYPE_PREFIX + "GET_BOOKS_PENDING";
const GET_BOOKS_SUCCESS = ACTION_TYPE_PREFIX + "GET_BOOKS_SUCCESS";
const GET_BOOKS_FAIL = ACTION_TYPE_PREFIX + "GET_BOOKS_FAIL";
export const ADD_BOOK_PENDING = ACTION_TYPE_PREFIX + "ADD_BOOK_PENDING";
const ADD_BOOK_SUCCESS = ACTION_TYPE_PREFIX + "ADD_BOOK_SUCCESS";
const ADD_BOOK_FAIL = ACTION_TYPE_PREFIX + "ADD_BOOK_FAIL";
export const DELETE_BOOK_PENDING = ACTION_TYPE_PREFIX + "DELETE_BOOK_PENDING";
export const DELETE_BOOK_SUCCESS = ACTION_TYPE_PREFIX + "DELETE_BOOK_SUCCESS";
const DELETE_BOOK_FAIL = ACTION_TYPE_PREFIX + "DELETE_BOOK_FAIL";

/* ACTION CREATORS */
export function getBooksPending() {
  return {
    type: GET_BOOKS_PENDING,
  };
}
export function getBooksSuccess(books: BookType[]) {
  return {
    type: GET_BOOKS_SUCCESS,
    books,
  };
}
export function getBooksFail(error: Error) {
  return {
    type: GET_BOOKS_FAIL,
    error,
  };
}
export function addBook(book: BookAddReqType) {
  return {
    type: ADD_BOOK_PENDING,
    book,
  };
}
export function addBookSuccess() {
  return {
    type: ADD_BOOK_SUCCESS,
  };
}
export function addBookFail(error: Error) {
  return {
    type: ADD_BOOK_FAIL,
    error,
  };
}
export function deleteBook(id: number) {
  return {
    type: DELETE_BOOK_PENDING,
    id,
  };
}
export function deleteBookSuccess() {
  return {
    type: DELETE_BOOK_SUCCESS,
  };
}
export function deleteBookFail(error: Error) {
  return {
    type: DELETE_BOOK_FAIL,
    error,
  };
}

/* REDUCER */
const initState: BookState = {
  books: [],
  loading: false,
  error: null,
};
function reducer(prevState: BookState = initState, action: AnyAction) {
  switch (action.type) {
    case GET_BOOKS_PENDING: {
      const newState = { ...prevState };
      newState.books = [];
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case GET_BOOKS_SUCCESS: {
      const newState = { ...prevState };
      newState.books = action.books;
      newState.loading = false;
      newState.error = null;
      return newState;
    }
    case GET_BOOKS_FAIL: {
      const newState = { ...prevState };
      newState.books = [];
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }
    case ADD_BOOK_PENDING: {
      const newState = { ...prevState };
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case ADD_BOOK_SUCCESS: {
      const newState = { ...prevState };
      newState.loading = false;
      newState.error = null;
      return newState;
    }
    case ADD_BOOK_FAIL: {
      const newState = { ...prevState };
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }
    case DELETE_BOOK_PENDING: {
      const newState = { ...prevState };
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case DELETE_BOOK_SUCCESS: {
      const newState = { ...prevState };
      newState.loading = false;
      newState.error = null;
      return newState;
    }
    case DELETE_BOOK_FAIL: {
      const newState = { ...prevState };
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
