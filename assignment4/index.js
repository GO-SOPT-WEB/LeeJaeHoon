import todolists from './Todolist.js';

const calendarBtn = document.querySelector('.calendar_btn');
calendarBtn.addEventListener('click', function () {
    console.log('버튼확인');
    window.location.href = 'http://127.0.0.1:5500/assignment4/calendar.html';
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
        const li = document.createElement('li');
        li.textContent = todo;
        ul.appendChild(li);
    });
    main.appendChild(ul);
});
