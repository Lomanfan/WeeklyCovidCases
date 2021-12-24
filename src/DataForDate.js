import React, { useState, useEffect } from "react";
import Row from "./Row";
import axios from "axios";

const DataForDate = ({ startDate, currentDate }) => {
  let [data, setData] = useState(null);
  let [showDates, setShowDates] = useState(null);

  useEffect(() => {
    currentDate &&
      axios
        .get(
          `https://api.opencovid.ca/timeseries?after=${startDate}&before=${currentDate}`
        )
        .then((res) => {
          console.log("res", res.data);
          setData(res.data.active);
        });
  }, [currentDate]);
  console.log("DataForDatE Data=", data, "Date=", currentDate);

  const provinceRow = (provinceData) => {
    return (
      <div key={data.indexOf(provinceData)}>
        <Row
          label={provinceData.province}
        >{`${provinceData.active_cases} (${provinceData.active_cases_change})`}</Row>
      </div>
    );
  };

  return (
    data && (
      <div className="my-2">
        <h2>{currentDate}</h2>
        {data.map((provinceData) => provinceRow(provinceData))}
      </div>
    )
  );
};

export default DataForDate;
