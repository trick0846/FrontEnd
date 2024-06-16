import React,{ useState, useEffect } from 'react'

function UseEffect () {
  const [ counter, setCounter ] = useState(0)
  const [ keyword, setKeyword ] = useState("")
  const onChange = (event) => {setKeyword(event.target.value)}

  const onClick = () => {
    setCounter(prev => prev + 1) // previous value
  }
  // console.log("I run all the time")
  useEffect(() => {
    console.log("I run only once")
  }, []); // 리액트가 지켜볼 state가 없기때문에 처음만 변화

  // keyword가 변할 때만 실행되도돍 설정하기!
  // 이 안에 다양한 가능을 넣을 수 있다.
  useEffect( () => {
    console.log("counter")
  }, [counter])
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5 ) {
      console.log("안녕안녕")
    }
    console.log("SEARCH FOR", keyword);
  },[keyword]); 
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder='Search here...'></input>
      <h1>Welcome</h1>
      {/* <p>Current Value is {counter}</p> */}
      <button onClick={onClick}>Click Me</button>
    </div>

  )
}

export default UseEffect