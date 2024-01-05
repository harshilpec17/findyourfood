import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MENU_FOOD_IMAGE } from "../utils/constant";
import { BiRupee } from "react-icons/bi";

const Cart = () => {
  const cartItemsAdded = useSelector((store) => store.cart.cartItems);
  const [itemCount, setItemCount] = useState(1);

  return (
    <>
      <div className="w-6/12 m-auto py-10">
        Hello World I am from Cart
        <div>
          {cartItemsAdded.map((item, index) => (
            <div>
              <div
                key={item.card.info.id}
                className="menuContainer flex justify-between border-b py-4"
              >
                <div className="menuDescription w-[60%] md:w-[70%]">
                  <h1 className="font-bold text-[18px]">
                    {item.card.info.name}
                  </h1>
                  <p className="font-semibold text-[16px] flex items-center">
                    <BiRupee />
                    {`${
                      item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100
                    }`}
                  </p>

                  <p className="text-[12px] text-[#93959F]">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="menuImage border rounded">
                  <img
                    src={MENU_FOOD_IMAGE + item.card.info.imageId}
                    alt="No Image Required"
                    className="w-[118px] h-[96px] bg-cover bg-center"
                  />
                  <div className="w-[118px] cursor-pointer">
                    <div className="flex justify-between font-bold">
                      <button className="bg-[#3D9B6D] text-white px-2">
                        -
                      </button>
                      <h1 className="text-bold text-center text-[#3D9B6D] font-semibold"></h1>
                      <button className=" bg-[#3D9B6D] text-white px-2">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-semibold text-[16px] flex justify-between">
                <p className="flex items-center">
                  <BiRupee />
                  {`${
                    item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100
                  }`}
                </p>
                <p>{itemCount} X</p>
                <p>
                  {(item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100) * itemCount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
