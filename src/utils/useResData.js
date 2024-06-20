
import  { useState,useEffect } from "react";

export const useResData = () => {
    //fetch data
    const [dataOfRestaurants, setDataOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6655181&lng=77.258312&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        // above statement will return a promise , so we need to resolve the promise
    
        const json = await data.json(); //now we will convert this fetched data into json
        setDataOfRestaurants(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
};
return dataOfRestaurants;
}

export default useResData;
