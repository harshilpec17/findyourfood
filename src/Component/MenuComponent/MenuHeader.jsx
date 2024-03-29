import { useEffect, useState } from "react";
import MenuItemList from "./MenuItemList";
import { BiSolidUpArrowSquare } from "react-icons/bi";

const MenuHeader = ({ data, showList, setShowList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formateData, setFormateData] = useState(data);
  const handleClick = () => {
    setShowList();
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const newData = data.itemCards?.map((item) => ({
      ...item,
      quantity: 0,
      addedToCart: false,
    }));
    setFormateData(newData);
  }, [data]);

  return (
    <>
      <div className="w-full shadow-lg py-6 px-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <h1 className="font-bold text-[20px] ">
            {data?.title} ({data?.itemCards.length})
          </h1>
          <span className="text-lg">{showList && isOpen ? "▲" : "▼"}</span>
        </div>
        {showList && isOpen && <MenuItemList items={formateData} />}
      </div>
    </>
  );
};

export default MenuHeader;
