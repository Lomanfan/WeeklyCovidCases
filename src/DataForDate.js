import React, { useState, useEffect } from "react";
import Row from "./Row";
import axios from "axios";

const DataForDate = ({ startDate, currentDate, last7Days }) => {
  let [data, setData] = useState(null);
  let [groupedData, setGroupedData] = useState(null);

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

  function groupedBy(data, province) {
    if (data) {
      return data.reduce((acc, obj) => {
        let key = obj[province];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    }
  }
  const groupedByProvince = groupedBy(data, "province");
  console.log("goupedBy", groupedByProvince);

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
              {Object.entries(groupedByProvince).map(([key, value]) => (
                // {console.log('key', key)}
                <tr>
                  <td>{key}</td>
                  <td></td>
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
