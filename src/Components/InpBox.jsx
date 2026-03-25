import React from "react";

const InpBox = ({ svg, title, des }) => {
  return (
    <div>
      <img src={svg} />
      <div>
        <div>{title}</div>
        <div className="text-gray-400 text-[16px]">{des}</div>
      </div>
    </div>
  );
};

export default InpBox;
