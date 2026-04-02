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

class App extends Component {
  render() {
    const linkList = ["Who we are", "What we do", "Contact us"];
    return (
      <div className="header border-b border-b-[#FFFFFF] shadow-[0_4px_8px_#26323814]">
        <div className="px-[40px] max-w-[1440px] m-[0_auto] ">
          <div className="px-[20px] flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="" />
              <div className="text-[30px] font-[700]">Grid</div>
            </a>
            <nav>
              <div className="flex gap-6">
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
              </div>
            </nav>
            <button className="bg-[#6C5CE7] text-[#fff] p-[8px_16px] rounded-[100px]">
              Sign
            </button>
          </div>
        </div>
        <div
          className="container1 max-w-full "
          style={{
            backgroundImage: `url(${Sh2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "top-right",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="block1 font-[700] py-4 flex flex-col items-center">
              <div className="text-[96px]">
                Combine <span className="text-red-600">fine</span> images
              </div>
              <div className="text-[64px]">To represent a product</div>
            </div>
            <div className="block2 flex items-start gap-5">
              <div className="miniBlock1">
                <div className="max-w-[270px] flex flex-col gap-5 ">
                  <div className="max-w-full">
                    Use mixed grid with imagery, replace with your own photos
                    and descriptions
                  </div>
                  <div>
                    <img src={image2} alt="" className="max-w-full" />
                  </div>
                  <button className="bg-[#6C5CE7] w-full text-[#fff] p-[8px_16px] rounded-[100px]">
                    Sign
                  </button>
                </div>
                <div></div>
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
        <div className="container2 max-w-[1440px] m-[0_auto]">
          <div className="block1">
            <div className="font-[700] text-[32px]">
              Delivering good designs since 1954 🚚💨
            </div>
            <div className="max-w-[1170px] font-[400] text-[24px]">
              We’re the first multi-purpose design kit solutions for businesses.
              We help you bridge gaps between your layouts, templates and
              developers to empower all involved.
            </div>
          </div>
          <div className="block2"></div>
        </div>
      </div>
    );
  }
}

export default App;
