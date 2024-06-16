# props
- props는 부모 컴포넌트로부터 자식컴포넌트로 state 전달

- 형태가 유사한 컴포넌트는 props로 안에 바뀔 내용만 넘겨주고  
하나의 컴포넌트를 재사용하기
```jsx
function Btn() {
  return (
    <button style={{
      backgroundColor: "tomato",
      color:"white",
      padding:"10px 20px",
      borderRadius:"10px",
      border:"0"
      }}>
      Save Changes
    </button>
  )
}
function ConfirmBtn() {
  return (
    <button style={{
      backgroundColor: "tomato",
      color:"white",
      padding:"10px 20px",
      borderRadius:"10px",
      border:"0"
    }}>
    Confirm
    </button>
  )
};
```
- 위처럼 쓰기보다는 사소하게 다른 부분을 props로 넘겨주기!!
- props로 함수도 전달 가능 => 컴포넌트에는 event listener를 적을 수 는 없다.
- props로 넘겨주고 싶을때는 문자는 "", 나머지는 중괄호 사용해서 넘기기 {}

## memo
- props가 바뀌지않아도 재렌더링 되는것들이 있다. 이를 방지하기 위해서 memo를 사용한다.
```jsx
// 1) 
return (
        <div>
          <Btn text={value} bool={123} onClick={changeValue}/>
          {/* 자동으로 알아서 Btn({text="Save Change"}) 로 인식한다. */} 
          <Btn text="Confirm" bool={null}/>
        </div>
      )

// => 이 부분에서는 두번째 Btn에서 props 변화가 없는데도 re-render

// 2) React.memo() 사용
const MemorizedBtn = React.memo(Btn)

    function App() {
      // 부모 컴포넌트는 state가 변할때 re-render
      // 불필요한 render가 이루어질 수 있다.
      // props가 변경되지 않는한 re-render 되지않도록 설정

      const [ value, setValue ] = React.useState("Save Change");
      const changeValue = ( ) => {
        setValue("Revert Changes")
      }

      return (
        <div>
          <MemorizedBtn text={value} bool={123} onClick={changeValue}/>
          {/* 자동으로 알아서 Btn({text="Save Change"}) 로 인식한다. */} 
          <MemorizedBtn text="Confirm" bool={null}/>
        </div>
      )
    }

// => 이렇게하면 props에 변동이 없는 두번째 컴포넌트는 re-render이 되지않는다.
```


## Props Types
- 코드를 작성하는과정에서 문법사의 오류는 없으나 계획한대로 변수가 들어가지 않았을 때(문자를 넣어야하는데 숫자가 들어감 등등) propTypes를 사용한다.
```jsx
<script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>

Btn.propTypes = {
  text:PropTypes.string, // state의 이름 : PropTypes. 타입(소문자)
  fontSize:PropTypes.number
}
function App() {
  const [ value, setValue ] = React.useState("Save Change");
  return (
    <div>
      <Btn text={value} fontSize={18}/>
      <Btn text="Confirm" fontSize="asdf"/>
    </div>
  )
}


// => Failed prop type: Invalid prop `fontSize` of type `string` supplied to `Btn`, expected `number`.
  // at Btn (<anonymous>:10:19)
  // at App (<anonymous>:34:31)
```
- 이 부분은 문서도 한번 찾아보자!
```https://legacy.reactjs.org/docs/typechecking-with-proptypes.html```