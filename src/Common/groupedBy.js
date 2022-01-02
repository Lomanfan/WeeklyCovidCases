export default function groupedBy(data, groupBy) {
  if (data) {
    return data.reduce((acc, obj) => {
      let key = obj[groupBy];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
}
