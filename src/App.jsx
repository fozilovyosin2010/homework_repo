import React, { Component } from "react";

import logo from "./imgs/icon-layout.svg";

import image2 from "./imgs/image2.png";
import image1 from "./imgs/image1.png";
import image3 from "./imgs/image3.png";
import image4 from "./imgs/image4.png";
import image5 from "./imgs/image5.png";
import image6 from "./imgs/image6.png";
import image7 from "./imgs/image7.png";

import Sh2 from "./imgs/Sh2.png";
import dots from "./imgs/Dots1.png";
import menuIcon from "./imgs/menuIcon.png";

import energy from "./imgs/energy.png";
import like from "./imgs/like.png";
import sales from "./imgs/sales.png";
import call from "./imgs/call.png";

import Card from "./Component/Card";

class App extends Component {
  render() {
    const cardList = [
      {
        icon: call,
        title: "Support",
        des: "Delivering faster and more personalized support with shared screens and cool design systems for Figma",
        bgColor: "#E84393",
      },
      {
        icon: sales,
        title: "Sales growth",
        des: "Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot",
        bgColor: "#0984E3",
      },
      {
        icon: energy,
        title: "Coponents-driven",
        des: "Delivering faster and more personalized support with shared screens and cool design systems for Figma",
        bgColor: "#6C5CE7",
      },
      {
        icon: like,
        title: "Swap the icon",
        des: "You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter",
        bgColor: "#00B894",
      },
    ];
    const linkList = ["Who we are", "What we do", "Contact us"];
    return (
      <div className="inter">
        <div className="header border-b border-b-[#ccc] shadow-[0_4px_8px_#26323814]">
          <div className="px-[40px] sec p-[10px_20px] flex items-center justify-between max-md:p-[5px_10px]">
            <div className="flex items-center gap-1">
              <button className="w-[40px] h-[40px] hidden max-md:flex gap-1 flex-col">
                <img src={menuIcon} alt="" />
              </button>
              <a href="#" className="flex items-center gap-1">
                <img src={logo} alt="" className="max-md:hidden" />
                <div className="text-[30px] font-[700] text-[#5C5C5C] max-md:text-[24px]">
                  Grid
                </div>
              </a>
            </div>
            <nav className="flex gap-6 max-md:hidden">
              <a href="#" className="font-[700] mr-[15px]">
                How it works
              </a>
              <ul className="list-disc marker:text-[#FDCB6E] flex gap-6">
                {linkList.map((e, i) => {
                  return (
                    <li key={i}>
                      <a href="#" className="text-purple-500">
                        {e}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <button className="bg-[#6C5CE7] text-[#fff] p-[8px_32px] rounded-[100px] max-md:rounded-[8px] max-md:p-[4px_24px]">
              Sign
            </button>
          </div>
        </div>
        <div
          className="container1 min-w-[300px] overflow-hidden"
          style={{
            backgroundImage: `url(${Sh2}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 50%",
            backgroundPosition: "top-right",
          }}
        >
          <div
            className="flex flex-col items-center"
            style={{
              backgroundImage: `url(${dots})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionY: "top",
              backgroundPositionX: "right",
              backgroundSize: "150px 150px",
            }}
          >
            <div className="block1 font-[700] py-6 flex flex-col items-center">
              <div className="text-[96px] text-center max-md:text-[64px]">
                Combine
                <span className="text-red-600"> fine</span> images
              </div>
              <div className="text-[64px] max-md:text-[24px] text-[#2D3436]">
                To represent a product
              </div>
            </div>
            <div className="block2 flex items-start gap-5 px-6">
              <div className="miniBlock1 max-w-[270px] flex flex-col justify-between gap-5 ">
                <div className="max-w-full">
                  Use mixed grid with imagery, replace with your own photos and
                  descriptions
                </div>
                <div>
                  <img src={image2} alt="" className="max-w-full" />
                </div>
                <button className="bg-[#6C5CE7] w-full text-[#fff] p-[8px_16px] rounded-[100px]">
                  Sign
                </button>
              </div>

              <div className="miniBlock2 flex flex-col gap-5">
                <div className="flex gap-5 items-end">
                  <div>
                    <img src={image1} className="max-w-[470px]" alt="" />
                  </div>
                  <div className="max-w-[370px] flex flex-col gap-4">
                    <div className="max-w-full">
                      This is multipurpose grid, it fits for portfolio, services
                      or agency web site
                    </div>
                    <div className="flex justify-between gap-2">
                      <img src={image5} alt="" className="w-[170px]" />
                      <img src={image6} alt="" className="w-[170px]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between gap-5 items-start">
                  <img src={image3} className="w-[238px]" alt="" />
                  <img src={image4} alt="" className="w-[370px]" />
                  <img src={image7} className="w-[170px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2 sec p-[20px]">
          <div className="block1">
            <div className="font-[700] text-[32px] text-[#2D3436] max-md:text-[24px]">
              Delivering good designs since 1954 🚚💨
            </div>
            <div className="max-w-[1170px] font-[400] text-[24px] max-md:text-[18px]">
              We’re the first multi-purpose design kit solutions for businesses.
              We help you bridge gaps between your layouts, templates and
              developers to empower all involved.
            </div>
          </div>
          <div className="block2 grid grid-cols-4 max-md:grid-cols-2 gap-[30px] py-3 max-lg:">
            {cardList.map((e, i) => {
              return <Card key={i} {...e} />;
            })}
          </div>
        </div>
        <div className="container3 sec p-[20px]">
          <div>
            <h1 className="text-[64px] font-[800]">Affordable pricing</h1>
            <p className="text-[#9f9e9e] font-[700]">
              Bill me <span className="text-[#6C5CE7]"> monthly </span> • yearly
            </p>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
