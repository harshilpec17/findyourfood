import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import { ShimmerMenuPage } from "./ShimmerComponent/ShimmerBody";
import { useParams } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import MenuHeader from "./MenuComponent/MenuHeader";
import { useSelector } from "react-redux";

const menu = () => {
  const { id } = useParams("");

  const resInfo = useRestaurantMenu(id);
  const menu = useSelector((store) => store?.menu?.menuData);
  const offers = useSelector((store) => store?.menu?.offers);
  const info = useSelector((store) => store?.menu?.info);

  const [showItems, setShowItems] = useState(null);

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [menu]);

  if (resInfo === null) return <ShimmerMenuPage />;

  // Destructuring for the name, cuisines, costForTwoMessage, avgRating, totalRatingsString, locality information for the restaurants

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    locality,
  } = info.info;

  // Destructuring for the deliveryTime information on the menu

  const { deliveryTime } = info?.info?.sla;

  // const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className=" text-[#3E4152] dark:bg-gray-900 dark:text-white px-3 md:w-9/12 m-auto bg-white my-6 md:my-12">
      {/* Restaurant Basic information 
      Name
      cuisines
      locality
      avgRating
      delivery time
      and cost for two people 
       */}

      <div className="flex md:flex-row justify-between md:px-16 py-3 md:py-6">
        <div>
          <h1 className="font-bold md:text-[28px] ">{name}</h1>
          <p className="md:text-[16px]">{cuisines.join(", ")}</p>
          <p className="md:text-[16px] flex items-center gap-2">
            <ImLocation />
            {locality}
          </p>
        </div>
        <div>
          <div className="border-2 rounded text-center p-1">
            <p className="border-b-2 text-[#3D9B6D] gap-1 flex item-center font-semibold justify-center py-1">
              <AiFillStar />
              {avgRating}
            </p>
            <p className="pt-1">{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 dark:bg-slate-700 rounded-lg px-2 my-2 flex justify-between md:mx-16 py-2 gap-20">
        <p className="md:text-[16px] flex gap-2 items-center">
          <FaClock /> {deliveryTime} Mins
        </p>
        <p className="md:text-[16px]">{costForTwoMessage}</p>
      </div>

      {/* 
      It provide the information regarding the Discount available to that particular restaurants
      */}

      <div className="md:px-14 flex-wrap flex flex-col md:flex-row items-left">
        {offers.offers.map((x) => (
          <div key={x.info.couponCode}>
            <div className="md:px-2 py-1 md:py-3 w-max">
              <div className="px-4 py-2 card border rounded">
                <div className="flex items-center text-center">
                  <BsEmojiHeartEyesFill />
                  <h2 className="text-center pl-3 font-extrabold">
                    {x.info.header}
                  </h2>
                </div>
                <div className="flex flex-row gap-2 text-[#93959F] font-semibold">
                  <p>{x.info.couponCode}</p>
                  <p> | {x.info.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* It provide the menu items displayed on the page  */}

      <div className="px-2 md:px-16 mt-4 md:mt-5">
        <h1 className="text-2xl font-bold">Menu</h1>
        {menu?.map((item, index) => (
          <>
            <MenuHeader
              data={item?.card?.card}
              key={Date.now()}
              showList={showItems == index ? true : false}
              setShowList={() => setShowItems(index)}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default menu;
