const FoodPortions = (portionsArray) => {
  const portions = portionsArray.map((item) => {
    const newItem = {
      amount: item.amount,
      portion: item.modifier,
      weight: item.gramWeight,
      id: item.id,
    };
    return newItem;
  });
  return portions;
};

export default FoodPortions;
