import React from "react";
import { BiRupee } from "react-icons/bi";

const ShimmerCart = () => {
  return (
    <div className="h-screen bg-gray-100 pt-8">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-neutral-200 p-6 shadow-md sm:flex sm:justify-start">
            <div className="w-52 h-40 bg-gray-400 animate-pulse"></div>
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <div className="h-6 w-80 bg-zinc-500 animate-pulse"></div>
                <div className="mt-2 bg-zinc-400 animate-pulse h-16 w-72"></div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-neutral-200 p-6 shadow-md sm:flex sm:justify-start">
            <div className="w-52 h-40 bg-gray-400 animate-pulse"></div>
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <div className="h-6 w-80 bg-zinc-500 animate-pulse"></div>
                <div className="mt-2 bg-zinc-400 animate-pulse h-16 w-72"></div>
              </div>
            </div>
          </div>
          <div className="justify-between mb-6 rounded-lg bg-neutral-200 p-6 shadow-md sm:flex sm:justify-start">
            <div className="w-52 h-40 bg-gray-400 animate-pulse"></div>
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <div className="h-6 w-80 bg-zinc-500 animate-pulse"></div>
                <div className="mt-2 bg-zinc-400 animate-pulse h-16 w-72"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <div className="h-5 w-20 bg-neutral-400 animate-pulse "></div>
            <div className="h-5 w-5 bg-neutral-400 animate-pulse">
              <p className="font-semibold text-[20px] flex items-center">
                <BiRupee />
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="h-5 w-20 bg-neutral-400 animate-pulse "></div>
            <div className="h-5 w-5 bg-neutral-400 animate-pulse"></div>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <div className="bg-slate-400 h-5 w-16 animate-pulse"></div>

            <div className="bg-slate-400 h-5 w-16 animate-pulse"></div>
          </div>
          <button className="mt-6 w-full h-10 animate-pulse rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"></button>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCart;
