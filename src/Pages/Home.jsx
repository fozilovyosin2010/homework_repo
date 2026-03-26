import React from "react";

import house from "../img/houseHalf.png";
import videoIcon from "../img/videoIcon.svg";

import personIcon from "../img/personIcon.svg";
import locationIcon from "../img/locationIcon.svg";
import calendarIcon from "../img/calendarIcon.svg";

import InpBox from "../Components/InpBox";

import coffe from "../img/coffe.svg";
import flash from "../img/flash.svg";
import parkingArea from "../img/parking-area.svg";
import sport from "../img/sport.svg";
import swimmer from "../img/swimmer.svg";
import workspace from "../img/workspace.svg";
import dotsIcon from "../img/dotsIcon.svg";
import wifiIcon from "../img/wifiIcon.png";

import Card from "../Components/Card";
import Container from "../Components/Container";
import ContainerDis from "../Components/ContainerDis";
import person from "../img/personProf.png";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const inpList = [
    { svg: locationIcon, title: "location", des: "United States" },
    { svg: calendarIcon, title: "Check in", des: "10 Jun 2021" },
    { svg: calendarIcon, title: "Check out", des: "15 Jun 2021" },
    { svg: personIcon, title: "Rooms for", des: "1 room, 2 guests" },
  ];

  const cardList = [
    { svg: workspace, title: "Private Workspace" },
    { svg: parkingArea, title: "Parking Area" },
    { svg: coffe, title: "Breakfast" },
    { svg: wifiIcon, title: "Free Wifi" },
    { svg: flash, title: "Free Electricity" },
    { svg: swimmer, title: "Swimming Pool" },
    { svg: sport, title: "exercise Space" },
    { svg: dotsIcon, title: "Other Service" },
  ];

  return (
    <div>
      <div className="container1 bg-[#24AB700A] pl-[40px] pt-[40px] rounded-[50px] flex items-center gap-[30px] relative">
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
            {inpList.map((e, i) => {
              return <InpBox key={i} {...e} />;
            })}
          </div>
        </div>
      </div>
      <Container />
      <div className="container3 flex justify-between items-center py-[40px]">
        <div className="block1 flex flex-col gap-[30px] items-start ">
          <div className="max-w-[411px] text-[40px] font-[600]">
            We do our best facilities provide you
          </div>
          <div className="txt2 max-w-[386px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy{" "}
          </div>
          <button className="bg-[#24AB70] p-[10px_32px] text-[#fff] rounded-[35px] font-[400] text-[14px]">
            Contact Now
          </button>
        </div>
        <div className="block2 grid grid-cols-4 gap-[20px]">
          {cardList.map((e, i) => {
            return <Card key={i} {...e} />;
          })}
        </div>
      </div>
      <ContainerDis />
      <div className="container5 my-[60px]">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex items-center">
            <div className="bg-[#FAFAFA] rounded-[20px] flex items-center justify-between">
              <div className="p-[30px_60px] rounded-[20px] flex flex-col justify-between gap-[30px]">
                <div className="max-w-[628px] txt2 text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </div>
                <div>
                  <div className="font-[600] text-[24px]">
                    Alexandr Ivchenko
                  </div>
                  <div className="txt2 text-[16px]">Businessman</div>
                </div>
              </div>
              <img src={person} className="rounded-r-[20px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FAFAFA] rounded-[20px] flex justify-between">
              <div className="p-[30px_60px] rounded-[20px] flex flex-col gap-[40px]">
                <div className="max-w-[628px] txt2 text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </div>
                <div>
                  <div className="font-[600] text-[24px]">
                    Alexandr Ivchenko
                  </div>
                  <div className="txt2 text-[16px]">Businessman</div>
                </div>
              </div>
              <img src={person} className="rounded-r-[20px]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FAFAFA] rounded-[20px] flex justify-between">
              <div className="p-[30px_60px] rounded-[20px] flex flex-col gap-[40px]">
                <div className="max-w-[628px] txt2 text-[16px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry.
                </div>
                <div>
                  <div className="font-[600] text-[24px]">
                    Alexandr Ivchenko
                  </div>
                  <div className="txt2 text-[16px]">Businessman</div>
                </div>
              </div>
              <img src={person} className="rounded-r-[20px]" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
