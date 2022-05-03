// import renderBooks from './renderBooks.js';
import utility from './utility.js';
import removeItem from './removeItem.js';
import readLocalCollection from './readLocalStorage.js';

// Remove book and save the new collection back to local storage
const removeBook = (e) => {
  const button = e.target;
  const bookIndex = Number(button.id.split('_')[1]);
  utility.allBooks = removeItem(bookIndex, readLocalCollection('books'));
  localStorage.setItem('books', JSON.stringify(utility.allBooks));
};

export default removeBook;