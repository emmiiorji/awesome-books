import utility from './utility.js';
import renderBooks from './renderBooks.js';
import removeBuListener from './removeBuListener.js';

const switchView = (e) => {
  const menuItems = document.querySelectorAll('#booksList, #contactInfo, #addBook');
  menuItems.forEach((menuItem) => {
    menuItem.classList.add('hide');
  });
  switch (e.target.id) {
    case 'navList':
      utility.booksList.classList.remove('hide');
      renderBooks();
      removeBuListener();
      break;
    case 'navContact':
      utility.contactInfo.classList.remove('hide');
      break;
    case 'navAdd':
      utility.addBook.classList.remove('hide');
      break;
    default:
      break;
  }
};

export default switchView;