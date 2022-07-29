import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {setSidebar(!sidebar)};
  return (
    <>
      <div className="sidebar">
        <Link className="menu-bars" to="/">
          <div>Open</div>
        </Link>
      </div>
      <nav className={sidebar ?'nav-menu active': 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
                <Link to="#" className='menu-bars'>
                    <div>close</div>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/">
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/">
                    <span>Reports</span>
                </Link>
            </li>
            <li className="nav-text">
                <Link to="/">
                    <span>Products</span>
                </Link>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
