// primitivetype.ts

// JS문법을 TS 에서 사용가능하다
// 타입만 잘 지정해줘야한다
const kim: string = 'kim';
// 지정한 타입외의 데이터가 들어가면 에러가 발생한다

// 변수에 타입지정하는것은 실드를 씌우는것이다
let 나이: number = 50;
let 결혼했니: boolean = false;

let 널: null = null;
let 언디파인: undefined = undefined;


let 회원들: string[] = ['kim', 'park'];
// 재밋네
let 회원들2: {
    member1: string,
    member2: string
} = {
    member1: 'kim',
    member2: 'park'
}

/**
 * 타입지정은 무조건 할필요가없다
 * 타입스크립트는 대부분 자동으로 지정해준다
 * 값에 따라 타입의 default 값이 정해진다
 */


// 예제
// 내이름 나이 출생지역으로 저장하기
const 예제이름: string = 'kimbyulook';
const 예제나이: number = 33;
const 예제지역: string = '광주';


// 가장좋아하는 곡과 가수이름 변수에 담기
const 예제2: { 가수: string, 제목: string } = {
    가수: "지아",
    제목: "여가",
}

let project: {
    member: string[],
    days: number,
    started: boolean
} = {
    member: ['kim', 'park'],
    days: 30,
    started: true
}

