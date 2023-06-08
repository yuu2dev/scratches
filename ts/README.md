# TypeScript

## unknown 과 any

`unkown` 타입과 `any` 타입의 차이는 `재선언 가능` 여부이다.  
unkown 타입은 한번 타입이 선언되면 재차 할당시 동일한 타입이여야 한다. 예를 들어, number 타입의 값을 할당시 다음 번 할당의 경우 number 타입이 와야 한다.

```ts
let a: unknown;
let b: string;
// number 타입으로 선언
a = 5;
b = "b";
// 에러 발생! unkown 타입은 number 타입이 할당되었으므로 다른 타입이 와서는 안된다.
a = b;
```

그러나, `any` 타입은 다르다. 어떤 타입이 와도 재선언이 가능하다.

```ts
let a: any;
let b: string;
// number 타입으로 선언
a = 5;
b = "b";
// ok
a = b;
```

## never

`never` 타입은 함수 반환 값이 없는 경우 사용한다. 여기서 값이 없는 경우가 참 애매한데 자바스크립트 함수의 경우 리턴 값이 없는 경우 콘솔로 찍어보면 보통 `undefined` 가 찍힌다.  
그러나, never 타입은 `void` 도 `undefined` 도 아닌 예외가 발생시 선언한다.

```ts
const neverFunc = (flag: boolean = false): string | never => {
  if (flag) {
    throw new Error("never");
  }
  return "s";
};
```
