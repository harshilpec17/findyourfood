import React, { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { MENU_FOOD_IMAGE } from "../utils/constant";
import { BiRupee } from "react-icons/bi";
import {
  addToCart,
  decreasedQuantity,
  increasedQuantity,
  removeFromCart,
} from "../Redux/cartSlice";
import ShimmerCart from "./MenuComponent/ShimmerCart";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItemsAdded = useSelector((store) => store.cart.cartItems);

  const [itemTotal, setItemTotal] = useState();

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increasedQuantity(item));
  };

  const handleDecreaseQuantity = (item) => {
    item.quantity > 1 && dispatch(decreasedQuantity(item));
  };

  const handleTotal = (items) => {
    return items.reduce(
      (total, item) =>
        Number(
          total +
            (item.card.info.price
              ? item.card.info.price
              : item.card.info.defaultPrice) *
              item.quantity
        ),
      0
    );
  };

  useEffect(() => {
    setItemTotal(handleTotal(cartItemsAdded));
  }, [cartItemsAdded]);

  const subTotal = (itemTotal) => {
    let totalBeforeHST = itemTotal / 100 + 30.0;
    let HST = 13 / 100;
    let totalHST = totalBeforeHST * HST;
    return totalBeforeHST + totalHST;
  };

  return (
    <>
      {cartItemsAdded.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="dark:bg-stone-900 min-h-screen bg-gray-100 py-4 md:py-8">
          <h1 className="md:mb-10 mb-5 dark:text-gray-50 text-center text-2xl font-bold">
            Cart Items
          </h1>
          <div className=" mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItemsAdded.map((cartItem) => (
                <div className="justify-between mb-6 rounded-lg dark:bg-neutral-800 bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <div className="flex justify-between gap-4">
                    <img
                      src={MENU_FOOD_IMAGE + cartItem.card.info.imageId}
                      alt="product-image"
                      className="rounded-lg w-36 h-24 md:w-40"
                    />
                    <div className="sm:hidden sm:mt-0 flex flex-col gap-1 flex-wrap">
                      <h2 className="text-lg font-bold dark:text-neutral-50 text-gray-900">
                        {cartItem.card.info.name}
                      </h2>
                      <p className=" text-xs dark:text-neutral-300 text-gray-700">
                        {cartItem.card.info.description}
                      </p>
                    </div>
                  </div>
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0 hidden sm:block flex-col gap-1">
                      <h2 className="text-lg font-bold dark:text-neutral-50 text-gray-900">
                        {cartItem.card.info.name}
                      </h2>
                      <p className="mt-1 text-xs dark:text-neutral-300 text-gray-700">
                        {cartItem.card.info.description}
                      </p>
                    </div>

                    <div className="mt-4 flex md:flex-col gap-16 md:gap-0 flex-row sm:space-y-24 sm:mt-0 sm:block">
                      <div className="flex items-center justify-end border-gray-100">
                        <span
                          onClick={() => handleDecreaseQuantity(cartItem)}
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 dark:bg-stone-500 dark:text-neutral-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          -{" "}
                        </span>
                        <span className="h-8 w-8  bg-white dark:bg-neutral-300 dark:text-neutral-900  text-center p-1 outline-none">
                          {cartItem.quantity}
                        </span>

                        <span
                          onClick={() => handleIncreaseQuantity(cartItem)}
                          className="cursor-pointer rounded-r bg-gray-100 dark:bg-stone-500 dark:text-neutral-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[20px] dark:text-stone-200 flex items-center">
                          <BiRupee />

                          {cartItem.card.info.price
                            ? (
                                (cartItem.card.info.price / 100) *
                                cartItem.quantity
                              ).toFixed(2)
                            : (
                                (cartItem.card.info.defaultPrice / 100) *
                                cartItem.quantity
                              ).toFixed(2)}
                        </p>
                        <div
                          onClick={() => handleDelete(cartItem)}
                          className="text-xl bg-orange-300 hover:bg-red-300 p-1 rounded"
                        >
                          <RiDeleteBin5Fill />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg dark:border-none border dark:bg-neutral-800 max-h-64 bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className=" dark:text-neutral-100 text-gray-700">Subtotal</p>
                <p className="text-gray-700 dark:text-zinc-200 flex items-center">
                  <BiRupee />
                  {(itemTotal / 100).toFixed(2)}
                </p>
              </div>
              <div className="mb-2 flex justify-between">
                <p className="dark:text-neutral-100 text-gray-700">Shipping</p>
                <p className="dark:text-neutral-100 text-gray-700 flex items-center">
                  <BiRupee />
                  30.00
                </p>
              </div>
              <div className="flex justify-between">
                <p className="dark:text-neutral-100 text-gray-700">HST(13%)</p>

                <p className="text-gray-700 dark:text-neutral-100 flex items-center">
                  <BiRupee />
                  {parseFloat((itemTotal / 100) * (13 / 100)).toFixed(2)}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold dark:text-neutral-100">Total</p>
                <div className="">
                  <p className="mb-1 text-lg dark:text-neutral-100 font-bold flex items-center">
                    <BiRupee />
                    {subTotal(itemTotal).toFixed(2)}
                  </p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
