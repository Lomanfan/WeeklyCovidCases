// import React, { useState, useEffect } from "react";

export default function Last7Days({ updatedTo }) {
  let date = new Date();
  console.log("AA", date);
  const numOfDays = [1, 2, 3, 4, 5, 6, 7, 8];

  let recent8Days = [];
  numOfDays.map((num, i) => {
    if (i > 0) {
      date.setDate(date.getDate() - 1);
    }
    recent8Days.push(
      `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    );
    return recent8Days;
  });

  const currentDate = recent8Days[0];
  // console.log("currentDate", typeof(currentDate), "data.date", typeof(data),data.date);
  // const startDate = recent8Days[7];

  const startDate = currentDate === updatedTo ? recent8Days[6] : recent8Days[7];
  // console.log('startDateN', startDate);

  const last7Days =
    currentDate === updatedTo
      ? recent8Days.slice(0, 7)
      : recent8Days.slice(1, 8);
  console.log("last7Days", last7Days);

  return { last7Days, currentDate, startDate };
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
