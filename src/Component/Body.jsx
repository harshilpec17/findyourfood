import restObj from "../utils/mockData";
import Card, { withPromotedLabel } from "./Card";
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "./ShimmerComponent/ShimmerBody";
import { ShimmerHeader } from "./ShimmerComponent/ShimmerBody";
import { Link } from "react-router-dom";
import Recommended from "./Recommended";
import mockPicks from "../utils/mockPicks";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [newList, setNewList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [banner] = useState(mockPicks);

  const PromotedRestaurant = withPromotedLabel(Card);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

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

    console.log(restaurantData);
    setNewList(restaurantData);
    setFilteredData(restaurantData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
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
      <div className="w-screen dark:bg-slate-950 px-14">
        <div className="flex overflow-scroll justify-between no-scrollbar">
          {banner.bannerCarousel.cards.map((item) => (
            <div className="pr-80">
              <Recommended key={item.id} top={item} />
            </div>
          ))}
        </div>

        <div className="flex justify-between border-b border-black   dark:bg-slate-800 px-2 items-center py-5">
          <div className="w-3/4 flex gap-3">
            <button
              className="bg-black px-6 py-2 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
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
              className="bg-black px-6 py-2 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
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
              className="bg-black px-6 py-2 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
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
              className="bg-black px-6 py-2 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
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
          <div className="w-2/4 justify-end gap-3 flex">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                id="searchBar"
                placeholder="Find a Spot"
                className="px-2 py-2 border rounded-lg rounded-r-none outline-none"
                value={search}
                onChange={(text) => setSearch(text.target.value)}
              />

              <button
                className="bg-black px-4 py-2 text-white rounded-l-none rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
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
              className="bg-black px-4 py-2 text-white rounded-md font-semibold outline-none hover:bg-violet-300 hover:text-black"
              onClick={() => {
                setFilteredData(newList);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 px-10 py-6 dark:bg-gray-900">
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
