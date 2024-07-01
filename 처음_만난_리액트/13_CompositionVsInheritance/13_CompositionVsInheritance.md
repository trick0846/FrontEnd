# Composition 방법과 Inheritance
- React에서 컴포지션을 구성하는 방법에 대해서 알아보자
## 1. Composition
### Composition
- 구성 => 합성 / 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
- 여러 개의 컴포넌트들을 어떻게 합성할 것인가>
### (1) Containment
- 하위 컴포넌트를 포함하는 형태의 합성 방법
- Sidebar나 Dialog 같은 Box 형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없다.
- children props 사용해서 조합한다.
```jsx
function FancyBorder(props) {
  return (
    <div className={'FancyBorder Fancy Border-' + props.color}>
      {/* 이 부분에 FancyBorder의 children이 들어간다! */}
      {props.children}
    </div>
  )
}
```
- 여러개의 Children 집합이 필요한 경우는 어떻게 할까?  
별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어주기
```jsx
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}


// 상위 컴포넌트 App => SplitPane에서 여러 개의 children 집합이 필요함
// props로 넘겨주어서 사용(jsx에서는 html element도 props로 넘겨줄 수 있다)
function App(props) {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    />
  );
}

```
### (2) Specialization
- 전문화, 특수화
- 범용적인 개념을 구별이 되게 구체화한것
- class에서의 상속 = 합성(Composition)
```jsx

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog
      title="어서 오세요"
      message="우리 사이트에 방문하신 것을 환영합니다!"
    />
  );
}
```
### Containment + Specialization
- ```props.children``` + ```special props```
```jsx
// Dialog : 하위 컴포넌트
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}


// SignUpDialog : 상위 컴포넌트
function SignUpDialog(props) {
  const [nickname, setNickname] = useState('');

  const handleChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSignUp = () => {
    alert(`어서 오세요, ${nickname}님!`);
  };

  return (
    <Dialog
    {/* Specialization */}
      title="화성 탐사 프로그램"
      message="닉네임을 입력해 주세요."
    >
    {/* Containment : 이 부분이 props. children 으로 전달된다!! */}
      <input
        value={nickname}
        onChange={handleChange}
      />
      <button onClick={handleSignUp}>
        가입하기
      </button>
    </Dialog>
  );
}
```
## 2. Inheritance
### Inheritance
- 상속 / 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것

## 정리
- 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만들자!

## 실습
