import React, { useEffect, useState } from "react";
import CourseCard from "../Component/CourseCard";

import cIcon from "../img/cshIcon.png";
import cppIcon from "../img/cppIcon.png";
import figmaIcon from "../img/figmaIcon.png";
import gitIcon from "../img/gitIcon.png";
import htmlCssIcon from "../img/htmlCssIcon.png";
import jsIcon from "../img/jsIcon.png";
import kidsIcon from "../img/kidsIcon.png";
import mobileIcon from "../img/mobileIcon.png";
import pythonIcon from "../img/pythonIcon.png";
import reactIcon from "../img/reactIcon.png";

const Home = () => {
  const tabList = ["All", "Frontend", "Backend", "Mobile", "Kids", "Design"];

  const [fltr, setFltr] = useState("All");

  function handleClickTab(text) {
    setFltr(text);
  }

  const courseList = [
    {
      id: 1,
      back: "contCardRed ",
      border: "red",
      header: "HTML & CSS",
      img: htmlCssIcon,
      text: "Learn the building blocks of the web",
      duration: "1 month",
      type: "Frontend",
    },
    {
      id: 2,
      back: "contCardYellow ",
      border: "yellow",
      header: "JavaScript",
      img: jsIcon,
      text: "Master programming fundamentals with JavaScript",
      duration: "2 months",
      type: "Frontend",
    },
    {
      id: 3,
      back: "contCardBlue ",
      border: "blue",
      header: "React",
      img: reactIcon,
      text: "Build interactive UIs with the popular JavaScript library",
      duration: "3 months",
      type: "Frontend",
    },
    {
      id: 4,
      back: "contCardGreen ",
      border: "green",
      header: "Design",
      img: figmaIcon,
      text: "Create beautiful, functional digital experiences",
      duration: "4 months",
      type: "Design",
    },
    {
      id: 5,
      back: "contCardBlueSky ",
      border: "blueSky",
      header: "Basics of C++",
      img: cppIcon,
      text: "Start your programming journey with C++",
      duration: "1 month",
      type: "Backend",
    },
    {
      id: 6,
      back: "contCardGreenSky ",
      border: "greenSky",
      header: "Python",
      img: pythonIcon,
      text: "Learn one of the most versatile programming languages",
      duration: "4 months",
      type: "Backend",
    },
    {
      id: 7,
      back: "contCardPurple ",
      border: "purple",
      header: "C#",
      img: cIcon,
      text: "Build versatile applications with this powerful language",
      duration: "3 months",
      type: "Backend",
    },
    {
      id: 8,
      back: "contCardRed ",
      border: "red",
      header: "Git",
      img: gitIcon,
      text: "Master version control to collaborate on coding",
      duration: "1 month",
      type: "Frontend",
    },
    {
      id: 9,
      back: "contCardBlueSky ",
      border: "blueSky",
      header: "Flutter",
      img: mobileIcon,
      text: "Build cross-platform mobile apps with a single codebase",
      duration: "4 months",
      type: "Mobile",
    },
    {
      id: 10,
      back: "contCardBlue ",
      border: "blue",
      header: "Programming for teenagers",
      img: kidsIcon,
      text: "Programming fundamentals for young learners",
      duration: "10 months",
      type: "Kids",
    },
  ];

  const [showM, setShowM] = useState(false);

  function handleClickShow() {
    setShowM((e) => !e);
  }
  return (
    <div className="bg-[#152446] text-[#fff] font-bold">
      <div className="sec">
        <div className="container1 flex flex-col items-center">
          <div className="text-[50px] p-[20px]">Academy Courses</div>
          <div className="max-w-[672px] text-[18px] text-center text-[#ccc] text-[16px] font-[400]">
            Choose your learning path and build skills in Frontend, Backend,
            Mobile development, or start with our Kids program
          </div>
        </div>
        <div className="flex justify-center p-[10px_20px] gap-4">
          {tabList.map((e, i) => {
            return (
              <div
                onClick={() => handleClickTab(e)}
                key={i}
                className={`${e === fltr ? "bg-[#fff] text-black" : "text-[#fff] bg-[#161f2d] hover:bg-gray-700 hover:scale-110 duration-500"} flex justify-center items-center cursor-pointer rounded-full p-[10px_40px] text-[#ccc] text-[16px] font-[400]`}
              >
                {e}
              </div>
            );
          })}
        </div>
        <div className="container2">
          <div className="grid grid-cols-3 gap-[25px] p-[10px_20px]">
            {courseList.map((e, i) => {
              return showM ? (
                <CourseCard key={i} {...e} />
              ) : !showM && i < 6 ? (
                <CourseCard key={i} {...e} />
              ) : null;
            })}
          </div>
          <div className="flex justify-center py-[20px]">
            <button
              onClick={handleClickShow}
              className="bg-[#304983] p-[5px_10px] font-[600] border border-gray-400 rounded-[50px] flex items-center gap-2 p-[8px_32px]"
            >
              <span>Show {showM ? "Less" : "All (4 more)"}</span>
              <div
                className={`${showM ? "rotate-[0deg]" : "rotate-[180deg]"} duration-300`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="jsx-dcada180a3e41ef6 w-4 h-4 transition-transform duration-300 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                    className="jsx-dcada180a3e41ef6"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
