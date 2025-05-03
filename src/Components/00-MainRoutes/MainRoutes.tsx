import React from 'react';
import Header from '../01-Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../../Pages/00-Home/Home';

interface MainRoutesProps {

}

const MainRoutes: React.FC<MainRoutesProps> = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRoutes;