import BookInfo from './BookInfo.js';

// const bookList = document.querySelector('#book-list');

const bookList = document.querySelector('.section_ul');

function renderBooks() {
    BookInfo.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('section_book', 'pulse');
        bookItem.innerHTML = `
        <header class="section_book_header"><h2>${book.title}</h2></header>
        <p>#${book.hashtag}</p>
        <img class="book_img"src="${book.image}" alt="">
        <i class="fas fa-solid fa-heart"></i>
      `;
        bookList.appendChild(bookItem);
        console.log(book.title);
    });
}

renderBooks();
