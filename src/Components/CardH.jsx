import { Rate } from "antd";
import React from "react";

const CardH = ({ img, local, title, price }) => {
  return (
    <div>
      <img src={img} alt="" />
      <div className="p-[20px_10px] flex flex-col gap-3 justify-start">
        <div className="flex flex-col gap-3">
          <div className="text-[#24AB70] text-[16px] font-[400]">{local}</div>
          <div className="text-[24px] font-[600]">{title}</div>
        </div>
        <div className="flex justify-between">
          <div>${price} Per Night</div>
          <div className="h-[16px] bg-[#ddd] w-[2px]"></div>
          <div className="flex gap-2">
            <Rate defaultValue={4.8} disabled />
            <span>4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardH;
