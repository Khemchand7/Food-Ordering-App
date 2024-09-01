// import resList from "../utils/mockdata";
import ResturantCard, { withOpenLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearcText] = useState("");

  const RestaurantCardVeg = withOpenLabel(ResturantCard);

  // console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6655181%26lng%3D77.258312%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    // above statement will return a promise , so we need to resolve the promise

    const json = await data.json(); //now we will convert this fetched data into json

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(listOfRestaurants);
  };
  const Status = useOnlineStatus();

  if (Status === false)
    return <h1>Hey you lost your internet connection!! Please Check</h1>;

  if (listOfRestaurants.length===0) {
    return <Shimmer />;
  }

  return (
    <div className="body max-w-[1200px] mx-auto">
      <div className="flex m-1 p-1">
        <div className="search">
          <input
            type="text"
            data-testid="searchInput"
            className=" border border-gray-400 rounded-md"
            value={searchText}
            onChange={(e) => {
              setSearcText(e.target.value);
            }}
          ></input>
          <button
          data-testid="searchButton"
            className="m-4 px-4 border border-gray-400 shadow-md rounded-xl font-bold"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
              //filter kar rhe hai original wali ko aur update kar rhe hai duplicate wali ko
            }}
          >
            Search
          </button>
          <button
            className="m-4 px-4 border border-gray-400 shadow-md rounded-xl font-bold"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredListOfRestaurants(filteredList);
              //console.log(filteredList);
            }}
          >
            Ratings 4.0+
          </button>
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 ">
        {filteredListOfRestaurants.map((resturant) => (
          // yaha pr mistake ki updated filtered list listofRestaurants me hai to yhan hum agar resList pass karenge to
          // hamara filtered function work nhi karega  because state variable pass karne se kya fayda jab yhan pr hum
          //resList hi render kara rhe hai
          // whenever you are looping anything you have to loop with key and key
          //should not be generated from index value.
          <Link
            key={resturant?.info?.id}
            to={"/restaurants/" + resturant.info.id}
          >
            {resturant.info.isOpen ? (
              <RestaurantCardVeg resData={resturant?.info} />
            ) : (
              <ResturantCard resData={resturant?.info} />
            )}
            {/* <ResturantCard resData={resturant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;