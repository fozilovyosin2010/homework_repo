import React from "react";

import hYard from "../img/hYard.png";

const ContainerDis = () => {
  return (
    <div className="container4 py-[40px] flex justify-between items-center">
      <img src={hYard} />
      <div className="block2 flex flex-col justify-between items-start gap-[30px]">
        <div className="text-[40px] font-[600]">Discover our History</div>
        <div className="flex flex-col gap-[30px]">
          <div className="max-w-[497px] txt2 text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </div>
          <div className="max-w-[497px] txt2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
        </div>
        <button className="bg-[#24AB70] p-[10px_32px] text-[#fff] rounded-[35px] font-[400] text-[14px]">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ContainerDis;
