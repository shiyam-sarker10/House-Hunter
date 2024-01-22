import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-[#144272] text-white px-4 py-2 custom-border font-medium">
      {title}
    </button>
  );
};

export default Button;
