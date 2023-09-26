import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border flex justify-between border-gray-200 border-b-2 text-left"
        >
          <div className="w-9/12">
          <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}{" "}
              </span>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            
          </div>
           
        
          <div className="w-3/12 p-4">
          <div className="absolute">
          <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg margin-auto">Add +</button>
          </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-2xl" />
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
