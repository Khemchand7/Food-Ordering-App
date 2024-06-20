import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";
import StarSymbol from "../utils/StarSymbol";
import { LuDot } from "react-icons/lu";

const ResturantCard = (props) => {
  // const {resName,cuisines,rating,delievryTime}=props;
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    cuisines,
    avgRating,
    sla,
    areaName
  } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="w-[150] md:w-[273px] hover:scale-90 cursor-pointer hover:border-t-4">
      <div className="h-[100px] md:h-[182px] rounded-[15px] overflow-hidden relative ">
        <img
          className="object-cover w-full h-full rounded-lg "
          alt="resturant logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="image-overlay absolute w-full h-full top-0 flex items-end text-white text-xl p-3">
          {aggregatedDiscountInfoV3?.header &&
          aggregatedDiscountInfoV3?.subHeader
            ? `${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`
            : `${aggregatedDiscountInfoV3?.header}`}
        </div>
      </div>
      <div className="m-2 p-2">
      <div className="handletext mt-1 font-bold text-xl ">{name}</div>
      <div className="flex items-center mt-1 font-bold text-sm md:text-lg">
        <StarSymbol className="mr-1" />
        {avgRating}
        <LuDot />
        {sla.slaString}
      </div>
      <div className="handletext overflow-hidden text-slate-700">{cuisines.join(", ")}</div>
      <div className="text-slate-700">{areaName}</div>
      </div>
    </div>
  );
};

//Higher Order Component
export const withOpenLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg font-bold scale-75">
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
