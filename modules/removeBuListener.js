import removeBook from './removeBook.js';
import renderBooks from './renderBooks.js';

const removeBuListener = () => {
  const removeButtons = document.querySelectorAll('.book button');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      removeBook(e);
      renderBooks();
      removeBuListener();
    });
  });
};

export default removeBuListener;