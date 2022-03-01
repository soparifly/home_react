// primitivetype.ts
// JS문법을 TS 에서 사용가능하다
// 타입만 잘 지정해줘야한다
var kim = 'kim';
// 지정한 타입외의 데이터가 들어가면 에러가 발생한다
// 변수에 타입지정하는것은 실드를 씌우는것이다
var 나이 = 50;
var 결혼했니 = false;
var 널 = null;
var 언디파인 = undefined;
var 회원들 = ['kim', 'park'];
// 재밋네
var 회원들2 = {
    member1: 'kim',
    member2: 'park'
};
/**
 * 타입지정은 무조건 할필요가없다
 * 타입스크립트는 대부분 자동으로 지정해준다
 * 값에 따라 타입의 default 값이 정해진다
 */
// 예제
// 내이름 나이 출생지역으로 저장하기
var 예제이름 = 'kimbyulook';
var 예제나이 = 33;
var 예제지역 = '광주';
// 가장좋아하는 곡과 가수이름 변수에 담기
var 예제2 = {
    가수: "지아",
    제목: "여가",
};
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
