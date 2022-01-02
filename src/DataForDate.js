import React, { useState, useEffect } from "react";
import axios from "axios";
import groupedBy from "./Common/groupedBy";
import numberWithCommas from "./Common/numberWithCommas";
import "./styles.css";

const DataForDate = ({ startDate, currentDate, last7Days }) => {
  let [data, setData] = useState(null);
  // let [groupedData, setGroupedData] = useState(null);

  useEffect(() => {
    currentDate &&
      axios
        .get(
          `https://api.opencovid.ca/timeseries?after=${startDate}&before=${currentDate}`
        )
        .then((res) => {
          // console.log("res", res.data);
          setData(res.data.active);
        });
  }, [startDate, currentDate]);
  // console.log("DataForDatE Data=", data, "Date=", currentDate);

  const groupedByProvince = groupedBy(data, "province");
  // console.log("goupedBy", groupedByProvince);

  return (
    data && (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Province</th>
              {last7Days.map((date, i) => (
                <th key={i}>{date}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedByProvince).map(
              ([key, value]) =>
                key !== "Repatriated" && (
                  <tr key={key}>
                    <td>{key}</td>
                    {value.map((v, i) => (
                      <td key={i}>{`${numberWithCommas(
                        v.active_cases
                      )} (${numberWithCommas(v.active_cases_change)})`}</td>
                    ))}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    )
  );
};

export default DataForDate;
