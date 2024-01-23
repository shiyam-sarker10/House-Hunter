import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-[#8EA7E9] text-white px-4 py-2 custom-border font-medium">
      {title}
    </button>
  );
};

export default Button;
