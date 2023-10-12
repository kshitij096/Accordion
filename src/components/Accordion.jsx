/* eslint-disable react/prop-types */
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!isExpanded);
  };
  return (
    <>
      <div className="border rounded shadow mb-4 justify-center items-center ">
        <div
          className="flex items-center justify-between p-4 cursor-pointer bg-gray-200  "
          onClick={toggleAccordion}
        >
          <h2 className="text-lg font-semibold ">{title}</h2>
          <div
            className={`transform transition-transform  ${
              isExpanded ? "rotate-180" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {isExpanded && (
          <div className="p-4 border-t overflow-hidden transition-max-h duration-150 ease-out ">
            <p className="text-gray-700  ">{content}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
