import { MENU_FOOD_IMAGE } from "../../utils/constant";
import { BiRupee } from "react-icons/bi";

const MenuItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="menuContainer flex justify-between border-b py-4"
        >
          <div className="menuDescription w-[60%] md:w-[70%]">
            <h1 className="font-bold text-[18px]">{item.card.info.name}</h1>
            <p className="font-semibold text-[16px] flex items-center">
              <BiRupee />
              {`${
                item.card.info.price / 100 || item.card.info.defaultPrice / 100
              }`}
            </p>

            <p className="text-[12px] text-[#93959F]">
              {item.card.info.description}
            </p>
          </div>
          <div className="menuImage cursor-pointer">
            <img
              src={MENU_FOOD_IMAGE + item.card.info.imageId}
              alt="No Image Required"
              className="w-[118px] h-[96px] bg-cover bg-center border rounded"
            />
            <div className="w-[118px] px-2 border rounded cursor-pointer">
              <h1 className="text-bold text-center text-[#3D9B6D] font-semibold">
                ADD +
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
