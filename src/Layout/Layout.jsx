import React from "react";
import { Link, Outlet } from "react-router";

import faceBook from "../img/faceBook.svg";
import google from "../img/google.svg";
import instag from "../img/instag.svg";

import map from "../img/map.png";

const Layout = () => {
  return (
    <div className="max-w-[1280px] m-[0_auto] open-sans">
      <div className="header flex justify-between p-[10px_20px]">
        <div>logo</div>
        <div className="flex gap-3">
          <Link to={"catalog"}>Booking</Link>
          <div>Facilities</div>
          <div>About Us</div>
          <div>Location</div>
          <div>Contact</div>
        </div>
        <button className="bg-[#24AB70] p-[10px_32px] text-[#fff] rounded-[35px] font-[400] text-[14px]">
          Login
        </button>
      </div>
      <div className="min-h-screen px-[20px]">
        <Outlet />
      </div>
      <div className="container relative">
        <div>
          <img src={map} className="w-full" />
        </div>

        <div className="absolute bottom-[30px] left-[30px] right-[30px] rounded-[16px] bg-[#fff] p-[20px_40px] flex justify-between items-end gap-[30px]">
          <div className="flex flex-col gap-[30px]">
            <div className="text-[36px] font-medium">
              Location of our Hotelos
            </div>
            <div className="text-[16px] font-[400] text-[#555555] max-w-[510px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea ipsa
              molestiae ullam libero minima accusantium vitae, eum voluptatum
              nisi eius veniam fuga placeat a praesentium labore enim dolores
              saepe magnam?
            </div>
          </div>
          {/* form */}
          <div className="bg-[#dedcdc] rounded-[35px] relative">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-[10px_20px] w-[300px]"
            />
            <button className="absolute top-0 bottom-0 right-0 bg-[#24AB70] p-[10px_32px] text-[#fff] rounded-[35px] font-[400] text-[14px]">
              Contanct
            </button>
          </div>
        </div>
      </div>
      <div className="footer max-w-[1062px] m-[0_auto] py-[40px]">
        <div className="flex justify-between items-center ">
          <div className="block1 gap-3 flex flex-col">
            <div className="max-w-[280px] text-[#5d5a5a] text-[16px] font-[500]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="flex gap-[30px]">
              <img className="w-[20px]" src={faceBook} />
              <img className="w-[20px]" src={instag} />
              <img className="w-[20px]" src={google} />
            </div>
          </div>
          <div className="flex items-start gap-[100px]">
            <div className="block2 flex-col flex gap-[20px]">
              <div className="font-[500] text-[24px]">Home</div>
              <div>Facilities</div>
              <div>About Us</div>
              <div>Location</div>
              <div>Contact</div>
            </div>
            <div className="block3 flex-col flex gap-[20px]">
              <div className="font-[500] text-[24px]">Help</div>
              <div>About</div>
              <div>Us</div>
              <div>Help center</div>
              <div>Privacy policy</div>
              <div>FAQs</div>
            </div>
            <div className="block4 flex-col flex gap-[20px]">
              <div className="font-[500] text-[24px]">Get the app</div>
              <div>iOS app</div>
              <div>Android app</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
