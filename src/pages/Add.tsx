import { Redirect } from "react-router";
import BookAddContainer from "../containers/BookAddContainer";
import useToken from "../hooks/useToken";

function Add() {
  const { token } = useToken();

  if (!token) {
    return <Redirect to="/signin" />;
  }

  return <BookAddContainer />;
}

export default Add;
