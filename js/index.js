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

addEventListeners();

export default addEventListeners;

renderBooks();
removeBuListener();