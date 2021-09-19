import { Redirect } from "react-router";
import BookListContainer from "../containers/BookListContainer";
import useToken from "../hooks/useToken";

function Home() {
  const { token } = useToken();

  if (!token) {
    return <Redirect to="/signin" />;
  }

  return (
    <div>
      <BookListContainer />
    </div>
  );
}

export default Home;
