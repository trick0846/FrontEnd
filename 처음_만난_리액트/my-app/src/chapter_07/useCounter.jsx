import React, {useState} from 'react'

function useCounter(initialValue) {
  
  // 초기값을 initialValue로 설정
  const [ count, setCount ] = useState(initialValue)
  
  const increaseCount = () => setCount((count) => count + 1)
  const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;