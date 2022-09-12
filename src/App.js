import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/NavBar";
import LinkPage from "./pages/LinkPage";
import AuthPage from "./pages/AuthPage";
// import RegistrationPage from "./pages/RegistrationPage";

function App() {
  const [isAuth, setAuth] = useState(false);

  const handleSignUp = (e, data) => {
    e.preventDefault();
    axios
      .post(
        `http://79.143.31.216/register?username=${data.username}&password=${data.password}`
      )
      .then((res) => {
        toast.success("Успешная регистрация");
        setAuth(true);
      })
      .catch((err) => toast.error(err.response.data.detail));
  };

  const handleSignIn = (e, data) => {
    e.preventDefault();
    axios
      .post(`http://79.143.31.216/login`, new URLSearchParams(data))
      .then((res) => {
        toast.success("Успешный вход");
        setAuth(true);
        localStorage.setItem("access_token", "Tom");
      })
      .catch((err) => toast.error(err.response.data.detail));
  };

  return (
    <>
      <div className="h-10 bg-slate-600 flex flex-row justify-center items-center ">
        <NavBar />
      </div>

      <Routes>
        {!isAuth ? (
          <>
            <Route
              path="/auth"
              element={
                <AuthPage
                  handleSignIn={handleSignIn}
                  handleSignUp={handleSignUp}
                />
              }
            />
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </>
        ) : (
          <>
            <Route path="/link" element={<LinkPage />} />
            <Route path="*" element={<Navigate to="/link" replace />} />
          </>
        )}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
