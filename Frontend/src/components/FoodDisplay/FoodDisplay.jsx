import React, { useContext } from "react";
import { storeContex } from "../../Context/StoreContextProvider";
import Fooditem from "../Fooditem/Fooditem";


const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(storeContex);
  // console.log(food_list,"foodlist")
  return (
    <>
      <div className=" mt-[30px] w-[80%]">
        <h2 className="text-2xl font-bold">Top dishes near you</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2 mt-[30px]">
          {food_list?.map((item, index) => {
            if(category==="All"||category===item.category)
            return (
              <Fooditem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
