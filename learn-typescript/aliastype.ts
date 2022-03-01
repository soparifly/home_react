// aliastype.ts
// 매우복잡한 타입을 나열하는 경우
// 재사용이가능
// 변수에 담아 사용


type Animal = string | number | undefined;
let 동물: Animal;


type Girlfriend = {
    readonly name: string
}


let 여친: Girlfriend = {
    name: '엠버'
}
// 속성이 선택사항일때
type Square = {
    color?: string,
    width: number,

}
let 네모2: Square = {
    width: 100
}
// ? 연산자는 undefiend 타입도 가질수있다.

type Name = string;
type Age = number;
type NewOne = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type XandY = PositionX & PositionY
let 좌표: XandY = { x: 1, y: 1 }
// & 기호를 쓰면 object 안에 두개의 속성을 합쳐준다
// 합치는 다른말로 extend한다라고 표현한다
// Type alias & { name :string } 도 가능

// type 키워드는 재정의가 불가능

type 사람 = { name: string, y: number };
type 짐승 = { name: string, gender: string };

type 사람and짐승 = 사람 & 짐승
let 속담: 사람and짐승 = { name: "조심", y: 100, gender: "남자" }



type 과제2 = {
    color: string, size: number, readonly position: number[]
}

// type 과제3 = {
//     name: string, phone: number, email: string
// }

type 과제3 = {
    name: string, phone: number, email?: string, adult: boolean
}