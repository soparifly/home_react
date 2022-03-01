// NarrowingAssertion.ts
function 내함숩(x: number | string) {
    /**
     * Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing을 쓴다
     */

    // 만약에 타입이 string일때 
    if (typeof x === 'string') {
        return x + '1';
    } else {
        return x + 1;
    }

}
내함숩(124);

function 내함수2(x: number | string) {
    let array: number[] = [];
    // array[0] = x; 오류발생 number로만 제한

    if (typeof x === 'number') {
        array[0] = x;
    } else {
        /**
         * Narrowing으로 판정해주는 문법들
         * 
         * typeof 변수 
         * 속성명 in 오브젝트 자료
         * 인스턴스 instanceof 부모
         * 
         *  
         */
    }
}

function 저함수(x: number | string) {
    if (typeof x === "string") {
        // 일정타입을 정하고 조건에 맞춰서 
        return x + "1";
    } else {
        let arr: number[] = [];
        // x는 union type 이라 오류발생
        // arr[0] = x;
        if (typeof x === "number") {
            arr[0] = x;
        }
    }
    // in 속성 : 오브젝트 자료
    // instanceof 인스턴스 부모 확인


}
console.log(저함수(123));
//타입을 하나로 확정시켜주고싶을때 
// 타입 덮어쓰기
function 이함수(x: number | string) {

    let array: number[] = [];
    array[0] = x as number;

    // as 문법의 용도
    /**
     * uinon type 을 하나로 확정하고싶을때 
     * let 이름 : string  = 'kim';
     * 이름 as number
     * 처럼 타입을 변환하는게 아니다
     * 무슨타입이 들어올지 100% 확실할때 쓴다
     * 남이 짠 코드를 수정할때 타입에러가 발생할때
     * 
     * 옛날 as 문법 
     * <type>필드
     * 
     */
}

// 숙제 1 
function 과제1(x: (number | string)[]) {

    const array: number[] = [];

    x.forEach((y) => {

        if (typeof y === 'string') {
            array.push(parseFloat(y))
        } else {
            array.push(y)
        }

    })
    return array
}

// let 철수 = { subject: "math" };
// let 영희 = { subject: ['과학', '영어'] }
// let 민수 = { subject: ['과학', '미술', '국어'] }

function 과목기계(x: { subject: string | string[] }) {

    if (typeof x.subject === "string") {
        return x.subject
    } else if (Array.isArray(x.subject)) {
        // 0부터 시작하는 함수의 갯수 - 1 이면 
        // 3개일때 -1 2번 
        //마지막 번호 2번
        return x.subject[x.subject.length - 1]
    } else {
        return '없음'
    }
}
