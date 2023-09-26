import React from 'react'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    // const [resInfo, setResInfo]= useState(null);
//  const params= useParams();
//  console.log(params)
    const {resId} =useParams();

    //resInfo has single responsiblity that means it is bother about fetching data

const resInfo= useRestaurantMenu(resId) 


//     useEffect(()=>{
// fetchMenu();
//     },[])


    // if (resInfo.length===0){
    //     return <Shimmer />
    // }


    // const fetchMenu=async()=>{
    //   console.log(MENU_URL+resId)
    //     const data= await fetch( MENU_URL+resId);
       
    //     const json = await data.json();
    //     console.log(json)
    //     setResInfo(json)


    // }


    if (resInfo===null) return <Shimmer/>;


  const { name,cuisines,costForTwo} =resInfo?.data.cards[0]?.card?.card?.info


   const {itemCards}= resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 //console.log(itemCards)
 //console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

 const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 //console.log(categories)
  return  (resInfo===null)?<Shimmer/>:(
    <div className='text-center'>
           
           <h1 className='font-bold my-6 text-2xl'>{name}</h1>
           <p className="font-bold text-lg">{cuisines.join(",")} -{"Rs "}{costForTwo/100}{" for two"}</p>
           {/* <h2>{"cost for two : "}{costForTwo/100}</h2> */}
           
           
            {/* <ul>
                {itemCards.map((each)=><li key={each.card.info.id} >{each.card.info.name}-{" Rs "}
                {(each.card.info.price)/100}</li>)}
            </ul> */}

            {/* Categories accordians */}


            {categories.map((category)=>
              <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
            )}

    </div>
  )
}


export default RestaurantMenu
