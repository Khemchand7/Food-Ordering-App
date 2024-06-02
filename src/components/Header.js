import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex space justify-between shadow-md">
      <div className="w-[112px] shad">
        <img className="logo" src={CDN_LOGO}></img>
      </div>
      <div className="flex items ">
        <ul className="flex items-center">
          <li className="m-4 px-4">OnlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="m-4 px-4" >
            <Link to={"/"}>Home</Link>
          </li>

          <li className="m-4 px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="m-4 px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="m-4 px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="m-4 px-4">Cart</li>
          <button
            className="m-4 px-4 bg-blue-300 rounded-md font-bold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              //created toggle functionality using ternary operator
              // setBtnNameReact("logout");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
