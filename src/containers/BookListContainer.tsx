import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import BookList from "../components/BookList";
import { getBooksPending, deleteBook } from "../redux/modules/book";
import { logout } from "../redux/modules/auth";
import { RootState } from "../types/state";

function BookListContainer() {
  const { books, loading, error } = useSelector(
    (state: RootState) => state.book
  );
  const dispatch = useDispatch();
  const getBookList = useCallback(() => {
    dispatch(getBooksPending());
  }, [dispatch]);
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const goAdd = useCallback(() => {
    dispatch(push("/add"));
  }, [dispatch]);
  const deleteTheBook = useCallback(
    (id: number) => {
      dispatch(deleteBook(id));
    },
    [dispatch]
  );

  return (
    <BookList
      bookList={books}
      loading={loading}
      error={error}
      getBookList={getBookList}
      logout={logOut}
      goAdd={goAdd}
      deleteBook={deleteTheBook}
    />
  );
}
export default BookListContainer;
