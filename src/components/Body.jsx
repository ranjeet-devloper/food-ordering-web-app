import React, { useEffect, useState } from "react";
import Card from "./Card";
import { resList } from "../utils/mockData";
import ShimmerUi from "./ShimmerUi";
const Body = () => {
  //const pk="ranjeet";
const [resLists,setresLists] = useState([])

useEffect(()=>{

  fetchData();

},[])

const fetchData = async()=>{
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.257114593161635&lng=87.85119082778694&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

   const jsonData = await data.json();
   console.log(jsonData);
   let resData = jsonData.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants;
  //  if(!resData){
  //   resData = jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
  //  }
   setresLists(resData)
}




  return (
    <div className="body-container">
      <div className="search-button">
        <button onClick={()=>{
          setresLists(resList.filter((res)=>res.info.avgRating>4.0))
        }}>search-top-rated-resturent</button>
      </div>
      <div className="res-card-container">

      {resLists.length>0?resLists.map((cardItems)=><Card key = {cardItems.info.id} cardDetails={cardItems}></Card>):<ShimmerUi/>}

      </div>
    </div>
  );
};

export default Body;
