"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
//변스타입 지정가능
// 타입 엄격하게 관리한 선언
var 이름 = 'kim';
//string, number, boolean, null, undefined, bigint, [], {},등
// 배열일경우 인자의 타입까지 지정해줘야함
var 이름목록 = ['kim', 'pack'];
//객체일 경우 키값에 ?를 붙여 옵션을 설정할수있다
var 이름객체 = { name: 'kim' };
//Union type
var 이름또는숫자 = 'kim';
todoList: [];
// 함수에 타입지정가능
// Name 등의 대문자로시작 
// 리턴타입은 인자값옆에  지정한 타입외에 다른 타입이 들어갈경우 오류
function 함수(x) {
    console.log('ok');
}
var join = [23, true];
var jone = { name: 'kim' };
var john = { name: 'kim' };
