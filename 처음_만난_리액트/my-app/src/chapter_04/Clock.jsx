import React from 'react'

// toLocaleTimeString() : 현재 시간 / toLocaleDateString(): 날짜
function Clock(props) {
  return (
    <div>
      <h1>안녕, 리액트</h1>
      <h2>현재 시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

export default Clock;