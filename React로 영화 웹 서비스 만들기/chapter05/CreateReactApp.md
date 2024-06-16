# CreateReactApp
[React Github](https://github.com/facebook/react)
## 1. Create React App
```bash
npx create-react-app "project name"
cd "projectname"
npm start
```

## 2. CSS Moduler
- css 파일을 그냥 사용시에는 각 컴포넌트마다 이름이 겹치지않도록 사용해야한다.
- ```"fileName".modele.css```로 설정시에는 HTML에 렌더링시에 className을 랜덤하게 설정해준다.
- 대신에 css 파일 내에 있는 class들의 이름을 object처럼 사용해야한다.
- 예제
```jsx
<div className={Btn.btn}></div>
```

## 3. StrictMode
- ```index.js```에 있는 ```<StrictMode>```
- 3:00 분쯤에 rendering이 두번되는 현상이 있어서 찾아보았더니 index.js에
React.StrictMode 테그에 감싸져 있어서 그렇다고 합니다.
StrictMode는 create-react-app로 설치했을 때 기본적으로 생성되는 테그로,
해당 테그로 감싸져 있는 경우 자손까지 검사한다해서 두 번 실행된다고 합니다.
React.StrictMode 테그를 지우시고 해보세요.
```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

