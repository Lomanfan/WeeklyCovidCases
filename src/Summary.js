import React from "react";
import { BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";
import numberWithCommas from "./Common/numberWithCommas";
import "./styles.css";

const Summary = ({ data }) => {
  const changeInCases = ({ data }) => {
    const numOfChanges = data.active_cases_change;
    if (numOfChanges === 0) return <div>[0]</div>;
    if (numOfChanges > 0)
      return (
        <div>
          [{numberWithCommas(numOfChanges)}
          <BsArrowUpShort style={{ display: "inline" }} />]
        </div>
      );
    if (numOfChanges < 0)
      return (
        <div>
          [{numberWithCommas(numOfChanges)}
          <BsArrowDownShort style={{ display: "inline" }} />]
        </div>
      );
  };

  return (
    data && (
      <div>
        <h2 className="text-lg">Last updated on: {data.date}</h2>
        <div className="summary">
          <div>
            Current Total Active Cases: {numberWithCommas(data.active_cases)}
          </div>
          <div>{changeInCases({ data })}</div>
        </div>
      </div>
    )
  );
};

export default Summary;
