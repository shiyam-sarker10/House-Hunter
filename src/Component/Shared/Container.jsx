import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 py-4">
      {children}
    </div>
  );
};

export default Container;
