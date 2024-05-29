import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
// import { Login } from "./components/Routs/Login";
import ProtectedRoutes from "../src/Middleware/ProtectedRoutes/ProtectedRoutes";
import Login from "./pages/Login";
import "react-toastify/dist/ReactToastify.css";

import MainComponent from "./pages/MainComponent";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        {localStorage.getItem("userIsLoggedIn") ? null : (
          <Route path="/login" element={<Login />} />
        )}
        <Route>
          <Route path="/*" element={<MainComponent />} />
          {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
