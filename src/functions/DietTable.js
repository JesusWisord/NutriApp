const DietTable = (foodArray) => {
  const finalReport = [];
  console.log(foodArray);
  const nutrientsArray = foodArray.map((array) => array.map((item) => {
    const filteredIndex = finalReport.filter((nut, index) => {
      if (nut.id === item.nutrient.id) {
        finalReport[index].value += item.amount;
        return index;
      }
      return null;
    });
    if (!(filteredIndex.length > 0)) {
      finalReport.push({
        name: item.nutrient.name,
        id: item.nutrient.id,
        unit: item.nutrient.unitName,
        value: item.amount === undefined ? null : item.amount,
      });
    }
    return ({
      name: item.nutrient.name,
      id: item.nutrient.id,
      unit: item.nutrient.unitName,
      value: item.amount || null,
    });
  }));
  // finalReport.sort((a, b) => a.id - b.id);
  return finalReport;

  // const finalArray = nutrientsArray.shift();
};

export default DietTable;
