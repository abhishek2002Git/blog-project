import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Product from "./Components/Product";
import "./App.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/product/:id" element={<Product/>}/>
        </Routes>
    </Router>
  );
}

export default App;
