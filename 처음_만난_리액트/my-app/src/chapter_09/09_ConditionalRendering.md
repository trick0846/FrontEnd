# Conditional Rendering
## 1. Conditional Rendering
### 정의
- Condition(조건) => conditional Rendering = 조건부 렌더링
- 어떠한 조건(조건문 / true or false)에 따라서 렌더링이 달라지는 것
```jsx
// 두 개의 컴포넌트
function UserGreeting(props) {
  return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
  return <h1>회원가입을 해주세요.</h1>;
}

// conditional rendering
function Greeting(props) {
  const isLoggedIn = props.isLoggendIn;
  
  // props의 isLoggendIn에 따라서 렌더링되는 component가 다르다
  if (isLoggendIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

## 2.

## 3.

## 4.
