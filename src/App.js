import "./styles/App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./secret/constant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateComponent from "./components/protectedRoute/ProtectedRoute";
import SignIn from "./components/pages/signIn";
import Profile from "./components/user/Profile";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
