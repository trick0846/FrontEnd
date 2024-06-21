# useEffect
- state가 변할 때마다 코드 전체가 다 재실행된다.
- API 실행시에 계속 실행되면 코드의 성능에 영향을 미칠것
- 따라서 이를 제한하기위해서 ```useEffect```를 사용한다.
- 또한, 내부에 코드들의 실행지점을 선택할 수 있다.
내부에 조건문 등을 넣어서 조절할 수 있다.
```jsx
import { useEffect } from 'react'

// 1) 컴포넌트가 처음 실행될 때만 rendering
useEffect( () => {
  console.log("reder only once")
}, [] )  // [] 빈 배열이므로 변화 X이므로!!

// 2) state가 변화할 때만 rendering
useEffect( () => {
  console.log("A state changes")
}, [stateName])

useEffect( () => {
  console.log("state1 or state2 changes")
}, [state1, state2])
```
- React.js는 새로운 정보를 자동적으로 refresh 해준 다는 점에서 편리하다.  
하지만, 때로는 이러한 기능이 불필요할 때가 있다.
예를 들어, 검색창을 이용하는데 버튼 창이 리렌더링 되는 상황이 그렇다.
이렇게 불필요한 리렌더링을 피하기 위해 React.js가 따로 준비한 것이 바로 useEffect이다.
useEffect는 실행시키고자 하는 함수와 React.js가 이벤트를 주시하게끔 하는dependency로 이루어져있다. 즉, 내가 원하는 부분을 지정하여 그 부분만을 변화시킬 수 있는 것이다.
버튼을 누르면 버튼만, 검색창을 이용할 때는 검색창만 리렌더링 되는 것처럼 말이다.
### parameters
```jsx
useEffect(effect: React.EffectCallback, React.DependencyList)
        // Callback function            // List => multiple objects
```

## CleanUp function
- 코드 작성 팁! : 삼항연산자 사용하기!
```jsx
function CleanUp () {
  const [ showing, setShowing ] = useState(false);
  const onClick = () => setShowing(prev => !prev)
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/>:null} 
    </div>
  );
}
```
- 코드가 create될 때 뿐만 아니라 destroy될 때도 특정 함수 실행 가능하다!!

```jsx

```