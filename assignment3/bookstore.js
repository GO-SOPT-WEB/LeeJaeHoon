import BookInfo from './BookInfo.js';

const bookList = document.querySelector('.section_ul');
const renderBooks = (filterBook) => {
    filterBook.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('section_book', 'pulse');
        bookItem.innerHTML = `
    <header class="section_book_header"><h2>${book.title}</h2></header>
    <p>${book.hashtag}</p>
    <img class="book_img"src="${book.image}" alt="${book.title}이미지">
    <i class="fas fa-solid fa-heart"></i>
  `;
        bookList.appendChild(bookItem);
    });
};

// function onRemoveButtonClick(e) {
//     const category = e.target.parentNode.dataset.category;
//     checkedCategory.splice(checkedCategory.indexOf(category), 1);
//     removeCategoryNode(category);
//   }

const renderCategory = (checkedCategory) => {
    console.log('renderCategory' + checkedCategory);

    checkedCategory.forEach((categoryName) => {
        console.log('실행테스트');
        const nav_category = document.createElement('li');
        nav_category.classList.add('nav_category');
        nav_category.innerHTML = `
         <p>${categoryName}</p>
        <button type="button" onclick="removeCategory('${categoryName}')"><img src="./images/x-button.png" alt="닫기버튼" width="10" /></button>
        `;
        categoryList.appendChild(nav_category);
    });
};

const filterBooks = (category) => {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    console.log('first' + JSON.stringify(category));
    console.log(typeof category);
    let filterBook = [];

    if (category === ' ') {
        console.log('render 2');
        while (bookList.firstChild) {
            bookList.removeChild(bookList.firstChild);
        }
        filterBook = [];
    } else {
        console.log(category.length);
        let all = false;
        for (let i = 0; i < category.length; i++) {
            if (category[i] === '전체') {
                filterBook = BookInfo;
                renderBooks(filterBook);
                all = true;
                break;
            }
        }
        if (all === false) {
            for (let i = 0; i < category.length; i++) {
                filterBook = BookInfo.filter((book) => book.category === category[i]);
                renderBooks(filterBook);
            }
        }

        console.log(category, '카테고리!');
    }
};

const checkedCategory = [];
const checkboxes = document.querySelectorAll('.check_category');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        removeCategoryNode(checkedCategory); //카테고리 삭제함수를 추가하지 않으면 전에 렌더링한게 남아있어서 이렇게 처리했는데 더 좋은 처리방법이 있다면 공유해주세요!
        console.log('checkbox change event!!');
        if (checkbox.checked) {
            checkedCategory.push(checkbox.getAttribute('id'));
            console.log('체크됨!' + checkbox.getAttribute('id'));
            // renderCategory(checkedCategory);
        } else {
            const index = checkedCategory.indexOf(checkbox.getAttribute('id'));
            if (index !== -1) {
                checkedCategory.splice(index, 1);
            }
        }

        if (checkedCategory.length === 0) {
            filterBooks(' ');
        } else {
            filterBooks(checkedCategory);
            renderCategory(checkedCategory);
        }
    });
});

const categoryList = document.querySelector('.category_list');

const removeCategoryNode = () => {
    while (categoryList.firstChild) {
        categoryList.removeChild(categoryList.firstChild);
    }
};

// }
// filterBook.forEach((book) => {
//     const bookItem = document.createElement('li');
//     bookItem.classList.add('section_book', 'pulse');
//     bookItem.innerHTML = `
// <header class="section_book_header"><h2>${book.title}</h2></header>
// <p>#${book.hashtag}</p>
// <img class="book_img"src="${book.image}" alt="${book.title}이미지">
// <i class="fas fa-solid fa-heart"></i>
// `;
//     bookList.appendChild(bookItem);
// });
