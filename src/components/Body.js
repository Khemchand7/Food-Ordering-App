// import resList from "../utils/mockdata";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const[filteredListOfRestaurants,setFilteredListOfRestaurants]=useState([]);

  const [searchText, setSearcText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6655181&lng=77.258312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // above statement will return a promise , so we need to resolve the promise

    const json = await data.json(); //now we will convert this fetched data into json


    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearcText(e.target.value);
            }}
          ></input>
          <button
          className="search-button"
          on
          onClick={() => {
            const filteredList=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredListOfRestaurants(filteredList);
            //filter kar rhe hai original wali ko aur update kar rhe hai duplicate wali ko 
          }}
        >
          Search
        </button>
        </div>
        
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((resturant) => (
          // yaha pr mistake ki updated filtered list listofRestaurants me hai to yhan hum agar resList pass karenge to
          // hamara filtered function work nhi karega  because state variable pass karne se kya fayda jab yhan pr hum
          //resList hi render kara rhe hai
          // whenever you are looping anything you have to loop with key and key
          //should not be generated from index value.
          <Link key={resturant.info.id} to={"/restaurants/" + resturant.info.id} ><ResturantCard  resData={resturant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
