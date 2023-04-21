import todolists from './Todolist.js';

//todoList의 개수를 세는 함수
const countTodolist = () => {
    let sum = 0;
    todolists.forEach((todoL) => {
        sum += todoL.todo.length;
    });
    return sum;
};

//footer 버튼 click event
const calendarBtn = document.querySelector('.calendar_btn');
calendarBtn.addEventListener('click', function () {
    console.log('버튼확인');
    location.href = 'index.html';
});

const myBtn = document.querySelector('.my_btn');
myBtn.addEventListener('click', function () {
    console.log('버튼확인');
    location.href = './mycategory.html';
});

const main = document.getElementById('main');
const wrapper = document.querySelector('.wrapper');

//모달 생성 함수
const createModal = (todolist) => {
    const modal = document.createElement('div');
    modal.classList.add('todo_modal');

    const modalContent = document.createElement('p');
    modalContent.textContent = '추가할 일을 입력하세요';
    modalContent.classList.add('modalText');
    const modalInput = document.createElement('input');
    modalInput.classList.add('modalInput');
    const modalBtn = document.createElement('button');
    modalBtn.classList.add('modalBtn');
    modalBtn.textContent = '추가';
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');

    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    modal.appendChild(modalInput);
    modal.appendChild(modalBtn);

    wrapper.appendChild(modal);

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modalBtn.addEventListener('click', () => {
        todolist.push(modalInput.value);
        relenderTodoList();
        modal.style.display = 'none';
    });
};

//리렌더시 main 데이터 삭제 함수
const deleteTodoList = () => {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
};

//리렌더 함수
const relenderTodoList = () => {
    deleteTodoList();
    createTodoList();
    let todoCount = document.querySelector('.todoCount');
    todoCount.textContent = countTodolist();
};

//todoList 렌더함수
const createTodoList = () => {
    todolists.forEach((todolist) => {
        const ul = document.createElement('ul');
        ul.classList.add('main_ul');

        const section = document.createElement('section');
        const h2 = document.createElement('h2');
        const plusImg = document.createElement('img');

        h2.textContent = todolist.title;
        plusImg.src = './image/plus_button.png';
        plusImg.classList.add('plusImgBtn');
        section.appendChild(h2);
        section.appendChild(plusImg);

        ul.appendChild(section);
        plusImg.addEventListener('click', () => {
            createModal(todolist.todo);
        });

        todolist.todo.forEach((todo) => {
            const checkLabel = document.createElement('label');

            const checkInput = document.createElement('input');
            checkInput.type = 'checkbox';
            checkInput.classList.add('hidden_checkbox');

            const heartDiv = document.createElement('div');
            heartDiv.classList.add('show_checkbox');

            const span = document.createElement('span');
            span.classList.add('todo__span');
            span.textContent = todo;

            const li = document.createElement('li');
            li.appendChild(checkLabel);

            checkLabel.appendChild(checkInput);
            checkLabel.appendChild(heartDiv);
            checkLabel.appendChild(span);

            li.append(span);
            ul.appendChild(li);

            checkInput.addEventListener('change', () => {
                const checkedCount = countTodolist() - document.querySelectorAll('.hidden_checkbox:checked').length;
                let todoCount = document.querySelector('.todoCount');
                todoCount.textContent = checkedCount;
                console.log(`현재 ${checkedCount}개의 일이 남았습니다.`);
            });
        });
        main.appendChild(ul);
    });
};

createTodoList();
