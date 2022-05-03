import writeLocalItem from './writeLocalStorage.js';
import utility from './utility.js';

const addBook = (e) => {
  e.preventDefault();
  const ititle = document.getElementById('addTitle').value;
  const iauthor = document.getElementById('addAuthor').value;
  writeLocalItem('books', { title: ititle, author: iauthor });
  utility.resetForm();
};

export default addBook;