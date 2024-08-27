import { useContext, useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
import { BiSolidOffer, } from "react-icons/bi";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
   console.log(cartItems);

  return (
    <div className="h-full flex  space justify-between shadow-md">
      <div className="w-[112px] ">
        <img className="md:w-[50px] w-[30px] mx-8 p-2" src={Logo}></img>
      </div>
      <div className="flex items flex-wrap font-bold ">
        <ul className="flex flex-wrap items-center ">
          <li className="m-4 px-4  hover:text-orange-500">OnlineStatus:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="m-4 px-4  hover:text-orange-500" >
            <Link to={"/"}>Home</Link>
          </li>

          <li className="m-4 px-4  hover:text-orange-400">
            <Link to={"/about"}><BiSolidOffer className="inline"/> Offers</Link>
          </li>
          <li className="m-4 px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="m-4 px-4  hover:text-orange-400">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          {/* <li>{loggedInUser}</li> */}
          <li className="m-4 px-4  hover:text-orange-400">
            <Link to={"/cart"}><LuShoppingCart className="inline" />-({cartItems.length} items)</Link>
          </li>
          <button
            className="m-4 px-4 bg-blue-300 rounded-md font-bold  hover:text-orange-400"
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
