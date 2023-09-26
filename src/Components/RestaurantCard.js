import React from "react"
import { CDN_URL } from "../utils/constants"




const RestaurentCard=(props)=>{
    const {resData} =props
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,sla}= resData?.info
    //optional chaining
        return (
            <div className='m-4 p-4 w-[250px] rounded-xl bg-gray-100 hover:bg-blue-200 '>
            <img className="rounded-2xl" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className=" ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h4>{sla?.deliveryTime} minutes</h4>
            </div>
        )
   
}

//Higher Order component 

// takes input ==> RestaurantCard ==> RestaurantCardPromoted 

export const withOpenedLabel= (RestaurentCard)=>{
    return (props)=>{
      
        return(
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Opened</label>
            <RestaurentCard {...props }/>

            </div>
            
        )
    }
}

export default RestaurentCard