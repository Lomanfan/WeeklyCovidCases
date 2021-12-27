import React, { useState, useEffect } from "react";
import Row from "./Row";
import axios from "axios";

const DataForDate = ({ startDate, currentDate, last7Days }) => {
  let [data, setData] = useState(null);
  // let [showDates, setShowDates] = useState(null);

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

  // const provinceRow = (provinceData) => {
  //   return (
  //     <div key={data.indexOf(provinceData)}>
  //       <Row
  //         label={provinceData.province}
  //       >{`${provinceData.active_cases} (${provinceData.active_cases_change})`}</Row>
  //     </div>
  //   );
  // };

  return (
    data && (
      <div className="row">
        <div className="col-3"></div>
        <table className="table">
          <thead>
            <tr>
              {last7Days.map((d) => (
                <th>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <div className="col">
              {/* <h2>{currentDate}</h2> */}
              {/* {data.map((provinceData) => provinceRow(provinceData))} */}
              {data
                .filter((d) => {
                  return d.date_active === "25-12-2021";
                })
                .map((provinceData) => (
                  <tr key={data.indexOf(provinceData)}>
                    {provinceData.province}
                    <td>{`${provinceData.active_cases} (${provinceData.active_cases_change})`}</td>
                  </tr>
                ))}
            </div>
          </tbody>
        </table>
      </div>
    )
  );
};

export default DataForDate;
