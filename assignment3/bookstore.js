import BookInfo from './BookInfo.js';

const bookList = document.querySelector('.section_ul');
const categoryList = document.querySelector('.category_list');

const checkedCategory = [];
const checkboxes = document.querySelectorAll('.check_category');
const checkAll = document.querySelector('.all');
const checkWeb = document.querySelector('.web');
const checkSelf = document.querySelector('.self');
const checkNovel = document.querySelector('.novel');

let filterBook = [];

//filterBook을 렌더링하는 함수
const renderBooks = () => {
    filterBook.forEach((book) => {
        const bookItem = document.createElement('li');
        bookItem.classList.add('section_book', 'pulse');
        bookItem.innerHTML = `
    <header class="section_book_header"><h2>${book.title}</h2></header>
    <div class="modal"><p class="modalHash">${book.hashtag}</p> <button class="closeBtn"><img src="images/x-button.png"  width="10" height="10"alt="닫기버튼"></img></button></div>
    <span class="hashtag_wrapper">
    <p class="hideHash">${book.hashtag}</p>
    <button type="button" class="hashPlusButton"><img src="images/plus_button.png" width="25" height="25" alt="플러스버튼"></img></button>
    </span>
    <img class="book_img"src="${book.image}" alt="${book.title}이미지">
    <i class="fas fa-solid fa-heart"></i>
  `;

        const hashPlusButton = bookItem.querySelector('.hashPlusButton');
        const modal = bookItem.querySelector('.modal');
        const closeBtn = bookItem.querySelector('.closeBtn');

        hashPlusButton.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });

        // 모달 닫기 버튼에 클릭 이벤트 추가
        closeBtn.addEventListener('click', () => {
            // 모달 숨기기
            modal.style.display = 'none';
        });

        bookList.appendChild(bookItem);
    });
};

//상단 카테고리 리스트를 삭제하는 함수
const removeCategory = (categoryName, nav_category) => {
    const p = nav_category.querySelector('p');
    if (p.textContent === categoryName) {
        nav_category.remove();
        const index = checkedCategory.indexOf(categoryName);
        if (index !== -1) {
            checkedCategory.splice(index, 1);
        }
        filterBooks(checkedCategory);
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
};

//상단에 카테고리를 나열하는 함수
const renderCategory = (checkedCategory) => {
    checkedCategory.forEach((categoryName) => {
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

//category별로 book을 필터링하고 렌더하는 함수
const filterBooks = (category) => {
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    if (category.length === 0) {
        while (bookList.firstChild) {
            bookList.removeChild(bookList.firstChild);
        }
        filterBook = [];
        renderBooks();
    } else {
        let all = false;
        for (let i = 0; i < category.length; i++) {
            if (category[i] === '전체') {
                filterBook = BookInfo;
                renderBooks();
                all = true;
                break;
            }
        }
        if (all === false) {
            for (let i = 0; i < category.length; i++) {
                filterBook = BookInfo.filter((book) => book.category === category[i]);
                renderBooks();
            }
        }
    }
};

//체크박스 변경시 카테고리 리스트를 렌더하고 book을 렌더하는 로직
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        while (categoryList.firstChild) {
            categoryList.removeChild(categoryList.firstChild);
        }

        if (checkbox.checked) {
            checkedCategory.push(checkbox.getAttribute('id'));
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
