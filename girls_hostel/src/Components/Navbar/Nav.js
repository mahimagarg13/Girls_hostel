import React, { useState } from 'react';
import "../Navbar/Nav.css";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import logo from "../Navbar/logo.png";
function Nav() {
  const [showLinks, setShowLinks] = useState(false)
  const navBarShow = () => setShowLinks(false);
  window.scrollTo(0, 0)
  return (
    <div className="Navbar">
      <div className="leftside"></div>
      <a href="/">
        <img src={logo} className="hw" alt="imgg" />
      </a>
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <Link to="/#" onClick={navBarShow} >Home</Link>
          <Link to="/about/#" onClick={navBarShow}>About Us</Link>
          {/* <div className="dropdown"> */}
              <Link to="/services/#" className="dropbtn" onClick={navBarShow} >Services</Link>
            {/* <div className="dropdown-content"> */}
              {/* <Link to="">Service 1</Link> */}
              {/* <Link to="">Service 2</Link> */}
            {/* </div></div> */}
          <Link to="/gallery/#" onClick={navBarShow} >Gallery</Link>
          {/* <Link to="/designer/#" onClick={navBarShow} >Designer</Link> */}
          <Link to="/contactus/#" onClick={navBarShow} >Contact Us</Link>
          {/* <Link to="/registration" onClick={navBarShow} className="btnn">Registration</Link> */}
        </div>
        <button onClick={() => setShowLinks(!showLinks)} className="margin-right">
          <TiThMenu />
        </button>
      </div>
    </div>
  );
}
export default Nav;
