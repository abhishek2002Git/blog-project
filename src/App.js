import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Post from "./Components/Post";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Sidebar2 from "./Components/Sidebar2";
// import {AppContext} from "./contexts/Context"
// import Scroll from "./Components/Scroll";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar2/>
      <Routes>
        <Route exact path="/blog" element={<Home />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/blog/:id" element={<Post />} />
        {/* <Route exact path="/scroll" element={<Scroll />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
