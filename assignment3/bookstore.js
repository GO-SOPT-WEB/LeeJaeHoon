import BookInfo from './BookInfo.js';

const bookList = document.querySelector('.section_ul');

// const renderBooks=()=>{

// }

const filterBooks = (category) => {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    console.log('first' + JSON.stringify(category));
    console.log(typeof category);
    let filterBook = [];

    if (category[0] === '전체') {
        console.log('전체일때 실행');
        filterBook = BookInfo;

        filterBook.forEach((book) => {
            const bookItem = document.createElement('li');
            bookItem.classList.add('section_book', 'pulse');
            bookItem.innerHTML = `
        <header class="section_book_header"><h2>${book.title}</h2></header>
        <p>#${book.hashtag}</p>
        <img class="book_img"src="${book.image}" alt="${book.title}이미지">
        <i class="fas fa-solid fa-heart"></i>
      `;
            bookList.appendChild(bookItem);
        });
    } else if (category === ' ') {
        console.log('render 2');
        while (bookList.firstChild) {
            bookList.removeChild(bookList.firstChild);
        }
        filterBook = [];
    } else {
        console.log(category.length);
        for (let i = 0; i < category.length; i++) {
            filterBook = BookInfo.filter((book) => book.category === category[i]);
            filterBook.forEach((book) => {
                const bookItem = document.createElement('li');
                bookItem.classList.add('section_book', 'pulse');
                bookItem.innerHTML = `
            <header class="section_book_header"><h2>${book.title}</h2></header>
            <p>#${book.hashtag}</p>
            <img class="book_img"src="${book.image}" alt="${book.title}이미지">
            <i class="fas fa-solid fa-heart"></i>
          `;
                bookList.appendChild(bookItem);
            });
        }
    }
};

const checkboxes = document.querySelectorAll('.check_category');
const checkedCategory = [];
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        console.log('checkbox change event!!');
        const checkedCategory = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                checkedCategory.push(checkbox.getAttribute('id'));
                console.log('체크됨!' + checkbox.getAttribute('id'));
            } else {
                console.log(checkedCategory);
                const index = checkedCategory.indexOf(checkbox.getAttribute('id'));
                console.log('체크해제~~');

                console.log(index);
                if (index !== -1) {
                    checkedCategory.splice(index, 1);
                    console.log('체크해제@@' + checkbox.getAttribute('id'));
                    console.log(checkedCategory);
                }
            }
        });

        if (checkedCategory.length === 0) {
            console.log('render불러오나?');
            filterBooks(' ');
        } else {
            // checkedCategory.forEach((category) => {
            //     console.log('마지막 카테고리 확인' + category);
            //     renderBooks(category);
            // });
            filterBooks(checkedCategory);
        }
    });
});
