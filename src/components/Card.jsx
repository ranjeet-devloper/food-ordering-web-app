import React from "react";
import { CDN_URL } from "../utils/constants";
const Card = (props) => {
  const {name,cloudinaryImageId,cuisines,avgRating,deliveryTime,costForTwo}= props.cardDetails.info;
  //console.log(props)
  //const [name]=props;
  //console.log(props.name)
  return (
    <>
      <div className="card-container">
        <img
          className="food-image"
          src={CDN_URL + props.cardDetails.info.cloudinaryImageId}
        ></img>
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </>
  );
};

export default Card;
