import React from "react";
import { Check } from "@boxicons/react";

import bgBox from "../imgs/bgBox.png";

const Box = ({ name, title, ulList, btnTxt, checkColor, active }) => {
  return (
    <div
      className={`relative ${active ? "shadow-[0_16px_24px_#26323814] " : null} max-md:w-full shadow-[0_4px_8px_#26323814]`}
    >
      <div className="relative h-full z-20 flex flex-col justify-between gap-[30px] p-[20px_40px] bg-[#fff]">
        <div className="block1">
          <div
            className={`text-[#6C5CE7] text-[18px] font-[700] flex justify-between`}
          >
            <span>{name}</span>
            {active ? (
              <div className="text-[12px] font-[800] border p-[5px_10px] rounded-[15px]">
                BEST!
              </div>
            ) : null}
          </div>
          <div className="font-[800]">
            <span className="text-[48px] text-[#2D3436]">{title[0]}</span>
            <sub className="text-[#2D3436]">/{title[1]}</sub>
          </div>
          {/* checklist */}
          <div className="flex flex-col gap-3">
            {ulList.map((e, i) => {
              return (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="rounded-full"
                    style={{ background: checkColor }}
                  >
                    <Check className="p-1" />
                  </div>
                  <div className="text-[18px] font-[400]">{e}</div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          className={`${active ? "bg-[#6C5CE7] text-[#fff]" : "text-[#6C5CE7] border border-[#ADADAD]"} text-[18px] p-[10px_20px] rounded-[10px]`}
        >
          {btnTxt}
        </button>
      </div>

      {active ? (
        <img
          src={bgBox}
          alt=""
          className="absolute bottom-[-30px] left-[-50px] w-[200px] "
        />
      ) : null}
    </div>
  );
};

export default Box;
