import { useState } from "react";
import MenuItemList from "./MenuItemList";

const MenuHeader = ({ data, showList, setShowList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setShowList();
    setIsOpen(!isOpen);
  };
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
          <span className="text-lg">{showList && isOpen ? "🔼" : "🔽"}</span>
        </div>
        {showList && isOpen && <MenuItemList items={data?.itemCards} />}
      </div>
    </>
  );
};

export default MenuHeader;
