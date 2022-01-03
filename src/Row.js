import React from "react";

const Row = ({ label, value }) => {
  return (
    <div className="flex flex-row">
      <label className="font-bold mr-2">{label}:</label>
      <div>{value}</div>
    </div>
  );
};

export default Row;
