import React from "react";
import Header from "../01-Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/00-Home/Home";
import Footer from "../04-Footer/Footer";

interface MainRoutesProps {}

const MainRoutes: React.FC<MainRoutesProps> = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default MainRoutes;
