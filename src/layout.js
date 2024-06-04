import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Obras from "./component/obras";
import Home from "./component/home";
import App from "./App";




const Layout = () => {
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/obras" element={<Obras />} />

          {/* Añade más rutas según sea necesario */}
        </Routes>
      
    </Router>
  );
};

export default (Layout);
