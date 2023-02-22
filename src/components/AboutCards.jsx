import React from "react";


const AboutCards = (props) => {
  return (
    <div className="flex flex-col border rounded-xl px-7 py-10 text-left">
      <div>
        {props.icon} 
      </div>
      <h3 className="text-lg mb-4 font-bold">
        {props.heading}
      </h3>
      <p className="text-sm">
        {props.text}
      </p>
    </div>
  );
};

export default AboutCards;
