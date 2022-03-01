// function.ts

// 파라미터에 타입을 지정하지않으면 any 타입으로 할당됨
function 함쑤(a: number): number {
    return a * 2
}
함쑤(2);

// void 타입
// return 하는걸 사전에 막음
function 함쑤2(a: number): void {
    1 + 1
}
// 자바스크립트와 다른점 타입지정된 파라미터는 필수임 안쓰면 에러발생
// 파라미터를 유무옵션으로 넣을경우 ?를 넣어준다
// 변수를 지정하는 타입도 마찬가지
function 함수2(x?: number): void {

}
함수2();
// ?가 중요한이유
// 연산자는 들어올수있음을의미하는데 number|undefined와 같다 
// 함수를 쓸때 파라미터를 undefiend를 입력하는것과같다 

function 함수3(x: number | string): void {
    // console.log(x+3)
    // number|number
    // number|string 가능
    // if (x의 타입이 숫자면 처리) {
    // }
}

// 이름을 파라미터로 입력하면 콘솔창에 안녕하세요 홍길동 을 출력해주고 아무것도 파라미터로 입력하지않고 함수를 사용하면 이름이 없습니다 출력하는 함수를 만들어보자
let 이름5: string = "홍길동";
function 숙제1(숙제?: string): void {
    if (숙제) {
        console.log("안녕하세요" + 숙제);
    } else {
        console.log("이름이 없습니다");
    }
}
// 숙제1(이름5);
숙제1();

//함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어주는 출력함수만들기

// function generator(x: number | string) {

//     return console.log(x.toString().length);

// }
// generator(123);

// 풀이
function 자릿수세기(x: number | string): number {
    return x.toString().length
}


//  결혼 가능 확률을 알려주는 함수만들기
/**
 * 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(ture/false), 매력점수('상','중'),
 * 2.월 소득은 만원당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일때만 100점으로 계산
 * 3. 총점수가 600점 이상일경우'결혼가능'을 return 해줘야하고 그외엔 아것도 return 안함
 * 
 * 옘병
 */

function 결혼가능하냐(월소득: number, 집보유: boolean, 매력점수: string) {

    let 점수: number = 0;
    점수 += 월소득;
    if (집보유 === true) {
        점수 += 500;

    }
    if (매력점수 === '상') {
        점수 += 100;

    }
    if (점수 >= 600) {
        return '결혼가능'
    }
}
// zㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ

