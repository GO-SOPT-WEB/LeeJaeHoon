const todolists = [
    { title: '인간관계', todo: ['친구들 자주 만나기', '긍정적인 말 많이 하기'] },
    { title: '공부', todo: ['코테공부', '웹 axios', 'jwt토큰'] },
    { title: 'SOPT', todo: ['잘융화되기', '웹 심화 스터디 열심히 참여하기', '추억만들기'] },
    { title: '운동', todo: ['주4회 웨이트', '농구', '러닝'] },
];

let sum = 0;
todolists.forEach((todoL) => {
    sum += todoL.todo.length;
});

export { todolists, sum };
