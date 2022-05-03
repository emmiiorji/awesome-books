import readLocalCollection from './readLocalStorage.js';
import setValue from './setValue.js';
// import renderBooks from './renderBooks.js';

class Utility {
  constructor() {
    this.allBooks = readLocalCollection('books');
    this.booksList = document.getElementById('booksList');
    this.addBook = document.getElementById('addBook');
    this.contactInfo = document.getElementById('contactInfo');
    this.formInputs = document.querySelectorAll('form input');
    this.messageDisplay = document.getElementById('message');
    this.booksContainer = document.getElementById('books-container');
    this.addForm = document.getElementById('addBook');
    this.dateDiv = document.getElementById('date');

    this.navAdd = document.getElementById('navAdd');
    this.navList = document.getElementById('navList');
    this.navContact = document.getElementById('navContact');

    this.allBooksHTML = '';
  }

  resetForm = () => {
    this.formInputs.forEach((element) => {
      setValue(element, '');
    });
  };

  clearMessage = () => {
    this.messageDisplay.innerHTML = '';
  }

  markupAllBooks() {
    this.allBooksHTML = '';
    readLocalCollection('books').forEach((book, index) => {
      this.allBooksHTML += `<div class="book" id="${book.title}">
                        <p class="title">"${book.title}" by ${book.author} </p>
                        <button type="button" class="shadow" id="r_${index}">Remove</button>
                      </div>`;
    });
    return this.allBooksHTML;
  }
}

const utility = new Utility();

export default utility;