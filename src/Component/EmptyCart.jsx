import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  const handleStyle = {
    height: "40vh",
    width: "40vw",
  };
  return (
    <div className="flex flex-col dark:text-gray-300 items-center my-10 justify-start font-bold bg-center">
      <AiOutlineShoppingCart style={handleStyle} />
      <h1 className="text-3xl dark:text-white text-center font-bold">
        Looks like your cart is empty{" "}
      </h1>
      <button
        onClick={() => navigate("/")}
        className="mt-10 mb-40 px-8 py-4 text-xl rounded-md bg-blue-500  font-bold text-blue-50 hover:bg-blue-600"
      >
        Let's add food
      </button>
    </div>
  );
};

export default EmptyCart;
