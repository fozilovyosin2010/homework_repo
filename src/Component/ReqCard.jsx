import React from "react";

const ReqCard = ({ children, title, des }) => {
  return (
    <div className="relative p-[10px_20px] flex items-center gap-[20px] bg-[#fff] rounded-[15px]">
      {/* border-t-[10px] border-t-[#0EA5E9] */}
      <div className="w-full absolute left-0 right-0 h-[10px] bg-linear-to-r from-[#0EA5E9] to-[#141111] top-[0] rounded-t-[15px]"></div>
      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-[10px] rounded-[15px]">
        {children}
      </div>
      <div className="flex flex-col">
        <div className="text-[20px] font-medium">{title}</div>
        <div className="text-[#0EA5E9]">{des}</div>
      </div>
    </div>
  );
};

export default ReqCard;
