import { useSelector } from "react-redux";
import { RootState } from "../types/state";

function useToken() {
  const token = useSelector((state: RootState) => state.auth);
  return token;
}

export default useToken;
