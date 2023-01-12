import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";
import { setUserInfo } from "../../helpers/localStorage";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
  const navigate = useNavigate();

  googleLogout();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        // console.log("here are credentials", credentialResponse);
        const user_Info = jwtDecode(credentialResponse.credential);

        setUserInfo("userInfo", user_Info);
        if (user_Info) {
          navigate("/profile");
        }
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default LoginWithGoogle;
