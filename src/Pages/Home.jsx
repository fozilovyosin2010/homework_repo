import React from "react";

import house from "../img/houseHalf.png";
import videoIcon from "../img/videoIcon.svg";

import personIcon from "../img/personIcon.svg";
import locationIcon from "../img/locationIcon.svg";
import calendarIcon from "../img/calendarIcon.svg";
import InpBox from "../Components/InpBox";

const Home = () => {
  const inpList = [
    { svg: locationIcon, title: "location", des: "United States" },
    { svg: calendarIcon, title: "Check in", des: "10 Jun 2021" },
    { svg: calendarIcon, title: "Check out", des: "15 Jun 2021" },
    { svg: personIcon, title: "Rooms for", des: "1 room, 2 guests" },
  ];
  return (
    <div>
      <div className="container1 bg-[#24AB700A] px-[40px] rounded-[50px] flex items-center gap-[30px] relative">
        <div className="block1 flex flex-col gap-[30px] pb-[80px]">
          <div className="text-[64px] font-[600] max-w-[600px]">
            Find your perfect place to stay
          </div>
          <div className="max-w-[515px] txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <img src={videoIcon} className="bg-[#f1efef] rounded-full p-1" />
              <span className="font-[500] text-[20px]">Watch video</span>
            </div>
          </div>
        </div>
        <div className="block2 rounded-tr-[50px]">
          <img src={house} />
        </div>
        <div className="absolute left-[70px] max-w-[1000px] w-full bottom-[10px] rounded-[50px] shadow-[2px_2px_8px_#ccc] m-[20px_40px] bg-[#fff] p-[20px_40px]">
          <div className="flex justify-between">
            {inpList.map((e) => {
              return <InpBox {...e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
