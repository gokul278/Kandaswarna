import React from "react";
import MainRoutes from "./Components/00-MainRoutes/MainRoutes";
import "./App.css";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
