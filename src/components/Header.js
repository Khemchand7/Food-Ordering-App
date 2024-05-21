import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnNameReact,setBtnNameReact]=useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-logut-btn" 
            onClick={() => {
              btnNameReact ==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
              //created toggle functionality using ternary operator
              // setBtnNameReact("logout");
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
