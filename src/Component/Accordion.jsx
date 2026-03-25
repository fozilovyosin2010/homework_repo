import React, { useState } from "react";

const Accordion = ({ id, header, description }) => {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen((e) => !e);
  }
  return (
    <div
      onClick={handleClickOpen}
      className="rounded-[15px] hover:border hover:border-[#0EA5E9]  bg-[#fff] p-[10px_20px]"
    >
      <div className="idDiv flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-[#0EA5E9] rounded-[20px] flex justify-center items-center font-bold text-[30px] text-[#fff] w-[60px] h-[60px]">
            {id}
          </div>
          <div className="text-[20px] font-[600]">{header}</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${open ? "rotate-180" : "rotate-0"} duration-300`}
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
      {open ? (
        <div className="flex flex-col border-l-[5px] rounded-[10px] p-[10px_20px] mt-[20px] border-l-[#0EA5E9]">
          {description.map((e, i) => {
            return (
              <div className="flex gap-2" key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-circle-check-big w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <div>{e}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Accordion;
