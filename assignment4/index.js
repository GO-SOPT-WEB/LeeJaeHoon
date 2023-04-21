import todolists from './Todolist.js';

const countTodolist = () => {
    let sum = 0;
    todolists.forEach((todoL) => {
        sum += todoL.todo.length;
    });
    return sum;
};

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

console.log(todolists);
const main = document.getElementById('main');
todolists.forEach((todolist) => {
    const ul = document.createElement('ul');
    ul.classList.add('main_ul');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');

    h2.textContent = todolist.title;
    section.appendChild(h2);
    ul.appendChild(section);

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
            console.log(`현재 ${checkedCount}개가 체크되었습니다.`);
        });
    });
    main.appendChild(ul);
});
