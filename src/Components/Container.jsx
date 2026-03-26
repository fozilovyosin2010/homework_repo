import React from "react";

import CardH from "./CardH";

import house1 from "../img/house1.png";
import house2 from "../img/house2.png";
import house3 from "../img/house3.png";

const Container = () => {
  const cardHouse = [
    {
      img: house1,
      local: "London NW8 7JT England",
      title: "Danubius Hotel Regents Park",
      price: 200,
    },
    {
      img: house2,
      local: "London NW8 7JT England",
      title: "The Resident Soho",
      price: 200,
    },
    {
      img: house3,
      local: "London NW8 7JT England",
      title: "London Bridge Hotel",
      price: 200,
    },
  ];
  return (
    <div className="container2 py-[40px]">
      <div className="block1 flex justify-between items-end">
        <div>
          <div className="text-[40px] font-[600]">Our most popular Hotels</div>
          <div className="txt2 max-w-[409px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
        <div className="text-[#24AB70] p-[6px_26px] rounded-[100px] bg-[#24AB701A]">
          View All
        </div>
      </div>
      <div className="block2 py-[20px] flex justify-between gap-3">
        {cardHouse.map((e, i) => {
          return <CardH key={i} {...e} />;
        })}
      </div>
    </div>
  );
};

export default Container;
