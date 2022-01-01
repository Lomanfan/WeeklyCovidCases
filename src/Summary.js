import React from "react";
import Row from "./Row";

const Summary = ({ data }) => {
  return (
    data && (
      <div className="md-2">
        <h2 className="text-lg">Current data as of {data.date}</h2>
        <Row label="Current Cases">{`${data.active_cases} (${data.active_cases_change})`}</Row>
      </div>
    )
  );
};

export default Summary;
