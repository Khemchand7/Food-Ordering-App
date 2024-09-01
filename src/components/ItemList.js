import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(addItem(item));
  };
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="m-2 p-2 border-gray-300 border-b-2 text-left flex"
        >
          <div className="m-1 w-9/12">
            <span className="font-bold">{item?.card?.info?.name}</span>
            <div text-sm>
              <span className="font-bold text-sm">
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p className="text-sm ">{item?.card?.info?.description}</p>
            </div>
          </div>

          <div className="w-3/12 p-4 m-2 flex  justify-center">
          <div className="w-full h-full">
          <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-12 md:h-24 rounded-xl"
            ></img>
          </div>

            <button
              className="-mt-[14] absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline scale-75"
              onClick={()=>handleCartItems(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
