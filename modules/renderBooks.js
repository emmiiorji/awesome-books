import utility from './utility.js';
// import { removeBuListener } from './index.js';

const renderBooks = () => {
  // this.addDate();//

  utility.booksContainer.innerHTML = utility.markupAllBooks();
  // console.log(utility.booksContainer);
  if (utility.booksContainer.innerHTML === '') {
    utility.booksList.classList.toggle('hide');
    utility.messageDisplay.innerHTML = 'Sorry, there are no registered books. Add a book below:';
    utility.addBook.classList.toggle('hide');
  } else {
    utility.messageDisplay.innerHTML = '';
  }
};

export default renderBooks;