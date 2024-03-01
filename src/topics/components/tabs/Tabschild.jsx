import React from "react";
import { useState } from "react";

const Tabschild = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)
 const handleTabClick =(index) =>{
setActiveTab(index)
  }
  return (
    <div className="tabs">
      <div className="tab_buttons">
        {
        tabs.map((item, index) => {
          return <button className="border p-2 m-2 bg-green-300" onClick={()=>handleTabClick(index)} key={index}>{item.title}</button>;
        })
        }
      </div>
      <div className="tabs_content">
{tabs[activeTab].content}

      </div>
    </div>
  );
};

export default Tabschild;
