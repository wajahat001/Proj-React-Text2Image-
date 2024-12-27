import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
<<<<<<< HEAD
      <ToastContainer position='top-right' />
=======
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
