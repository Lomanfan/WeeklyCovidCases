import React from "react";
import Row from "./Row";
import numberWithCommas from "./Common/numberWithCommas";

const Summary = ({ data }) => {
  return (
    data && (
      <div className="md-2">
        <h2 className="text-lg">Last updated on: {data.date}</h2>
        <Row label="Current Cases">{`${numberWithCommas(
          data.active_cases
        )} (${numberWithCommas(data.active_cases_change)})`}</Row>
      </div>
    )
  );
};

export default Summary;
