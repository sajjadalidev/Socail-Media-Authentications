import LoginWithGoogle from "../auth/LoginWithGoogle";

const SignIn = () => {
  return (
    <div
      className="text-center"
      style={{
        width: "400px",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        margin: "20px",
      }}
    >
      <LoginWithGoogle />
    </div>
  );
};

export default SignIn;
