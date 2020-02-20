const DietTable = (foodArray) => {
  const finalReport = [];
  foodArray.map((array) => {
    array.map((item) => {
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
          checked: true,
          value: item.amount === undefined ? null : item.amount,
        });
      }
      return ({
        name: item.nutrient.name,
        id: item.nutrient.id,
        unit: item.nutrient.unitName,
        checked: true,
        value: item.amount || null,
      });
    });
    return null;
  });
  // finalReport.sort((a, b) => a.id - b.id);
  return finalReport;

  // const finalArray = nutrientsArray.shift();
};

export default DietTable;
