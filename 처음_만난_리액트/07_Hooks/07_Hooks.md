# Hooks
## 1. Hooks
- 컴포넌트는 Function Component 와 Class Component 가 존재한다.
- Class Component는 생성자에서 state를 정의, setState() 함수를 통해 state 업데이트, Lifecycle methods를 제공한다.
- Function Component는 state 사용 X, Lifecycle에 따른 기능 구현 불가  
-> Hooks이 이러한 부분을 대체! 

## 2. useState & useEffect
### 2.1 useState() 사용법
```jsx
const [변수명, set함수명] = useState(초기값);
```

```jsx
import React, { useState } from "react"

function Counter(props) {
  // var count = 0;
  const [count,setCount] = useState(0)
  // class에서는 하나를 클릭해서 모든 state값을 update 가능
  // but useState() 에서는 하나당 한개의 함수 사용
  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      {/* <button onClick={() => count++}> */}
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

=> 이 코드의 경우 값이 바뀔때마다 재렌더링 X
```

### 2.2 setEffect()
- Side effect(부작용 / React에서는 효과, 영향)를 수행하기 위한 Hook
- 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링 중에는 작업이 완료될 수 없기 때문에...
```jsx
// 1) 기본 형태
useEffect(effect function , 의존성 배열);

// 2) mount, unmount시에 단 한번만 실행하고 싶을 때에는 빈 비열( [] )
useEffect(effect function , []); 

// 3) 배열 생략시 컴포넌트가 업데이트 될 때마다 실행된다.
```
- 예시 코드
```jsx
import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  // componentDidMount, componentDidUpdate와 비슷하게 작동합니다.
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트 합니다.
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count + 1)}>
        클릭
      </button>
    </div>
  );
}

export default Counter;
```

## 3. useMemo
### useMemo()
- Memoization : 최적화를 위해 사용되며, 중복 연산을 최소화  
memoization된 연산값을 Memoized Value라고 한다.
- 렌더링이 실행되는 동안 함수가 작용된다.
```jsx
const memoizedValue = useMemo(
  () => {
    // 연산량이 높은 작업을 수행하여 결과를 반환
    return computeExpensiveValue(의존성 변수1, 의존성 변수);
  },
  // 의존성 배열을 넣지 않을 경우, 매 렌더링마다 함수가 실행된다.
  // 빈 배열인 경우에는, 컴포넌트 마운트 시에만 호출된다.
  [의존성 변수1, 의존성 변수2]
);
```

## 4 useCallback
### 4.1 useCallback
- useMemo() Hook과 유사하지만 값이 아닌 함수를 반환
- useCallback Hook을 사용하면 컴포넌트가 렌더링될때마다가 아닌 값이 변할 때에만 렌더링된다.
```jsx
const memoizedCallback = useCallback(
() => {
  doSomething(의존성 변수1, 의존성 변수2);
},
[의존성 변수1, 의존성 변수2]
)
```
```jsx
// 두 함수는 동일한 역할을 하는 함수
useCallback(function, Dependency Array)

useMemo(() => 함수, 의존성 배열);
```


## 5 useRef
### reference
- useRef() : 레퍼런스(특정 컴포넌트에 접근할 수 있는 객체)를 사용하기 위한 Hook
- ```refObject.current = 현재 참조하고 있는 Element```
- 변경가능한 current를 가진 상자, vue의 ref를 생각하자!
```jsx
const refContainer = useRef(초깃값);
```
- 내부의 데이터가 변경되었을 때 별도로 알리지 않는다.

## 6 Hook의 규칙
### (1) Hook은 무조건 최상위 레벨에서만 호출되어야한다.
- Hook은 컴포넌트가 렌더링될 때마다 매변 같은 순서로 호출되어야 한다.

```jsx
function MyComponent(props) {
  const [name, setName] = useState('Inje');

  if (name !== '') {
    useEffect(() => {
      ......
    });
  }
  // => 렌더링할 때마다 순서에 맞게 진행되는 것이 아닌,
  // 조건문의 결과에 따라 호출되는 Hook이 달라진다.
}
```
### (2) 리액트 함수 컴포넌트에서만 Hook을 호출해야 한다.
### eslint-plugin-react-hooks
- 리액트 컴포넌트가 hook의 규칙을 따르지않을 때, 올바른 방법을 제시해주기도 한다.

```jsx
const memoizedValue = useMemo(
  () => {
    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
  },
  [의존성 변수1, 의존성 변수2] // 둘중 하나라도 변하면 create함수 작동
);
```

## Custom Hook 만들기
- Custom Hook을 만들어야 하는 상황
- 이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수
- 단순한 함수와 같으나 use를 붙여서 Custom Hook이라는 것을 표시해주기!
- 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있다.
- 각 Custom Hook 호출에 대해서 분리된 state를 얻으며, 각 Custom Hook은 서로 독립적이다
```jsx
const [userId, setUserId] = useState(1);
const isUserOnline = useUserStatus(userId); // userId state를 사용!!
// hook들 끼리 이러한 방법으로 데이터 공유가 가능하다!
```
## 실습




