import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_FOOD_IMAGE } from "../utils/constant";
import { BiRupee } from "react-icons/bi";
import {
  addToCart,
  decreasedQuantity,
  increasedQuantity,
  removeFromCart,
} from "../Redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemsAdded = useSelector((store) => store.cart.cartItems);

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increasedQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    item.quantity > 1
      ? dispatch(decreasedQuantity(item))
      : dispatch(removeFromCart(item));
  };

  console.log(cartItemsAdded);

  return (
    <>
      <div className="w-6/12 m-auto py-10">
        {cartItemsAdded.length === 0 ? (
          <h1>Hello World I am from Cart</h1>
        ) : (
          <div>
            {cartItemsAdded.map((item, index) => (
              <div>
                <div
                  key={item?.card?.info?.id}
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
                    <div className="w-[118px]">
                      <div className="flex justify-between bg-[#3D9B6D] items-center rounded border">
                        <p
                          onClick={() => handleIncreaseQuantity(item)}
                          className=" bg-[#3D9B6D] text-white font-bold px-2 py-0.5"
                        >
                          +
                        </p>
                        <p className="bg-[#3D9B6D] text-white font-bold px-2 py-0.5">
                          {item.quantity}
                        </p>
                        <p
                          onClick={() => handleDecreaseQuantity(item)}
                          className=" bg-[#3D9B6D] text-white font-bold px-2 py-0.5"
                        >
                          -
                        </p>
                      </div>

                      <h1
                        onClick={() => handleDelete(item)}
                        className="text-bold border rounded cursor-pointer text-center text-[#3D9B6D] font-semibold"
                      >
                        Delete
                      </h1>
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
                  <p>{item.quantity} X</p>
                  <p>
                    {(item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100) * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
