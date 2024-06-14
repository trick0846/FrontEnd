## 1.HTML : Hyper Text Markup Language
- Markup(문서에 추가되는 정보)
- 태그(Tag)는 여는 태그와 닫는 태그가 짝으로 같이 있어야한다.


## 2. Single Page Application
MPA(Multi)와 상반되는 개념으로, 한 페이지(= 한 개의 html 파일)에 여러개의 contents로 구성

## 3. CSS : Cascading Style Sheets
- 다 외워서 사용하기보다는 필수적인 것들을 먼저 배운후에 추가적으로 학습해나가자.

## 4. JavaScript
- 프로그래밍 언어의 한 종류
- 정식명청은 ECMAScript( ES6(2015년) 등으로 버전을 표현)

### 4. 1 자료형 (Data Type)
- JavaScript는 Dynamic Typing(동적 타이핑) : 변수를 그때마다 정의
- Number, String Boolean, Null, Undefined, Array, Object

```js
// 자료형 (Data Type)
// 여기에서는 var / let 을 사용함 

let n1;
let n2 = undefined // 정의되어있지않음
let n3 = null // 정의되어있으나 그 값이 null]
let n4 = [true, 1, undefined, false, "h", 2, null] // 다양한 값을 넣을 수 있다.
let obj = {a:"apple", b:null, c:[1, 2, 3, 4]}
// object, 객체의 key는 무조건 문자, value는 모두 가능

// 인덱스로 접근이 가능하다!

console.log(n4[1]) // 출력결과 : 1

// obj의 값을 불러오는 방법은 2가지가 있다. 대괄호( [ ] )와 온점 ( . )
console.log(obj['a']) // 출력결과 : apple
console.log(obj.a) // 출력결과 : apple
```

### 4.2 연산자 (Operator)
- 대입연산자(Assignment operator) : 항상 오른쪽에서 왼쪽 방향으로 흐름이 흘러간다.
```js
let a = 10;
let b = 20;

console.log(a) // 10
console.log(b) // 20
```

- 산술 연산자(Arithmetic operators)
```js
let a = 2;
let b = 4;

console.log(a + b); // a += b

console.log(a - b); // a -= b

console.log(a * b); // a *= b

console.log(a / b); // a /= b

console.log(a % b); // 나머지 구하는 연산자

console.log(a ** b); // 제곱연산자
```
- 증감연산자  
postfix 방식 : a++  
prefix 방식 : ++a

```js
let a = 1;
let b = a++; // b에 a의 값을 할당한 후에 a 증가

console.log(a, b); // 2 1

let c = 1;
let d = ++c; // c를 1 증가시킨 후에 d에 할당

console.log(c,d) // 2 2
```
- 비교 연산자 (Comparison operators)  
: <  , > ,  <= ,  >=  
```true OR false```  로 출력된다.

- 동등 연산자 (Equality operators)와 일치 연산자(Strict equality operators)  
동등연산자는 ``` a == b ```,  ```a != b ``` : 단순히 값이 같은지 판단  
일치연산자는 ``` a === b ```,  ```a !== b ``` : 값과 '자료형'까지 같은지 판단 

- 이진 논리 연산자(Binary logical operators)  
``` a && b ```(AND) , ``` a || b ``` (OR)

- 조건부 연산자(Conditional operator/ 삼항 연산자)   
``` 조건식 ? a : b ``` : 조건식이 True이면 a, 아니면 b  

## 5. 함수(Function)
-  함수란 입력(parameters, arguments)을 받아서 정해진 출력을 하는 것
```js

// 1) function statement 사용하기
function sum(a, b) {
  return a + b;
}


// 2) arrow function expression 사용하기
const multiple = (a, b) => {
  return a * b;
}
```

## 6. 개발환경 설정하기
- Node.js : 개발환경을 제공
- npm : node package manager : 버전 관리 등의 역할  
```bash
node --version // node.js 버전 확인
>>> v20.12.2

npm --version // npm 버전 확인
>>> 10.5.0
```









