import React from "react";

const Row = ({ label, children }) => {
  return (
    <div className="flex flex-row">
      <label className="font-bold mr-2">{label}:</label>
      <div>{children}</div>
    </div>
  );
};

export default Row;
