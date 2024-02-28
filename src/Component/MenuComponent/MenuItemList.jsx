import { useEffect, useState } from "react";
import { MENU_FOOD_IMAGE } from "../../utils/constant";
import { BiRupee } from "react-icons/bi";

const MenuItemList = ({ items }) => {
  const [quantity, setQuantity] = useState({});
  const [addItem, setAddItem] = useState([]);
  const [addToggle, setAddToggle] = useState(false);

  const handleClick = (i) => {
    setAddItem((prev) => [{ i, counter: 0 }, ...prev]);
  };

  const removeItem = (i) => {
    setAddItem((prev) =>
      prev.filter((dlt) => dlt.card.info.id !== Object.keys[quantity])
    );
  };

  const itemQuantity = (items) => {
    let counter = {};
    if (items.length === 0) return;
    items.forEach((q) => {
      if (q.card.info.id === q.card.info.id) {
        counter[q.card.info.id] = (counter[q.card.info.id] || 0) + 1;
        setQuantity(counter);
      }
    });
  };

  useEffect(() => {
    itemQuantity(addItem);
  }, [addItem]);

  console.log(quantity);
  console.log(addItem);

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
            <div className="w-[118px] ">
              <div className="flex justify-between items-center bg-black rounded border">
                <p
                  onClick={() => handleClick(item)}
                  className="bg-black text-white font-bold px-2 py-0.5"
                >
                  +
                </p>
                <p className="bg-black text-white font-bold px-2 py-0.5">0</p>
                <p
                  onClick={() => removeItem(item)}
                  className="bg-black text-white font-bold px-2 py-0.5"
                >
                  -
                </p>
              </div>
              {/* <h1 className="text-bold border rounded cursor-pointer text-center text-[#3D9B6D] font-semibold">
                ADD +
              </h1> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
