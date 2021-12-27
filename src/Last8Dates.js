// import React, { useState, useEffect } from "react";

export default function Last7Days({ data }) {
  let date = new Date();
  console.log("AA", date);
  const numOfDays = [1, 2, 3, 4, 5, 6, 7, 8];

  let current8Days = [];
  numOfDays.map((num, i) => {
    if (i > 0) {
      date.setDate(date.getDate() - 1);
    }
    current8Days.push(
      `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    );
  });

  const currentDate = current8Days[0];
  const startDate = current8Days[7];
  // const startDate = {currentDate === data.date ? current8Days[6] : current8Days[7]};

  return { current8Days, currentDate, startDate };
  // let result = [];
  // for (let i = 0; i < 7; i++) {
  //   let d = new Date();
  //   d.setDate(d.getDate() - i);
  //   result.push(d);
  // }
  // return result;

  // last7Days &&
  //   console.log(
  //     "last7Days",
  //     last7Days[0].getDate(),
  //     `${last7Days[0].getMonth() + 1}`,
  //     last7Days[0].getFullYear()
  //   );
}
