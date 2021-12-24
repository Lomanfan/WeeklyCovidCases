import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";

/*
  Use the following API to dynamically display the number of 
  covid cases by day for the last week
  https://opencovid.ca/api/
*/

export default function App() {
  let currentDate = "2021-12-20";
  let [last7Days, setLast7Days] = useState(null);

  useEffect(() => {
    let sevenDays = () => {
      let result = [];
      for (let i = 0; i < 7; i++) {
        let d = new Date();
        d.setDate(d.getDate() - i);
        result.push(d);
      }
      return result.join(",");
    };
    setLast7Days(sevenDays);
  }, [currentDate]);

  console.log(last7Days);

  return (
    <div className="p-4 bg-blue-100 h-screen">
      <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-8">
          This week's covid cases.
        </h1>
        <Summary />
        <DataForDate startDate="2021-12-15" currentDate="2021-12-22" />
      </div>
    </div>
  );
}
