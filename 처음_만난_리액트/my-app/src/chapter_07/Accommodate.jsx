import React, { useEffect, useState } from 'react'
// useCount 함수 사용하기 위해 가져오기
import useCounter from './useCounter'

const MAX_CAPACITY = 10; // 정원 수를 이 부분에서 지정

function Accommodate(props) {

// 1) 사용할 변수 및 함수 선언
  const [isFull, setIsFull] = useState(false); // state로 변수 선언

  //initialValue를 0으로!
  const [count, increaseCount, decreaseCount] = useCounter(0);


  // Dependeycy Array가 없는 경우,
  // component가 mount된 직후에 호출되며, 이후에 컴포넌트가 업데이트 될 때마다 호출됩니다.
  useEffect(() => {
    console.log("=================")
    console.log("useEffect() is called")
    console.log(`isFull: ${isFull}`);
  })

  // Dependeycy Array가 있는 경우,
  // component가 mount된 직후에 호출되며, 이후 카운트 값이 바뀔 때마다 호출되는데
  // 이 때, 용량이 가득 찾는지 아닌지의 상태를 isFull 이라는 state에 저장한다.
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]); // [count] 가 dependency array

  return (
    <div style={{padding: 16}}>
      <p>{`총 ${count}번 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>
      {/* 최소값을 지정해놨기때문에 0부터는 useEffectHook도 호출되지 않는다. */}

      {isFull &&<p style={{color:"red"}}>정원이 가득찼습니다.</p>}
      
    </div>
  );

}

export default Accommodate;

