import React,{ useState, useEffect } from 'react'

function Hello () {
// 길게 풀어쓴 버전
//   function destroyedFtn() {
//     console.log("bye :(")
//   }
//   function effectFtn() {
//     console.log("created :)");
//     return destroyedFtn; // 이렇게 반환되는 함수를 Clean Up function 이라고 한다.
//   }
//   useEffect(effectFtn, []);
//   return <h1>Hello</h1>

// useEffect안에 callback 함수를 작성하는 방법
  useEffect(() => {
    console.log("hi :)")
    return () => console.log("bye :(")
  },[])
}

function CleanUp () {
  const [ showing, setShowing ] = useState(false);
  const onClick = () => setShowing(prev => !prev)
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/>:null } 
    </div>
  );
}

export default CleanUp