import readLocalCollection from './readLocalStorage.js';

const writeLocalItem = (key, item) => {
  const existingData = readLocalCollection(key);
  existingData.push(item);
  localStorage.setItem(key, JSON.stringify(existingData));
  return true;
};

export default writeLocalItem;