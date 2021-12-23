import React, { useState, useEffect } from "react";
import Row from "./Row";
import axios from "axios";

const DataForDate = ({ date }) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    date &&
      axios
        .get(`https://api.opencovid.ca/timeseries?date=${date}`)
        .then((res) => setData(res.data.active));
    console.log(data);
  }, [date]);

  const provinceRow = (provinceData) => {
    return (
      <div>
        <Row
          key={provinceData.province}
          label={provinceData.province}
        >{`${provinceData.active_cases} (${provinceData.active_cases_change})`}</Row>
      </div>
    );
  };

  return (
    data && (
      <div className="my-2">
        <h2>{date}</h2>
        {data.map((provinceData) => provinceRow(provinceData))}
      </div>
    )
  );
};

export default DataForDate;
