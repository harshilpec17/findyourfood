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
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [banner] = useState(mockPicks);

  const PromotedRestaurant = withPromotedLabel(Card);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
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

    console.log(json);

    console.log(restaurantData[1]?.info?.name);
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
      <div className="banner">
        {banner.bannerCarousel.cards.map((item) => (
          <Recommended key={item.id} top={item} />
        ))}
      </div>
      <div className="wrapper">
        <div className="filter-btns">
          <button
            className="btn"
            onClick={() => {
              const topRatedSort = newList.sort(
                (a, b) => b?.data?.data?.avgRating - a?.data?.data?.avgRating
              );
              const topRatedFilter = topRatedSort.filter(
                (x) => x?.data?.data?.avgRating
              );
              setFilteredData(topRatedFilter);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="btn fasterDelivery"
            onClick={() => {
              const deliverySort = newList.sort(
                (a, b) =>
                  a?.data?.data?.sla?.deliveryTime -
                  b?.data?.data?.sla?.deliveryTime
              );
              const deliveryFilter = deliverySort.filter(
                (x) => x?.data?.data?.sla?.deliveryTime
              );
              setFilteredData(deliveryFilter);
            }}
          >
            Faster Delivery
          </button>
          <button
            className="btn"
            onClick={() => {
              const lowToHighSort = newList.sort(
                (a, b) => a?.data?.data?.costForTwo - b?.data?.data?.costForTwo
              );
              const lowToHighFilter = lowToHighSort.filter(
                (x) => x?.data?.data?.costForTwo
              );
              setFilteredData(lowToHighFilter);
            }}
          >
            Cost: Low to High
          </button>
          <button
            className="btn"
            onClick={() => {
              const highToLowSort = newList.sort(
                (a, b) => b?.data?.data?.costForTwo - a?.data?.data?.costForTwo
              );
              const highToLowFilter = highToLowSort.filter(
                (x) => x?.data?.data?.costForTwo
              );
              setFilteredData(highToLowFilter);
            }}
          >
            Cost: High to low
          </button>
        </div>
        <div className="searchBar">
          <input
            type="search"
            id="searchBar"
            placeholder="Find a Spot"
            value={search}
            onChange={(text) => setSearch(text.target.value)}

            // onClick={() => fetchData()}
          />
          <button
            className="btn"
            onClick={() => {
              let filterData = newList.filter((e) =>
                e?.data?.data?.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredData(filterData);
            }}
            onKeyDown={(e) => {
              if (e.key === "enter") {
                console.log("enter pressed");
              }
            }}
          >
            Search
          </button>
          <button
            className="btn"
            onClick={() => {
              fetchData();
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="container dark:bg-gray-900">
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
    </>
  );
};

export default Body;
