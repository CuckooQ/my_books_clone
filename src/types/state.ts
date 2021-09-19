import { RouterState } from "connected-react-router";
import { Reducer } from "react";
import { AnyAction } from "redux";
import { BookType } from "./book";

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface BookState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  book: BookState;
  router: Reducer<RouterState<unknown>, AnyAction>;
}
