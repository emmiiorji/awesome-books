const readLocalCollection = (key) => {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  return data;
};

export default readLocalCollection;