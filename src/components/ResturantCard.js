import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    // const {resName,cuisines,rating,delievryTime}=props;
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines,costForTwo, avgRating, sla } =
      resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="resturant logo"
          src={
            CDN_URL  +cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")} </h4>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{sla.deliveryTime} min </h5>
      </div>
    );
  };

  export default ResturantCard;