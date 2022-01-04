import React, { useState, useEffect } from "react";
import axios from "axios";
import groupedBy from "./Common/groupedBy";
import numberWithCommas from "./Common/numberWithCommas";
import "./styles.css";

const DataForDate = ({ startDate, currentDate, last7Days }) => {
  let [data, setData] = useState(null);

  useEffect(() => {
    currentDate &&
      axios
        .get(
          `https://api.opencovid.ca/timeseries?after=${startDate}&before=${currentDate}`
        )
        .then((res) => {
          setData(res.data.active);
        });
  }, [startDate, currentDate]);

  const groupedByProvince = groupedBy(data, "province");

  return (
    data && (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th>Province</th>
              {last7Days.map((date, i) => (
                <th key={i} align="center">
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedByProvince).map(
              ([key, value]) =>
                key !== "Repatriated" && (
                  <tr key={key}>
                    <td>{key}</td>
                    {value.reverse().map((v, i) => (
                      <td key={i} align="center">{`${numberWithCommas(
                        v.active_cases
                      )} [${numberWithCommas(v.active_cases_change)}]`}</td>
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
