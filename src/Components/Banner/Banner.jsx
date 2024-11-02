import React from "react";

const Banner = (data) => {
  return (
    <div className="Banner">
      <img src={data.src} alt="" />
    </div>
  );
};

export default Banner;
