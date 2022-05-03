const removetem = (itemIndex, items) => {
  items = items.filter((item, index) => index !== itemIndex);
  return items;
};

export default removetem;