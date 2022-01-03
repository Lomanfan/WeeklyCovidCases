import React, { useState, useEffect } from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";
import axios from "axios";
import Last7Days from "./Last7Days";

/*
  Use the following API to dynamically display the number of 
  covid cases by day for the last week
  https://opencovid.ca/api/
*/

export default function App() {
  let [data, setData] = useState(null);
  let [updatedTo, setUpdatedTo] = useState(null);

  useEffect(() => {
    axios.get("https://api.opencovid.ca").then((res) => {
      setData(res.data.summary[0]);
      setUpdatedTo(res.data.summary[0].date);
    });
  }, []);
  // console.log("Summary Data", data);

  const { last7Days, currentDate, startDate } = Last7Days({ updatedTo });

  return (
    <div className="p-4 bg-blue-100 h-screen">
      <div className="flex flex-col bg-white px-8 py-6 max-w mx-auto shadow-lg">
        <h1 className="text-xl font-bold text-center mb-5">
          This week's covid cases.
        </h1>
        <Summary data={data} />
        <DataForDate
          last7Days={last7Days}
          startDate={startDate}
          currentDate={currentDate}
        />
      </div>
    </div>
  );
}
