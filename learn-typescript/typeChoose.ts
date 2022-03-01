
// Union Type
//타입 2개이상 새로운 타입만들기
let 회원: number | string = 234;

// 이렇게 지정하면 회원의 변수는 확정이 된다
//응용
// let 회원들임: number[] | string[] = [1, '2', 3]; 오답
let 회원들임2: (number | string)[] = [1, '2', 3]
let 오브젝트: { a: string | number } = { a: '123' }
let 이름3: any;
// any 모든 자료형을 허용해줌// 실드를 해제문법임

let 이름4: unknown; //any와 비슷함
이름4: 123;
// type스크립트 최신버젼

// let 변수: string = 이름4; // 오류발생 버그발생방지
// any는 오류발생도 안함 버그발생가능
// 이름4 -1 오류 발생 간단한 수학연산도 타입이 맞아야함

//typescript  연산을 적용할때는 엄격하다

let 숫자: string | number;
// 숫자 + 1;
// 자바스크립트에서는 가능하지만 + 1은 string 또는 number 타입을 만든것과 같이 취급하므로 오류발생
let 수: unknown = 1;
// 수 -1; 숫자타입이아니므로 숫자가 아닌걸로 취급한다

let user: string = 'kim';
let userage: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, userage, married];


let 학교: { score: (number | boolean)[], teacher: string, friend: string[] | string } = {
    score: [100, 97, 86],
    teacher: 'Phil',
    friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
