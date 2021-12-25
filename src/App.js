import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";

/*
  Use the following API to dynamically display the number of 
  covid cases by day for the last week
  https://opencovid.ca/api/
*/

export default function App() {
  let [currentDate, setCurrentDate] = useState(null);
  let [last7Days, setLast7Days] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // let formatted_date = (data) => {
  //   data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear();
  // };

  useEffect(() => {
    let sevenDays = () => {
      let result = [];
      for (let i = 0; i < 7; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        result.push(d);
      }
      return result;
    };
    setLast7Days(sevenDays);
  }, [currentDate]);

  last7Days &&
    console.log(
      "last7Days",
      last7Days[0].getDate(),
      `${last7Days[0].getMonth() + 1}`,
      last7Days[0].getFullYear()
    );

  return (
    <div className="p-4 bg-blue-100 h-screen">
      <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-8">
          This week's covid cases.
        </h1>
        <Summary />
        <DataForDate startDate="15-12-2021" currentDate="22-12-2021" />
      </div>
    </div>
  );
}
