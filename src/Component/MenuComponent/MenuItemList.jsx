import { useState } from "react";
import { MENU_FOOD_IMAGE } from "../../utils/constant";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreasedQuantity } from "../../Redux/cartSlice";

const MenuItemList = ({ items }) => {
  const [addItem, setAddItem] = useState(items);
  const [modifiedItem, setModifiedItem] = useState(items);

  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store?.cart?.cartItems);

  const handleClick = (i) => {
    setModifiedItem((prev) => {
      return prev.map((itemQuantity) =>
        itemQuantity.card?.info?.id === i?.card?.info?.id
          ? {
              ...itemQuantity,
              quantity: itemQuantity.quantity + 1,
              addedToCart: true,
            }
          : itemQuantity
      );
    });
    dispatch(addToCart(i));
  };

  const handleDecreaseQuantity = (i) => {
    setModifiedItem((prev) => {
      return prev.map((itemQuantity) =>
        itemQuantity.card?.info?.id === i?.card?.info?.id &&
        itemQuantity.quantity > 0
          ? {
              ...itemQuantity,
              quantity: itemQuantity.quantity - 1,
              addedToCart: itemQuantity.quantity - 1 > 0,
            }
          : { ...itemQuantity }
      );
    });
    dispatch(decreasedQuantity(i));
  };

  return (
    <div>
      {modifiedItem.map((item) => (
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
              className="w-[118px] h-[96px] bg-cover bg-center dark:border-zinc-300 border rounded"
            />
            <div className="w-[118px]">
              {item.addedToCart ? (
                cartItems.map(
                  (cartItem) =>
                    cartItem.card.info.id === item.card.info.id && (
                      <div className="flex justify-between bg-[#3D9B6D] items-center rounded border">
                        <p
                          onClick={() => handleDecreaseQuantity(item)}
                          className=" bg-[#3D9B6D] text-white font-bold px-2 py-0.5"
                        >
                          -
                        </p>

                        <p className="bg-[#3D9B6D] text-white font-bold px-2 py-0.5">
                          {cartItem.quantity}
                        </p>
                        <p
                          onClick={() => handleClick(item)}
                          className=" bg-[#3D9B6D] text-white font-bold px-2 py-0.5"
                        >
                          +
                        </p>
                      </div>
                    )
                )
              ) : (
                <h1
                  onClick={() => handleClick(item)}
                  className="text-bold border rounded cursor-pointer text-center dark:border-green-700 text-[#3D9B6D] font-semibold"
                >
                  ADD +
                </h1>
              )}

              {/* {cartItems.map((cartItem) =>
                cartItem.card.info.id === item.card.info.id &&
                item.addedToCart ? (
                  <div className="flex justify-between bg-[#3D9B6D] items-center rounded border">
                    <p
                      onClick={() => handleClick(item)}
                      className=" bg-[#3D9B6D] text-white font-bold px-2 py-0.5"
                    >
                      +
                    </p>
                    <p className="bg-[#3D9B6D] text-white font-bold px-2 py-0.5">
                      {cartItem.quantity}
                    </p>
                    <p
                      onClick={() => handleDecreaseQuantity(item)}
                      className=" bg-[#3D9B6D] text-white font-bold px-2 py-0.5"
                    >
                      -
                    </p>
                  </div>
                ) : (
                  <h1
                    onClick={() => handleClick(item)}
                    className="text-bold border rounded cursor-pointer text-center text-[#3D9B6D] font-semibold"
                  >
                    ADD +
                  </h1>
                )
              )} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemList;
