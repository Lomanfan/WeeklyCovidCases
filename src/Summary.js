import React, { useState, useEffect } from "react";
import Row from "./Row";
import axios from "axios";

const Summary = () => {
  let [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.opencovid.ca")
      .then((res) => setData(res.data.summary[0]));
  }, []);

  return (
    data && (
      <div className="md-2">
        <h2 className="text-lg">Current data as of {data.date}</h2>
        <Row label="Current Cases">{`${data.active_cases} (${data.active_cases_change})`}</Row>
      </div>
    )
  );
};

export default Summary;
