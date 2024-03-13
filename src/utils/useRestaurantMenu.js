import { useEffect, useState } from "react";
import { RES_MENU } from "./constant";
import { useDispatch } from "react-redux";
import { addInfo, addMenu, addOffers } from "../Redux/menuSlice";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchMenu();
  }, [id]);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + id);
    const json = await data.json();
    setResInfo(json.data);

    async function checkJsonData(json) {
      for (let i = 0; i < json.data.cards.length; i++) {
        // updated state variable restaurants with Swiggy API data
        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i].groupedCard;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    async function checkRestaurantData(json) {
      for (let i = 0; i < json.data.cards.length; i++) {
        if (
          json?.data?.cards[i].card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
        ) {
          let restaurant = json.data.cards[i].card.card;
          if (restaurant !== undefined) {
            return restaurant;
          }
        }
      }
    }
    const name = await checkRestaurantData(json);
    dispatch(addInfo(name));

    async function checkOfferData(json) {
      for (let i = 0; i < json.data.cards.length; i++) {
        // updated state variable restaurants with Swiggy API data
        // initialize checkData for Swiggy Restaurant data
        let checkOfferData =
          json?.data?.cards[i].card?.card?.gridElements?.infoWithStyle;
        // if checkData is not undefined then return it
        if (checkOfferData !== undefined) {
          return checkOfferData;
        }
      }
    }
    const offer = await checkOfferData(json);
    dispatch(addOffers(offer));

    // call the checkJsonData() function which return Swiggy Restaurant data
    const menuData = await checkJsonData(json);
    const newArray = await menuData.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    dispatch(addMenu(newArray));
  };

  return resInfo;
};

export default useRestaurantMenu;
