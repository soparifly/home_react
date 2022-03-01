// index.ts

//변스타입 지정가능
// 타입 엄격하게 관리한 선언
let 이름: string = 'kim';

//string, number, boolean, null, undefined, bigint, [], {},등

// 배열일경우 인자의 타입까지 지정해줘야함
let 이름목록: string[] = ['kim', 'pack'];

//객체일 경우 키값에 ?를 붙여 옵션을 설정할수있다
let 이름객체: { name: string } = { name: 'kim' }

//Union type
let 이름또는숫자: string | number = 'kim';

todoList: []

type Name = string | number;




// type alias
type 내타입 = string | number;
// 함수에 타입지정가능
// Name 등의 대문자로시작 
// 리턴타입은 인자값옆에  지정한 타입외에 다른 타입이 들어갈경우 오류
function 함수(x: number): void {
    console.log('ok')
}
//tuple 타입
type Member = [number, boolean];

let join: Member = [23, true];

type Member2 = {
    name: string
}
let jone: Member2 = { name: 'kim' }

// object에 타입 지정해야할 속성이 많으면
type Member3 = {
    // 모든 오브젝트의 속성지정 
    [key: string]: string,
}
let john: Member3 = { name: 'kim' }


// class User {

//     name: string;

//     constructor(
//         private name: string,
//         private ageService: AgeService,
//         private data: Animatable;
//         ) {
//             this.name = data;
//     }
// }
/**
 * typeScript에서 자켜야할 코딩룰도있고 
 * 타입문법 외의 기능도 있다
 * 
 */

// Persons: any[]
// //backend
// // export class PersonDTO implement IPersonDTO {
//     name: string;
//     age: number;
// }

export interface IPersonDTO {
    name: string;
    age: number;

}