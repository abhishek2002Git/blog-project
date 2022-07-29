import React, { useState } from "react";
import { AppState } from "../contexts/Context";
import "./sidebar2.css";

const Sidebar2 = () => {
    const {sidebar, showSidebar} = AppState();

  return (
    <>
      <div id="container">
        <div id="lgMenu" className={sidebar?"enter":""}>
          <span onClick={showSidebar} id="exit">&times;</span>
          <ul className="side-ul">
            <li className="side-li">Link One</li>
            <li className="side-li">Link Two</li>
            <li className="side-li">Link Three</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
