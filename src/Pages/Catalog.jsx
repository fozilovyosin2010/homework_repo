import React from "react";

import houseP from "../img/houseProf.png";

import { Collapse, Rate } from "antd";

import Container from "../Components/Container";
import ContainerDis from "../Components/ContainerDis";
import perF from "../img/PerfP.png";
const Catalog = () => {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.`;
  const items = [
    {
      key: "1",
      label: "How far is nearset bus station ?",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "Why this project is better than others ?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Estimated time of completion ?",
      children: <p>{text}</p>,
    },
  ];
  return (
    <div>
      <div className="container1 flex justify-between items-center">
        <img src={houseP} />
        <div className="block2 flex flex-col items-start gap-[30px]">
          <div>
            <div className="text-[#24AB70] font-[400] text-[13px]">
              London NW8 7JT England
            </div>
            <div className="text-[27px] font-[600]">
              Danubius Hotel Regents Park
            </div>
          </div>
          <div>
            <div>$200 Per Night</div>
            <div className="flex gap-2">
              <Rate defaultValue={4.8} disabled />
              <span>4.8</span>
            </div>
          </div>
          <div className="max-w-[441px] txt2 text-[10px]">
            Как уже неоднократно упомянуто, базовые сценарии поведения
            пользователей рассмотрены исключительно в разрезе маркетинговых и
            финансовых предпосылок. Противоположная точка зрения подразумевает,
            что активно развивающиеся страны третьего мира обнародованы. Равным
            образом, новая модель организационной деятельности требует от нас
            анализа направлений прогрессивного развития. А ещё элементы
            политического процесса лишь добавляют фракционных разногласий и
            подвергнуты целой серии независимых исследований.
          </div>
          <div className="bg-[#24AB70] p-[10px_32px] text-[#fff] rounded-[35px] font-[400] text-[14px]">
            To Book Now
          </div>
        </div>
      </div>
      <Container />
      <ContainerDis />
      <div className="container4 flex justify-between px-[40px] my-[40px]">
        <div className="block1">
          <div className="font-[600] text-[48px]">
            <div>Frequently Asked</div>
            <div className="text-[#24AB70]">Questions</div>
          </div>
          <div className="max-w-[410px] txt2 text-[16px]">
            You can book massages 7 days a week from 6 am to 11 pm, including
            public holidays.
          </div>
        </div>
        <div className="block2 w-[400px]">
          <Collapse accordion items={items} />
        </div>
      </div>
      <div className="container5 flex justify-between items-center">
        <img src={perF} alt="" className="max-w-[522px]" />
        <div className="block2 txt2 flex flex-col items-start gap-[30px] text-[14px]">
          <div className="text-[37px] font-[600]">About Us</div>
          <div className="max-w-[467px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </div>
          <div className="max-w-[467px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="bg-[#24AB70] p-[10px_32px] text-[#fff] rounded-[35px] font-[400] text-[14px]">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
