import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React from "react";
import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

export const TopRestaurnat = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [slide, setSlide] = useState(3);

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
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 1);
  };

  const nextSlide = () => {
    if (listOfRestaurants.length - 3 == slide) return false;
    setSlide(slide + 1);
  };

  return (
    listOfRestaurants.length===0?<Shimmer/>:<div className="max-w-[1200px] mx-auto ">
    <div className=" flex flex-wrap items-center py-4 justify-between align-middle">
      <div className="font-bold text-sm md:text-xl">
        Top restaurant chains in Delhi
      </div>
      <div className="flex">
        <div
          onClick={prevSlide}
          className="cursor-pointer flex flex-wrap justify-center items-center h-[34px] w-[34px] bg-[#e2dee7] rounded-full mx-1 "
        >
          <FaArrowLeft />
        </div>
        <div
          onClick={nextSlide}
          className="cursor-pointer flex flex-wrap justify-center items-center h-[34px] w-[34px] bg-[#e2dee7] rounded-full mx-1"
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
    <div className="flex gap-3 md:gap-5 overflow-hidden"> 
{listOfRestaurants.map((restaurant) => (
  <div
    key={restaurant.info.id}  
    style={{ transform: `translateX(-${slide * 100}%)` }} 
    className="shrink-0 duration-500"
  >
    <Link to={"/restaurants/" + restaurant.info.id}>
      <ResturantCard resData={restaurant?.info} />
    </Link>
  </div>
))}
</div>

<hr className="my-6 border"></hr>
  </div>
  );
};
export default TopRestaurnat;
