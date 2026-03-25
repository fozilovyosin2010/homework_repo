import React from "react";

const ReqCard = ({ children, title, des }) => {
  return (
    <div className="border-t border-t-[#0EA5E9]">
      <div>{children}</div>
      <div>
        <div className="text-[18px] font-medium">{title}</div>
        <div className="tetx-[#0EA5E9]">{des}</div>
      </div>
    </div>
  );
};

export default ReqCard;
