# JavaScript Refresher
## 1. Differences between adding JavaScript to a page and a React project
###  1.1 JavaScript can be executed in Many environments.  
- In the browser, computer and modile devices(Capacitor or React Native)
### 1.2 Adding JavaScript code to a website
(1) Between ```<script>``` tags
- This can quickly lead to unmaintainable & complex HTML files
- but typically only used for very short scripts  
=> It is difficult to maintain

(2) Via ```<script> import ```
- separates HTML & JavaScript code
- Maintaining complex JS powered apps becomes easier

## 2. React project building process
### 2.1 React projects use a bulid process
```html
<body>
    <header>
      <img src="assets/images/js-logo-xs.png" alt="JavaScript logo" />
      <h1>JavaScript Refresher</h1>
      <script src="assets/scripts/app.js" type="module"></script>
      <!--
      attributes
      src : source
      defer : 나머지를 다 읽어와 파싱한 후에 스크립트가 import 되도록 할 수 있다
      type = module => 이 코드를 자바스크립트 모듈로 인식 => 이 JS 파일에서는 다른 스크립트를 import 할 수 있다.
      import 와 export 에대해서는 조금 이후에 설명된다!
      -->
    </header>
</body>
```
- React에서는 자동으로 script 태그를 추가해준다.
- The code you write is not the code that gets executed(like this) in the browser.  
Your code is transformed before it's handed off to the browser. <= package.json 내부의 ```react-scripts``` 가 그 역할을 하는 패키지
### 2.2 Why does React use a build process?
- Raw, unprocessed React code won't execute in the browser. JSX is not a default JavaScript feature.




## 3. “import” 및 "export"

## 4. Revisiting variables and values

## . Revisiting operators

## . Revisiting functions and parameters

## . Arrow functions

## . Learn more about arrow function syntax

## . Revisiting objects and classes

## . Arrays and array methods (like map())

## . Destructuring

## . Destructuring in function parameter list

## . Spread operator

## . Revisiting the control structure

## . Manipulating the DOM without React!

## . Using functions as values
## . Defining a function inside a function
## . Comparison of reference types and default values

## . Next Generation JavaScript - Summary

## . JS Array functions

## . Module Resources