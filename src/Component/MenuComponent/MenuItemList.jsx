import { useEffect, useState } from "react";
import { MENU_FOOD_IMAGE } from "../../utils/constant";
import { BiRupee } from "react-icons/bi";

const MenuItemList = ({ items }) => {
  const [quantity, setQuantity] = useState({});
  const [addItem, setAddItem] = useState([]);
  const [addToggle, setAddToggle] = useState(false);

  const handleClick = (i) => {
    // (prev) => [{ i, counter: 0 }, ...prev];
    setAddItem((prev) => {
      const existingItem = prev.find(
        (item) => item.i.card?.info?.id === i.card?.info?.id
      );

      if (existingItem) {
        existingItem.counter = existingItem.counter + 1 || 1;
        return [...prev];
      } else {
        return [{ i, counter: 1 }, ...prev];
      }
    });
  };

  const removeItem = (i) => {
    setAddItem((prev) => {
      const existingItem = prev.find(
        (item) => item.i.card?.info?.id === i.card?.info?.id
      );

      if (existingItem) {
        if (existingItem.counter === 0) return;
        existingItem.counter = existingItem.counter - 1 || 0;
        return [...prev];
      } else {
        const finalItem = prev.filter(
          (item) => item.i.card.info.id !== i.card.info.id
        );
        return finalItem;
      }
    });
  };
  // const handleClick = (i) => {
  //   setAddItem((prev) => {
  //     const existingItem = prev.find(
  //       (item) => item.i.card?.info?.id === i.card?.info?.id
  //     );

  //     if (existingItem) {
  //       existingItem.counter = existingItem.counter + 1 || 1;
  //       return [...prev];
  //     } else {
  //       [{ i, counter: 1 }, ...prev];
  //     }
  //   });
  // };

  // const removeItem = (i) => {
  //   setAddItem((prev) =>
  //     prev.filter((dlt) => dlt.card.info.id !== Object.keys[quantity])
  //   );
  // };

  // const itemQuantity = (items) => {
  //   let counter = {};
  //   if (items.length === 0) return;
  //   items.forEach((q) => {
  //     if (q.i.card.info.id === q.i.card.info.id) {
  //       counter[q.i.card.info.id] = (counter[q.i.card.info.id] || 0) + 1;
  //       setQuantity(counter);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   itemQuantity(addItem);
  // }, [addItem]);

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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
