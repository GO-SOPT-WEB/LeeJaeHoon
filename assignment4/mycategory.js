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
