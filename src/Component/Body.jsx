import { BsSliders } from "react-icons/bs";
import Card, { withPromotedLabel } from "./Card";
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "./ShimmerComponent/ShimmerBody";
import { ShimmerHeader } from "./ShimmerComponent/ShimmerBody";
import { Link } from "react-router-dom";
import Recommended from "./Recommended";
import mockPicks from "../utils/mockPicks";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_LIST } from "../utils/constant";

const Body = () => {
  const [newList, setNewList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [banner] = useState(mockPicks);
  const [quickFood, setQuickFood] = useState([]);
  const [filter, SetFilter] = useState(false);

  console.log(quickFood?.data?.cards[0]?.card?.card?.imageGridCards?.info[0]);

  // console.log(newList.cards[0].card.card.imageGridCards.info[0]);

  const PromotedRestaurant = withPromotedLabel(Card);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST);

    const json = await data.json();

    setQuickFood(json);

    async function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // updated state variable restaurants with Swiggy API data
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    // call the checkJsonData() function which return Swiggy Restaurant data
    const restaurantData = await checkJsonData(json);

    setNewList(restaurantData);
    setFilteredData(restaurantData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="bg-red-300 font-bold text-7xl mt-36 h-screen text-center">
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  return newList.length === 0 ? (
    <div className="shimmerContainer">
      <ShimmerHeader />
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="w-screen dark:bg-slate-950 px-3 md:px-14">
        <div className="flex flex-col py-3">
          <h1 className="text-3xl font-bold pt-6 pb-4 dark:text-gray-200 px-3">
            what's on your mind ?
          </h1>
          <div className="flex overflow-scroll no-scrollbar py-2">
            {quickFood?.data?.cards[0]?.card?.card?.imageGridCards?.info.map(
              (banner) => (
                <div className="flex-shrink-0 px-2">
                  <img
                    className="h-36 w-32 rounded-3xl border-none object-fill"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                      banner.imageId
                    }
                  ></img>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex md:flex-row flex-wrap px-2 justify-between border-b border-black dark:bg-gray-800 md:px-2 items-center py-2">
          <p
            className=" dark:text-white text-xl pl-2 py-2 cursor-pointer"
            onClick={() => SetFilter(!filter)}
          >
            <BsSliders />
          </p>
          {filter ? (
            <div className="flex md:flex-row gap-2 py-2 md:gap-3 flex-wrap">
              <button
                className="bg-black md:px-6 md:py-2 px-3 py-1.5 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
                onClick={() => {
                  const topRatedSort = newList.sort(
                    (a, b) => b?.info?.avgRating - a?.info?.avgRating
                  );
                  const topRatedFilter = topRatedSort.filter(
                    (x) => x?.info?.avgRating
                  );
                  setFilteredData(topRatedFilter);
                }}
              >
                Top Rated Restaurants
              </button>
              <button
                className="bg-black md:px-6 md:py-2 px-3 py-1.5 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
                onClick={() => {
                  const deliverySort = newList.sort(
                    (a, b) =>
                      a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime
                  );
                  const deliveryFilter = deliverySort.filter(
                    (x) => x?.info?.sla?.deliveryTime
                  );
                  setFilteredData(deliveryFilter);
                }}
              >
                Faster Delivery
              </button>
              <button
                className="bg-black md:px-6 md:py-2 px-3 py-1.5 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
                onClick={() => {
                  const lowToHighSort = newList.sort(
                    (a, b) =>
                      a?.info?.costForTwo.match(/\d+/g) -
                      b?.info?.costForTwo.match(/\d+/g)
                  );
                  const lowToHighFilter = lowToHighSort.filter(
                    (x) => x?.info?.costForTwo
                  );
                  setFilteredData(lowToHighFilter);
                }}
              >
                Cost: Low to High
              </button>
              <button
                className="bg-black md:px-6 md:py-2 px-3 py-1.5 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
                onClick={() => {
                  const highToLowSort = newList.sort(
                    (a, b) =>
                      b?.info?.costForTwo.match(/\d+/g) -
                      a?.info?.costForTwo.match(/\d+/g)
                  );
                  const highToLowFilter = highToLowSort.filter(
                    (x) => x?.info?.costForTwo
                  );
                  setFilteredData(highToLowFilter);
                }}
              >
                Cost: High to low
              </button>
            </div>
          ) : null}

          <div className="md:justify-end md:gap-3 gap-2 py-2 items-center flex">
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                id="searchBar"
                placeholder="Find a Spot"
                className="md:px-2 px-1 md:py-2 py-0.5 border rounded-lg rounded-r-none outline-none dark:bg-gray-200"
                value={search}
                onChange={(text) => setSearch(text.target.value)}
              />

              <button
                className="bg-black md:px-4 px-3 md:py-2 py-1 text-white rounded-l-none rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
                onClick={() => {
                  let filterData = newList.filter((e) =>
                    e?.info?.name.toLowerCase().includes(search.toLowerCase())
                  );
                  setFilteredData(filterData);
                }}
              >
                Search
              </button>
            </form>

            <button
              className="bg-black md:px-4 px-3 md:py-2 py-1 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
              onClick={() => {
                setFilteredData(newList);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-row flex-col gap-2 md:gap-4 justify-between items-center px-6 md:px-12 py-6 dark:bg-gray-900">
          {filteredData.map((rest) => (
            <Link key={rest?.info?.id} to={"/menu/" + rest?.info?.id}>
              {rest?.info?.promoted ? (
                <PromotedRestaurant resData={rest} />
              ) : (
                <Card resData={rest} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
