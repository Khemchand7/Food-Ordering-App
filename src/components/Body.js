import resList from "../utils/mockdata";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
    return (
      <div className="body">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              setListOfRestaurants(filteredList);
              console.log(filteredList)
            }}
          >
            Top Rated Restaurants
          </button>
          </div>
      <div className="res-container">
        {listOfRestaurants.map((resturant) => (
            // yaha pr mistake ki updated filtered list listofRestaurants me hai to yhan hum agar resList pass karenge to 
            // hamara filtered function work nhi karega  because state variable pass karne se kya fayda jab yhan pr hum 
            //resList hi render kara rhe hai 
          <ResturantCard key={resturant.data.id} resData={resturant} />
        ))}
        // whenever you are looping anything you have to loop with key and key
        should not be generated from index value.
      </div>
    </div>
    );
  };
  
  export default Body;