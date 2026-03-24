import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({
  id,
  back,
  header,
  img,
  text,
  duration,
  type,
  border,
}) => {
  return (
    <Link
      to={`/course/${id}`}
      className={`flex flex-col gap-3 hover:scale-110 duration-300 rounded-[20px] p-[20px_40px] max-w-[500px] ${border} ${back}`}
    >
      <div className="flex justify-between gap-[30px]">
        <div className="text-[25px] font-[800] text-[#fff] max-w-[200px]">
          {header}
        </div>
        <div className={`${back} rounded-[50px] p-[10px]`}>
          <img src={img} className="w-[100px] rounded-[50px]" />
        </div>
      </div>
      <div className="text-[18px] font-[500] text-[#ccc]">{text}</div>
      <div className="flex gap-2 items-center">
        <div
          className={`p-[5px_10px] rounded-[15px] flex items-center gap-1 font-[400] ${back}`}
        >
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 md:w-4 md:h-4 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>{duration}</div>
        </div>
        <div className="text-[#ccc] font-[400]">{type}</div>
      </div>
    </Link>
  );
};

export default CourseCard;
