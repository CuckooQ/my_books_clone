import { useDispatch } from "react-redux";
import Signin from "../components/Signin";
import { SigninReqType } from "../types/auth";
import { signinPending } from "../redux/modules/auth";

function SigninContainer() {
  const dispatch = useDispatch();
  const signin = (reqData: SigninReqType) => {
    dispatch(signinPending(reqData));
  };
  return <Signin signin={signin} />;
}

export default SigninContainer;
