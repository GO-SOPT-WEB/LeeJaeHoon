import BookInfo from './BookInfo.js';

const bookList = document.querySelector('.section_ul');
const categoryList = document.querySelector('.category_list');
const nav_categories = document.querySelectorAll('.category_list');
const vv = 'vv';

const checkedCategory = [];
const checkboxes = document.querySelectorAll('.check_category');
const checkAll = document.querySelector('.all');
const checkWeb = document.querySelector('.web');
const checkSelf = document.querySelector('.self');
const checkNovel = document.querySelector('.novel');

let filterBook = [];

const renderBooks = () => {
    console.log('render books!!!');
    const aaa = 'hi';

    filterBook.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('section_book', 'pulse');
        bookItem.innerHTML = `
    <header class="section_book_header"><h2>${book.title}</h2></header>
    <div class="modal">${book.hashtag}</div>
    <span class="hashtag_wrapper">
    <p>${book.hashtag}</p>
    <button type="button" class="hashPlusButton"><img src="images/plus_button.png" width="25" height="25" alt="플러스버튼"></img></button>
    </span>
    <img class="book_img"src="${book.image}" alt="${book.title}이미지">
    <i class="fas fa-solid fa-heart"></i>
  `;
        const hashPlusButton = bookItem.querySelector('.hashPlusButton');
        hashPlusButton.addEventListener('click', (e) => {
            console.log('click');
            e.preventDefault();

            const modal = bookItem.querySelector('.modal');
            modal.style.display = 'block';
        });

        bookList.appendChild(bookItem);
    });
};

// function onRemoveButtonClick(e) {
//     const category = e.target.parentNode.dataset.category;
//     checkedCategory.splice(checkedCategory.indexOf(category), 1);
//     removeCategoryNode(category);
//   }

// const nav_category_btn=document.querySelector()

const removeCategory = (categoryName, nav_category) => {
    console.log('removeCategory호출');
    console.log(JSON.stringify(nav_categories) + 'navcategory출력');
    //category_nav_node삭제

    // nav_categories.forEach((nav_category) => {
    const p = nav_category.querySelector('p');

    console.log(p.textContent);
    console.log(categoryName);
    if (p.textContent === categoryName) {
        nav_category.remove();
        const index = checkedCategory.indexOf(categoryName);
        if (index !== -1) {
            checkedCategory.splice(index, 1);
            console.log('category출력' + checkedCategory);
        }
        filterBooks(checkedCategory);
        console.log('필터북 이후 :' + filterBook);
        // renderBooks(filterBook);
    }

    if (categoryName === '전체') {
        checkAll.checked = false;
    } else if (categoryName === '웹개발서적') {
        checkWeb.checked = false;
    } else if (categoryName === '자기개발서적') {
        checkSelf.checked = false;
    } else if (categoryName === '소설') {
        checkNovel.checked = false;
    }

    console.log('category출력' + checkedCategory);
    // });
};

const renderCategory = (checkedCategory) => {
    console.log('renderCategory' + checkedCategory);

    checkedCategory.forEach((categoryName) => {
        console.log('실행테스트');
        const nav_category = document.createElement('li');

        nav_category.classList.add('nav_category');
        nav_category.innerHTML = `
         <p>${categoryName}</p>
        <button type="button" class="nav_category_button"><img src="./images/x-button.png" alt="닫기버튼" width="10" /></button>
        `;
        categoryList.appendChild(nav_category);
        nav_category.querySelector('.nav_category_button').addEventListener('click', () => {
            removeCategory(categoryName, nav_category);
        });
    });
};

const filterBooks = (category) => {
    console.log('필터북 호출');
    console.log(category);
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    console.log('first' + JSON.stringify(category));
    console.log(typeof category);

    if (category.length === 0) {
        console.log('render 2');
        while (bookList.firstChild) {
            bookList.removeChild(bookList.firstChild);
        }
        filterBook = [];
        renderBooks(filterBook);
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

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        while (categoryList.firstChild) {
            categoryList.removeChild(categoryList.firstChild);
        }
        //카테고리 삭제함수를 추가하지 않으면 전에 렌더링한게 남아있어서
        //이렇게 처리했는데 더 좋은 처리방법이 있다면 공유해주세요!

        console.log('checkbox change event!!');
        if (checkbox.checked) {
            checkedCategory.push(checkbox.getAttribute('id'));
            console.log('체크됨!' + checkbox.getAttribute('id'));
            renderCategory(checkedCategory);
        } else {
            const index = checkedCategory.indexOf(checkbox.getAttribute('id'));
            if (index !== -1) {
                checkedCategory.splice(index, 1);
            }
            renderCategory(checkedCategory);
        }

        if (checkedCategory.length === 0) {
            filterBooks(' ');
        } else {
            filterBooks(checkedCategory);
        }
    });
});

const removeCategoryNode = (categoryList) => {
    console.log('removeCategory호출' + categoryList);
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
