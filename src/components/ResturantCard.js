import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "./UserContext";

const ResturantCard = (props) => {
  // const {resName,cuisines,rating,delievryTime}=props;
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

    const {loggedInUser}=useContext(UserContext);

  return (
    <div className="res-card m-4 p-4 w-56 bg-gray-50 rounded-lg hover:scale-90 cursor-pointer hover:border-t-4">
      <img
        className="res-logo rounded-lg "
        alt="resturant logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} min </h5>
      <h5>User: {loggedInUser}  </h5>

    </div>
  );
};

//Higher Order Component
export const withOpenLabel =(ResturantCard) =>{
  return(props)=>{
    return(
      <div>
      <label className="absolute m-2 p-2 bg-black text-white rounded-lg font-bold scale-75">Open</label>
      <ResturantCard {...props}/>
    </div>
    )
  }
};


export default ResturantCard;
