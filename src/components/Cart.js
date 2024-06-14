import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center ">
      <h1 className="font-bold text-2xl m-3 p-3">Cart</h1>
      {cartItems.length!==0 &&(      <button
        className="-mt-[14] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline scale-75"
        onClick={handleClearCart}
      >
        Clear cart
      </button>)}

      {cartItems.length === 0 && (
        <div>
            <img className="block mx-auto  w-1/4 h-1/4" src="https://mir-s3-cdn-cf.behance.net/projects/404/54b13147340145.Y3JvcCw0MDUsMzE3LDAsNDI.png"></img>
            <h2 className="text-bold text-xl m-4">Your Cart is Empty</h2>
            <h3 className="m-2 p-2">You can go to home page to view more restaurants</h3>
            <h2  className="font-bold text-sm bg-orange-500 text-white w-1/5 m-auto p-2"><Link to={"/"}>SEE RESTAURANTS NEAR YOU</Link> </h2>
        </div>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
