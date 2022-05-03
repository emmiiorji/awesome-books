import { DateTime } from '../node_modules/luxon/src/luxon.js';

import utility from '../modules/utility.js';
import addBook from '../modules/addBook.js';
import renderBooks from '../modules/renderBooks.js';
import switchView from '../modules/switchView.js';
import removeBuListener from '../modules/removeBuListener.js';

const addEventListeners = () => {
  utility.addForm.addEventListener('submit', addBook);

  utility.navAdd.addEventListener('click', (e) => switchView(e));
  utility.navList.addEventListener('click', (e) => switchView(e));
  utility.navContact.addEventListener('click', (e) => switchView(e));
};

const addDate = () => {
  const now = DateTime.now();
  utility.dateDiv.textContent = now.toLocaleString(DateTime.DATETIME_MED);
};

addEventListeners();
addDate();

export default addEventListeners;

renderBooks();
removeBuListener();