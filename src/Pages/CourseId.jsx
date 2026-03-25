import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
import Accordion from "../Component/Accordion";

import walletIcon from "../img/wallet.webp";
const CourseId = () => {
  const { id } = useParams();

  const coursesDes = [
    {
      id: "1",
      title: "HTML & CSS",
      description:
        "Learn HTML5 and CSS3 step by step — from basic tags to responsive layouts. Build real websites, practice semantic markup, and master modern CSS techniques like Flexbox, Grid, and animations. ",
      image: htmlCssIcon,
      contextWhy:
        "This course provides a solid foundation in HTML and CSS. You'll start with the structure of a web page, semantic tags, and attributes, then move on to styling with CSS selectors, colors, fonts, and box model. Advanced sections include positioning, Flexbox, CSS Grid, transitions, animations, and responsive design. By the end, you will be able to create modern, mobile-friendly, and accessible websites.",
      program: [
        {
          id: 1,
          header: "Html basic",
          description: [
            "What is HTML? Document structure",
            "Headings, paragraphs, links, images",
            "Lists: ordered, unordered, description",
            "Forms and input types",
            "Attributes: id, class, title, alt",
          ],
        },
        {
          id: 2,
          header: "Layout & Positioning",
          description: [
            "What is HTML? Document structure",
            "Headings, paragraphs, links, images",
            "Lists: ordered, unordered, description",
            "Forms and input types",
            "Attributes: id, class, title, alt",
          ],
        },
        {
          id: 3,
          header: "Responsive Design",
          description: [
            "What is HTML? Document structure",
            "Headings, paragraphs, links, images",
            "Lists: ordered, unordered, description",
            "Forms and input types",
            "Attributes: id, class, title, alt",
          ],
        },

        {
          id: 4,
          header: "Flexbox",
          description: [
            "What is HTML? Document structure",
            "Headings, paragraphs, links, images",
            "Lists: ordered, unordered, description",
            "Forms and input types",
            "Attributes: id, class, title, alt",
          ],
        },
        {
          id: 5,
          header: "Transition & Animations",
          description: [
            "What is HTML? Document structure",
            "Headings, paragraphs, links, images",
            "Lists: ordered, unordered, description",
            "Forms and input types",
            "Attributes: id, class, title, alt",
          ],
        },
      ],
    },
    {
      id: "2",
      title: "JavaScript",
      description:
        "Master the language of the web and bring interactivity to your projects",
      image: jsIcon,
      contextWhy:
        "This 8-week JavaScript roadmap covers everything from basics like variables, operators, conditions, and loops to advanced topics like closures, OOP, async/await, promises, APIs, modules, web storage, and TypeScript. Each week contains lectures, coding practice, and ends with projects. You will finish the course with practical experience in modern JavaScript development.",
      program: [
        {
          id: 1,
          header: "Basic",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 2,
          header: "Strings & Numbers",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 3,
          header: "Arrays, Callbacks & Objects",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },

        {
          id: 4,
          header: "OOP & Date",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 5,
          header: "DOM, BOM, CRUD",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 6,
          header: "Async Programming",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 7,
          header: "Modules & Storage",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 8,
          header: "TypeScript & Projects",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
        {
          id: 7,
          header: "Advanced Topics",
          description: [
            "What is JavaScript? Running code",
            "Variables (let, var, const) and Data Types",
            "Naming rules, Operators",
            "Conditions: if/else, switch, ternary ",
            "Loops: for, while, do..while",
            "Functions: declaration, expression, arrow, anonymous, IIFE",
            "Scope: global, function, block, module",
          ],
        },
      ],
    },
    {
      id: "3",
      title: "React",
      description:
        "Build modern and dynamic user interfaces using React. Learn components, hooks, routing, and state management to create real-world applications.",
      image: reactIcon,
      contextWhy:
        "This course focuses on building modern frontend applications using React. You will learn component-based architecture, JSX, props, state, hooks, and routing. Advanced topics include state management, performance optimization, and working with APIs. By the end, you will be able to build scalable single-page applications.",
      program: [
        {
          id: 1,
          header: "Introduction to React",
          description: [
            "What is React and why use it",
            "JSX and rendering",
            "Components and props",
          ],
        },
        {
          id: 2,
          header: "State & Events",
          description: [
            "useState hook",
            "Handling events",
            "Conditional rendering",
          ],
        },
        {
          id: 3,
          header: "Hooks",
          description: ["useEffect", "Custom hooks", "Lifecycle understanding"],
        },
        {
          id: 4,
          header: "Routing",
          description: ["React Router", "Dynamic routes", "Navigation"],
        },
        {
          id: 5,
          header: "Project",
          description: ["Build real SPA", "API integration", "Deployment"],
        },
      ],
    },
    {
      id: "4",
      title: "Design",
      description:
        "Learn UI/UX design principles and create beautiful, user-friendly interfaces using modern tools.",
      image: figmaIcon,
      contextWhy:
        "This course teaches the fundamentals of UI/UX design. You will learn color theory, typography, layout design, and user experience principles. You will also work with tools like Figma and create real design projects.",
      program: [
        {
          id: 1,
          header: "Basics of Design",
          description: ["Design principles", "Color theory", "Typography"],
        },
        {
          id: 2,
          header: "UI Design",
          description: ["Layout and grids", "Components", "Design systems"],
        },
        {
          id: 3,
          header: "UX Fundamentals",
          description: ["User flow", "Wireframing", "Prototyping"],
        },
        {
          id: 4,
          header: "Figma",
          description: ["Working with Figma", "Components", "Auto layout"],
        },
        {
          id: 5,
          header: "Projects",
          description: ["Real UI/UX projects", "Portfolio creation"],
        },
      ],
    },
    {
      id: "5",
      title: "Basics of C++",
      description:
        "Start your programming journey with C++. Learn fundamental programming concepts and problem-solving skills.",
      image: cppIcon,
      contextWhy:
        "This course introduces core programming concepts using C++. You will learn syntax, variables, loops, functions, and basic algorithms. It is a strong foundation for further study in programming and computer science.",
      program: [
        {
          id: 1,
          header: "Introduction",
          description: ["What is programming", "C++ setup", "First program"],
        },
        {
          id: 2,
          header: "Variables & Types",
          description: ["Data types", "Input/output", "Operators"],
        },
        {
          id: 3,
          header: "Conditions & Loops",
          description: ["if/else", "switch", "loops"],
        },
        {
          id: 4,
          header: "Functions",
          description: ["Function basics", "Parameters", "Return values"],
        },
        {
          id: 5,
          header: "Problem Solving",
          description: ["Basic algorithms", "Practice tasks"],
        },
      ],
    },
    {
      id: "6",
      title: "Python",
      description:
        "Learn one of the most versatile programming languages used in web development, automation, and data science.",
      image: pythonIcon,
      contextWhy:
        "This course covers Python fundamentals and practical applications. You will learn syntax, data structures, functions, and work with files and libraries. By the end, you will be able to build scripts and simple applications.",
      program: [
        {
          id: 1,
          header: "Introduction",
          description: ["What is Python", "Installation", "First program"],
        },
        {
          id: 2,
          header: "Data Types",
          description: ["Numbers", "Strings", "Lists & dictionaries"],
        },
        {
          id: 3,
          header: "Control Flow",
          description: ["Conditions", "Loops", "Functions"],
        },
        {
          id: 4,
          header: "Working with Data",
          description: ["Files", "Modules", "Libraries"],
        },
        {
          id: 5,
          header: "Projects",
          description: ["Mini projects", "Automation scripts"],
        },
      ],
    },
  ];

  useEffect(() => {
    document.title = searchId.title;
  }, []);

  const searchId = coursesDes.find((e) => e.id === id);

  const btnList = [
    {
      text: "5 April",
      children: (
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
          className="lucide lucide-calendar"
        >
          <path d="M8 2v4"></path>
          <path d="M16 2v4"></path>
          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
          <path d="M3 10h18"></path>
        </svg>
      ),
    },
    {
      text: "6 classes per week",
      children: (
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
          className="lucide lucide-clock"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },

    {
      text: "3 portfolio projects",
      children: (
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
          className="lucide lucide-list"
        >
          <path d="M3 12h.01"></path>
          <path d="M3 18h.01"></path>
          <path d="M3 6h.01"></path>
          <path d="M8 12h13"></path>
          <path d="M8 18h13"></path>
          <path d="M8 6h13"></path>
        </svg>
      ),
    },
    {
      text: "Group of 10–12 people",
      children: (
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
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  const cardList = [
    {
      children: (
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
          class="lucide lucide-cpu w-10 h-10"
        >
          <rect width="16" height="16" x="4" y="4" rx="2"></rect>
          <rect width="6" height="6" x="9" y="9" rx="1"></rect>
          <path d="M15 2v2"></path>
          <path d="M15 20v2"></path>
          <path d="M2 15h2"></path>
          <path d="M2 9h2"></path>
          <path d="M20 15h2"></path>
          <path d="M20 9h2"></path>
          <path d="M9 2v2"></path>
          <path d="M9 20v2"></path>
        </svg>
      ),
      title: "Intel Core i5 (10-го поколения)",
      des,
    },
    {
      children: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-monitor w-10 h-10"
        >
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#f3f4f6] px-[20px]">
      <div className="sec">
        <nav className="flex gap-1 items-center p-[10px]">
          <Link to={"/"} className="font-[400] text-[#333232]">
            Home
          </Link>
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
            className="p-[4px] text-[15px] lucide lucide-chevron-right text-gray-400"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <div className="font-[500]">{searchId.title}</div>
        </nav>
        <div className="container1 flex justify-between items-center p-[10px_20px]">
          <div className="block1 flex flex-col gap-4 items-start">
            <div className="text-[55px] text-blue-400 font-bold">
              {searchId.title}
            </div>
            <div className="text-[20px] max-w-[618px]">
              {searchId.description}
            </div>
            <button className="relative border-blue-400 p-[12px_32px] rounded-[20px] border flex">
              <span className="mr-3">Sign up for a cource</span>
              <svg
                className="arr-1 absolute transition-all duration-800"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ right: "16px", fill: "rgb(57, 160, 204)" }}
              >
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
              </svg>
            </button>
          </div>
          <img src={searchId.image} className="block2" />
        </div>
        <div className="container2 flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex justify-between gap-[15px]">
              {btnList.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="flex w-full p-[15px_30px] rounded-[20px] shadow-[2px_2px_8px_#ccc] gap-3 bg-[#fff]"
                  >
                    <div className="text-[#0EA5E9]">{e.children}</div>
                    <span>{e.text}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-[20px] px-[40px]">
              <div className="flex p-[15px_30px] rounded-[20px] shadow-[2px_2px_8px_#ccc] gap-[20px] bg-[#fff] w-full justify-center">
                <div>8 seats left</div>

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
                  className="text-[#0EA5E9] lucide lucide-sofa"
                >
                  <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
                  <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path>
                  <path d="M4 18v2"></path>
                  <path d="M20 18v2"></path>
                  <path d="M12 4v9"></path>
                </svg>
              </div>
              <div className="flex p-[15px_30px] rounded-[20px] shadow-[2px_2px_8px_#ccc] gap-[20px] bg-[#fff] w-full justify-center">
                <div>Certificate upon completion</div>
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
                  className="text-[#0EA5E9] lucide lucide-medal"
                >
                  <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
                  <path d="M11 12 5.12 2.2"></path>
                  <path d="m13 12 5.88-9.8"></path>
                  <path d="M8 7h8"></path>
                  <circle cx="12" cy="17" r="5"></circle>
                  <path d="M12 18v-2h-.5"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#fff] rounded-[20px] p-[20px_40px] gap-[40px]">
            <div className="text-[30px] font-[700]">Why {searchId.title}?</div>
            <div className="text-[18px] font-[400]">{searchId.contextWhy}</div>
          </div>
        </div>

        <div className="container3 flex justify-between items-center mt-[40px] bg-[#fff] rounded-[20px] p-[20px_40px]">
          <img src={walletIcon} className="w-[256px]" />
          <div>
            <div className="text-[40px] text-[#0EA5E9] font-[700]">
              Average salaries in IT professions
            </div>
            <div className="relative">
              <div className="flex justify-between">
                <div className="text-[18px] text-gray-600">
                  <div className="px-[10px] bg-[#fff] z-20 relative">
                    Junior
                  </div>
                  <span className="text-[#0EA5E9] font-[600]">250$</span>
                </div>
                <div className="text-[18px] text-gray-600">
                  <div className="px-[10px] bg-[#fff] z-20 relative">
                    Middle
                  </div>
                  <span className="text-[#0EA5E9] font-[600]">600$</span>
                </div>
                <div className="text-[18px] text-gray-600">
                  <div className="px-[10px] bg-[#fff] z-20 relative">
                    Senior
                  </div>
                  <span className="text-[#0EA5E9] font-[600]">1500$</span>
                </div>
              </div>
              <div className="w-full absolute left-0 h-[2px] bg-gray-400 top-[15px] z-0"></div>
            </div>
          </div>
        </div>
        <div className="container4 mt-[40px]">
          <div className="text-[35px] font-[700] flex justify-center gap-3">
            <span className="text-[#0EA5E9]">Minimum </span>required{" "}
            <span className="text-[#0EA5E9]"> laptop </span> for thecourse
          </div>
          <div></div>
        </div>
        <div className="container py-[40px] ">
          <div className="flex justify-center font-[700] text-[35px] py-[40px]">
            Course program
          </div>
          <div className="flex flex-col gap-4">
            {searchId.program.map((e) => {
              return <Accordion {...e} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseId;
