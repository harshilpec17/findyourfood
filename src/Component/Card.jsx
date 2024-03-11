import { CARD_IMAGE_URL } from "../utils/constant";

const Card = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};
  console.log(cuisines);

  return (
    <>
      <div className="card w-[300px] rounded-md h-auto bg-[#F5F5F6] dark:bg-black dark:text-white hover:scale-105 duration-200 ease-in-out">
        <img
          src={CARD_IMAGE_URL + cloudinaryImageId}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4 flex flex-col justify-center">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {name.length > 23 ? name.slice(0, 23) + "..." : name}
          </h1>
          <p className="mt-3 text-sm  dark:text-gray-300 text-gray-600">
            {cuisines
              ? cuisines.length > 4
                ? cuisines.slice(0, 3).join(", ") + "..."
                : cuisines.join(", ")
              : " "}
          </p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#48C479]  text-[12px] px-3 py-1  font-bold text-gray-900">
              {avgRating} +
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-[#DB7C38] text-[12px] px-3 py-1 font-semibold text-gray-900">
              {deliveryTime} MINS
            </span>
            <span className="mb-2 mr-2  inline-block rounded-full bg-[#8A584B] text-[12px] px-3 py-1 font-semibold text-gray-900">
              {costForTwo || "₹250 for two"}
            </span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-zinc-900 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Let's Order
          </button>
        </div>
      </div>
    </>
  );
};

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute px-2 py-1 m-[1px] bg-green-600 text-white rounded">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
