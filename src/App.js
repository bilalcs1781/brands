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
import ClickScrollToTop from "./components/common/scrollToTop";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Example duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div className="App">
      <ClickScrollToTop />
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
