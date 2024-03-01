import React from "react";
import { useState } from "react";
const data = [
  {
    section: "what is an HTML?",
    content:
      "HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.",
  },
  {
    section: "what is Css?",
    content:
      "CSS is the acronym of “Cascading Style Sheets”. CSS is a computer language for laying out and structuring web pages (HTML or XML). This language contains coding elements and is composed of these “cascading style sheets” which are equally called CSS files (. css).",
  },
  {
    section: "what is JavaScript?",
    content:
      "JavaScript is a scripting language used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page. Features like: animated graphics. photo slideshows.",
  },
];
const Accordian = () => {
  const [accordionData, setAccordionData] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const handleClick = (index) => {
    setToggle(!toggle);
    setActive(index);
  };
  return (
    <div className="flex justify-center flex-col items-center gap-4 m-10">
      {accordionData.map((item, index) => {
        return (
          <div className="border p-3 w-full">
            <div className="flex"><div className="m-2 p-3 border font-semibold bg-gray-200">
              {item.section}
            </div>
            <button onClick={() => handleClick(index)}>{toggle ? "close" : "open"}</button></div>
      {active===index && (<div style={{display:toggle ? "block" : "none"}}>{data[active].content}</div>)}
    </div>
     );
    })}
 </div>
);
};

export default Accordian;
