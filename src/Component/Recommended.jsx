import React from "react";

const topPicks = ({ top }) => {
  return (
    <div className="flex-col mx-auto grid w-full items-center md:py-10 py-3 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      <div className="relative aspect-[16/9] md:w-[360px] w-[200px] rounded-md md:aspect-auto md:h-auto">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_624,h_320/" +
            top.imageId
          }
          className="z-0 h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default topPicks;
