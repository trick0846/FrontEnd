# Components and Props
## 1. Components 와 Props
### 1.1 Components
- React의 Components는 javascript의 함수와 유사하다.  
대신, input으로 props, output으로 React element를 return  
=> component는 틀, 이로 인해 생성되는 것들이 element
### 1.2 Props
- Property : component의 속성(재료)
- 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체


## 2. Props의 특징
### Read-Only
```js
// 1) Pure :input을 변경하지 않으며, 같은 입력값에 대해서는 항상 같은 output을 return
function sum(a+b) {
  return a+b;
}

// 2) impure : 입력값을 변경 ("-= amount")
function withdraw(account, amount) {
  account.total -= amount;
}
```
- All React components must act like pure functions with respect to their props.  
= 모든 리액트 컴포넌트는 Props를 직접 바꿀 수 없고, 같은 Props에 대해서는 항상 같은 결과를 보여줄 것!


## 3. Props 사용법
```jsx
// jsx 사용 ver
function App(props) {
  return (
    <Profile
      name="소플"
      introduction="안녕하세요, 소플입니다."
      // html 태그 입력할 때도 " , "는 사용 X
      viewCount={1500} // 문자도 중괄호로 감싸도 상관 X
    />
  )
}
```
```jsx
// jsx 사용 ver
function App(props) {
  return (
    <Layout
      width={2500}
      height={1440}
      header={
        <header title="소품의 블로그입니다." />
      }
      footer={
        <footer />
      }
    />
  )
}
```
```js
//jsx 사용X
React.createElement(
  Profile,
  {
    name:"name",
    introduction:'Hello!',
    viewCount:1500
  },
  null // children이 없기 때문에
);
```
## 4. Component 생성하기
- Function Component 와 Class Component
### 4. 1 Function Component
```jsx
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>
}
```
### 4. 2 Class Component
- 모든 class component는 ```React.Component를 상속```받아서 생성된다!
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>안녕, {this.props.name}</h1>;
  }
}
```
### 4.3 Component 생성시 주의사항
- Component 이름은 항상 대문자로 시작해야한다!  
=> React는 소문자로 시작하는 것은 DOM tag로 인식하기 때문이다.
- HTML div 태그로 인식
```jsx
const element = <div />;
```
- Welcome이라는 리액트 Component로 인식
```jsx
const element = <Welcome name="이름" />;
```
### 4.4 Component 렌더링
```jsx
function Welcome(props) {
  return <h1>안녕, {props.name}</h1>;
}
const element= <Welcome name="이름" />
ReactDOM.render(
  element, // 이런식으로 어떠한 변수에 할당해서 render해도 되고!!
  document.getElementById('root')
)
```

## Component 합성과 추출
### (1) Component 합성
- Component를 중첩하여 복잡한 화면을 여러 개의 Component로 나눠서 구현
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App(props) {
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" />
    </div>
  )
}

ReactDOM.reder(
  <App />, // 이런식으로 Component를 작성해도 된다!
  document.getElementById('root')
)
```
### (2) Component 추출
- 큰 컴포넌트의 일부를 추출해서 새로운 component 생성 => 재사용성 증가  

- Avater 컴포넌트 생성
```jsx
function Avatar(props) {
  return (
        <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}
```
- Avatar Component 로 대체해서 변경하기
```jsx
function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">


        {/* 이 부분을 추출해서 사용 */}
        <img className="avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        {/* Avatar 컴포넌트로 변경*/}
        < Avatar user={props.author} />


        <div className="user-info-name">
          {props.author.name}
        </div>
      </div>

      <div className="comment-text">
        {props.text}
      </div>

      <div>
        className="comment-date"
        {fornamtDate(props.date)}
      </div>
    </div>
  );
}
```
- UserInfo 추출하기
```jsx
function UserInfo(props) {
  return (
    <div className="user-info">
      < Avatar user={props.user} />
      <div className="user-info-name">
        {props.user.name}
      </div>
    </div>
  )
}
```
- 추출한 UserInfo 사용하기
```jsx
function Comment(props) {
  return (
    <div className="comment">
      {/* 보편적인 이름으로 변경하고자 할때에는 넣을 때 변수명 주의하자!! */}
      <UserInfo user={props.author} />
      <div className="comment-text">
        {props.text}
      </div>
      <div>
        className="comment-date"
        {fornamtDate(props.date)}
      </div>
    </div>
  );
}
```

## 실습 - 댓글 컴포넌트 만들기
- Component의 구조는  
1. React를 설치하고 + 중첩되는 컴포넌트가 있으면 그것도!
```jsx
import React from 'react'
```
2. function을 통해서 컴포넌트를 선언한다.
```jsx
function CommentLis(props) {
  return (
    <div>
      <h1>안녕 반가워!</h1>
    </div>
  )
}

