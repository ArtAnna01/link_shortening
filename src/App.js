import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LinkPage from "./pages/LinkPage";
import LogInPage from "./pages/LogInPage";
import RegistrationPage from "./pages/RegistrationPage";
// import axios from "axios";

function App() {
  // axios.interceptors.request.use(
  //   (config) => {
  //     config.headers["Authorization"] = `Bearer ${localStorage.getItem(
  //       "access_token"
  //     )}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/link" element={<LinkPage />} />
      </Routes>
    </>
  );
}

export default App;
