# Rendering Element

## Element
- 어떤 물체를 구성하는 성분
- Elements are the smallest building blocks of React apps.  
리액트 앱을 구성하는 가장 작은 블록들
- Elements는 화면에서 보이는 것들을 기술
```js
const element = <h1>Hello, world</h1>;
```
- 리액트 Elements는 자바스크립트 객체 형태로 존재  
props 내에 children이 들어간다!
```jsx
{
  type:'button',
  props: {
    className:'bg-green',
    children: {
      type: 'b',
      props:{
        children: 'Hello, element!'
      }
    }
  }
}
```
```jsx
React.createElement(
  type,
  [props],
  [...children]
)
```
- 코드의 차이 확인해보기  
(1)
```jsx
function Button(props) {
  return (
    <button className={`bg-${props.color}`}>
      <b>
        {props.children}
      </b>
    </button>
  )
}

function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셨으면 확인 버튼을 눌러주세요.</p>
      <Button color='green'>확인</Button>
    </div>
  )
}
```  
(2)
```jsx
{
  type:'div',
  props:{
    children:[
      {
        type:'p',
        props:{
          children:'내용을 확인하셨으면 확인 버튼을 눌러주세요.'
        }
      },
      {
        type:'button',
        props: {
          color:'green',
          children:'확인'
        }
      }
    ]
  }
}
```
## React Element의 특징
### 불변성(immutable)  
한번 생성된(생성 후의) Element는 children이나 attributes를 바꿀 수 없다.  
붕어빵 틀을 생각해보자.

## 구조 파악하기
### Root DOM Node
```html
<div id="root"></div>
```
- 보통 하나의 Root DOM Node를 가지고 있으나,  
기존에 생성된 페이지에 React를 추가할때에는 여러개의 Root Node를 가질수도 있다.
```jsx
const element = <h1>안녕, 리액트!</h1>
ReactDOM.render(element, document.getElementById("root"))
```
### 렌더링된 Element 업데이트하기
```jsx
function tick() {
  const element = (
    <div>
      <h1>안녕 리엑트</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'))
}

// 매초마다 tick 호출, 부분 수정이 아니라 그때마다 계속 호출되는 것!
setInterval(tick, 1000); 
```

### 실습(시계 만들기)
- 1단계 : Clock.jsx 파일 생성하기
```jsx
import React from 'react'

// toLocaleTimeString() : 현재 시간 / toLocaleDateString(): 날짜
function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock;
```
- 2단계 : index.js 파일 수정하기  
react에서는 불필요한 설치시에 오류 메시지가 terminal에 표시된다.  
```setTimeout(function,time)```은 특정시간 후에 함수 실행  
```setInterval(function, time)```은 특정시간마다 반복

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
},1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```