# Handling Event
## 1. Event
### event
- 특정한 사건  
e.g. 버튼 클릭, 마우스오버 등
- Event Handling : 이벤트를 처리하는 것
- DOM과 React는 이벤트 이름의 표기법과 함수를 전달하는 방식에 차이가 있다.
```jsx
// Click event가 발생하면 activate 함수가 호출된다.

// 1) DOM의 Event
<button onclick="activate()"> 
  Activate
</button>


// 2) React의 Event
// => onClick의 표기가 Camel Case
<button onClick={activate}> 
  Activate
</button>
```

### Event Handler(Event Listener)
- 어떤 이벤트가 발생했을 때, 해당 이벤트를 처리하는 함수

```jsx
function Toggle(props) {
  const [isToggleOn, setToggleOn] = useState(true);

  // 방법 1 : 함수 안에 함수로 정의
  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // 방법 2 : arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn );
  }

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "On" : "Off"}
    </button>
  )
}

export default Toggle
```
## 2. Argument
### Argument(parameter)
- Event Handler에 전달할 데이터(매개변수)
```jsx
// 둘 다 id, event를 매개변수로 전달

// function component에서는 다음과 같이 매개변수를 전달한다.
function MyButton(props) {
  const handleDelete = (id, event) => {
    console.log(id, event.target);
  };

  retrn (
    <button onClick={(event) => handleDelete(1, event)}>
      삭제하기
    </button>
  )
}
```
## 실습
