# Conditional Rendering
## 1. Conditioal Rendering
## 정의
- 조건부(true or false)에 따라 렌더링 여부 결정
```jsx
function UserGreeting(props) {
  return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting(props) {
  return <h1>회원가입을 해주세요.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggendIn;

  // The rendered component changes based on the value of the variable.
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}
```
## 2. Truthy & Falsy
### 정의
- true/false가 아니지만 boolean으로 여겨지는 값
```jsx
// truthy
true
{} : empty object
[] : empty array
42 : number, not zero
"0", "false" : string, not empty

// falsy
false
0, -0 : zero, minus zero
0n : BigInt zero
'', "", `` : empty string
null
undefined
NaN : not a number
```

## 3. Element Variables
### 정의
- Element 요소들을 변수처럼 사용
### 예시
- This code has two components: a login button and a logout button. Each component represents its respective function as suggested by its name: a login button and a logout button.
```jsx
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      로그인
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      로그아웃
    </button>
  )
}

// ----------------------------------------------------------
function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let button;

  // isLoggedIn에 따라서 컴포넌트가 달라진다.
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

```
## 4. Inline Condition
### 정의
- 조건문을 코드 안에 집어 넣는 것
### (1) Inline If
- If 문을 필요한 곳에 직접 넣어 사용
- 실제 If문을 넣는 것이 아닌, if문과 동일한 효과를 내기 위해 ```&&```라는 논리 연산자를 사용, 다른 프로그래밍 연산과 유사  
=> true && expression -> expression  
=> false && expression -> false
```jsx
function MailBox(props) {
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>안녕하세요!</h1>
      {unreadMessages.length > 0 &&
      <h2>
        현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
        </h2>
      }
    </div>
  );
}

```
### 주의! false에서 주의해야할 부분
- 첫번째 조건이 false라고 무조건 렌더링이 안되는 것이 아님!
```jsx
function Counter(props) {
  const count = 0;

  return (
    // 화면에 아무것도 출력이 안되는 것이 아닌 count의 값인 0이 렌더링
    <div>
      {count && <h1>현재 카운트 : {count}</h1>}
    </div>
  );
}
```
### (2) Inline If-Else
- ?연산자(삼항 연산자)를 사용
```jsx
function UserStatus(props) {
  return (
    <div>
      이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인하지 않은'}</b> 상태입니다.
    </div>
  )
};
```
## Component 렌더링 막기
### Null을 사용한 렌더링 막기
```jsx
function WarningBanner(props) {
  if (!props.warning) {
    // null로 반환해야 화면에 컴포넌트가 렌더링되지 않는다!
    return null;
  } else {
    return <div>경고!</div>
  }
}


// ____________________________________
function MainPage(props) {
  // showWarning의 초기값은 false
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning);
  }

  return (
    <div>
      <WarningBanner warning={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? "감추기" : "보이기"}
      </button>
    </div>
  )
}
```
## 실습

