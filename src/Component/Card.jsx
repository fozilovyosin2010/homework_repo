import React from "react";

const Card = ({ icon, title, des, bgColor }) => {
  return (
    <div className="flex flex-col justify-start items-start gap-3 max-md:max-w-[150px]">
      <div
        style={{ background: bgColor }}
        className={`p-1 rounded-full w-[40px] h-[40px] flex items-center max-md:rounded-[15px]`}
      >
        <img src={icon} alt="" />
      </div>
      <div className="bolder max-md:text-[18px]">{title}</div>
      <div className="text-[18px] font-[400] max-w-[270px] max-md:text-[13px] max-md:max-w-full">
        {des}
      </div>
      <button className="p-[8px_18px] text-[#6C5CE7] rounded-[16px] border border-[#ADADAD]">
        Learn more
      </button>
    </div>
  );
};

export default Card;
