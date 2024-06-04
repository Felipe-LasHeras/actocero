import Component from "./Component";
import LeftContent from "./LeftContent";
import Obras from "./Obras";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";



import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      
      
    </div>
  </Router>
  );
}

export default App;
