import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
  const{ resId }=useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer></Shimmer>;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  //untill unless i have not defined the shimmer on top it  is giving me error as these valuses are
  //undefined because in starting our resInfo list is empty and it is trying to find from it due to which
  //it is giving error.

  const { itemCards } =
    // resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //   ?.card ||
    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //   ?.card ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //this is because while looking into the console in api data sometime coming in card[4] and sometimes in card[5]
  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")}-{costForTwoMessage}
      </h2>
      <h4>
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}--{"Rs:"}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </h4>
    </div>
  );
};

export default RestaurantMenu;
