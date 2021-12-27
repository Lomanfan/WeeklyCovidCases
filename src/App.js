import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";
import axios from "axios";
import Last7Days from "./Last7Dates";

/*
  Use the following API to dynamically display the number of 
  covid cases by day for the last week
  https://opencovid.ca/api/
*/

export default function App() {
  // let [currentDate, setCurrentDate] = useState(null);
  // let [last7Days, setLast7Days] = useState(null);

  let [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.opencovid.ca")
      .then((res) => setData(res.data.summary[0]));
  }, []);
  console.log("Summary Data", data);

  let { last7Days, startDate, currentDate } = Last7Days({ data });
  console.log("hello", last7Days);

  // useEffect(() => {
  //   setCurrentDate(data.date);
  // }, []);

  // let formatted_date = (data) => {
  // console.log('data', data);
  //   data.map(d=>{`${d.getDate() - (d.getMonth() + 1) - d.getFullYear()}`});
  // };

  // useEffect(() => {
  //   let sevenDays = () => {
  //     let result = [];
  //     for (let i = 0; i < 7; i++) {
  //       let d = new Date();
  //       d.setDate(d.getDate() - i);
  //       result.push(d);
  //     }
  //     return result;
  //   };
  //   setLast7Days(sevenDays);
  // }, [currentDate]);

  // console.log("currentDate", currentDate);

  // last7Days &&
  //   console.log(
  //     "last7Days",
  //     last7Days[0].getDate(),
  //     `${last7Days[0].getMonth() + 1}`,
  //     last7Days[0].getFullYear()
  //   );

  return (
    <div className="p-4 bg-blue-100 h-screen">
      <div className="flex flex-col bg-white px-8 py-6 max-w mx-auto rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-8">
          This week's covid cases.
        </h1>
        <Summary data={data} />
        <DataForDate
          startDate={startDate}
          currentDate={currentDate}
          last7Days={last7Days}
        />
      </div>
    </div>
  );
}
