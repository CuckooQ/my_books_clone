import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { goBack } from "connected-react-router";
import BookAdd from "../components/BookAdd";
import { logout } from "../redux/modules/auth";
import { addBook } from "../redux/modules/book";
import { RootState } from "../types/state";
import { BookAddReqType } from "../types/book";

function BookAddContainer() {
  const { loading } = useSelector((state: RootState) => state.book);

  const dispatch = useDispatch();
  const goToBack = useCallback(() => {
    dispatch(goBack());
  }, [dispatch]);
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const addTheBook = useCallback(
    (book: BookAddReqType) => {
      dispatch(addBook(book));
    },
    [dispatch]
  );

  return (
    <BookAdd
      loading={loading}
      goBack={goToBack}
      logout={logOut}
      addBook={addTheBook}
    />
  );
}

export default BookAddContainer;
