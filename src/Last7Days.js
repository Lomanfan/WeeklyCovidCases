export default function Last7Days({ updatedTo }) {
  let date = new Date();
  const numOfDays = [1, 2, 3, 4, 5, 6, 7, 8];

  let recent8Days = [];
  numOfDays.map((num, i) => {
    if (i > 0) {
      date.setDate(date.getDate() - 1);
    }
    recent8Days.push(
      `${("0" + date.getDate()).slice(-2)}-${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}-${date.getFullYear()}`
    );
    return recent8Days;
  });

  console.log(recent8Days);
  const currentDate = recent8Days[0];

  const startDate = currentDate === updatedTo ? recent8Days[6] : recent8Days[7];

  const last7Days =
    currentDate === updatedTo
      ? recent8Days.slice(0, 7)
      : recent8Days.slice(1, 8);

  return { last7Days, currentDate, startDate };
}
