import React from "react";
import Summary from "./Summary";
import DataForDate from "./DataForDate";

/*
  Use the following API to dynamically display the number of 
  covid cases by day for the last week
  https://opencovid.ca/api/
*/

export default function App() {
  return (
    <div className="p-4 bg-blue-100 h-screen">
      <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center mb-8">
          This week's covid cases, check, check.
        </h1>
        <Summary />
        <DataForDate date="2021-01-01" />
      </div>
    </div>
  );
}
