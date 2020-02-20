const dietTableCalcule = (nutrients, multiplier) => {
  const nutrientsArray = nutrients.map((item) => {
    const copiedItem = { ...item };
    if (item.amount) {
      copiedItem.amount *= (multiplier / 100);
    }
    return copiedItem;
  });
  return nutrientsArray;
};

export default dietTableCalcule;
