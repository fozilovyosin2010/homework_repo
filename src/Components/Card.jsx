import React from "react";

const Card = ({ svg, title }) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-[193px] bg-[#FFFFFF] border rounded-[8px] p-[40px_20px] border-[#E8E8E8] border">
      <img src={svg} />
      <div>{title}</div>
    </div>
  );
};

export default Card;
