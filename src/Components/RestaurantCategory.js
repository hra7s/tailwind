import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

  const [showItems,setShowItems]= useState(false);

const handleClick=()=>{
 setShowItems(!showItems)

}

 //console.log(data)
  return (
    <div>
    {/* Header */}
    <div className="w-6/12  flex-col mx-auto my-6 bg-gray-100 shadow-xl p-4 ">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}> <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
      <span>⬇️</span></div>
     
     {showItems && <ItemList items={data.itemCards} />}
    </div>
   
    </div>
  )
}

export default RestaurantCategory;