# JSX
## 1. JSX란
### 1.1 JSX
- JSX : A syntax extension to JavaScript
- 확장된 문법 (JS + XML/HTML)
```js
// JS 코드와 HTML가 합쳐짐
const element = <h1>Hello, world!</h1>
```
- JSX 코드를 JS 코드(createElement)로 변환하는 것이 React
```js
// createElement 의 구조
React.createElement(
  type,
  [props], // 속성
  [...children] // element가 포함하는 자식 element
)
```
- JSX 사용이 필수는 아님 BUT 편리성을 위해서 사용!

## 1.2 JSX의 장점

- JSX 사용함
```html
<div>Hello, {name}</div>
```
- JSX 사용 안함
```js
React.createElement('div', null, `Hello, ${name}`);
```
### (1) 간결한 코드
### (2) 가독성 향상
### (3) Injection Attacks 방어
```js
const title = response.potentiallyMaliciousInput;

// 이 코드는 안전합니다.
// 명시적으로 선언되지 않은 값은 괄호 안에 들어갈 수 없기때문에!!
const element = <h1>{title}</h1>;
```

## 2. JSX 사용법
- JS code + XML / HTML
- 예제  
예제 1
```js
// XML / HTML { JS code } XML / HTML
const name = '소플'
const element = <h1>안녕, {name}</h1>;

React.DOM.render(
  element,
  document.getElementById('root')
)
```
예제 2
```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Inje',
  lastName: 'Lee'
};

// 함수도 넣을 수 있다!!
const element = (
  <h1>
    Hello, {formatUser(user)} 
  </h1>
);

ReactDOM.render(
  element, // 직접적인 태그
  document.getElementById('root') 
);
```

### 태그의 속성(attribute)에 값을 넣는 방법
```js
// 큰따옴표("") 사이에 문자열 넣기
const element = <div tabIndex="0"></div>;

// 중괄호 사이에 자바스크립트 코드 넣기
const element = <img src={user.avatarUrl}></img>;
```

### 자식을 정의하는 방법
- JSX 안에 자식을 정의해도 된다!
```js
const element = (
  <div>
    <h1>안녕하세요</h1> 
    <h2>열심히 리엑트를 공부해 봅시다!</h2>
  </div>
);
```
