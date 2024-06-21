import React, { useState, useEffect } from 'react'

function TodoList(props) {
  const [ todo, setTodo ] = useState("");
  const [ todos, setTodos ] = useState([]); // 여러 데이터가 들어가므로 초기값 배열
  // value를 todo로 설정해줘서 이렇게 바꿔주지않으면 input에는 계속 todo의 초기값만 표시된다.
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // react에서는 태그에서 설정하는 것이 아닌 함수 내에서 새로고침을 방지한다.
    if (todo === "") {
      return
    }
    // 다시 원상태로 초기화하기 todo=''와 같이 직접적으로 수정 X
    // 배열을 수정하고 싶으면 ...을 사용해서 요소를 다 펼처준다!
    setTodos(prev => [todo, ...prev])
    setTodo("");
    console.log(todos)
  }
  function TodoListItem(props) {
    return <li key={props.index}>{props.todo}</li>
  }

  return (
    <div>
      <h5>My todos {todos.length}</h5>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write your todolist"/> 
        <button>Add todo</button>
      </form>
      {/* 끝에 닫아주는거 잊지말자!! */}
      <hr /> 
      {/* 여러 요소를 뽑아내고 싶을때에는 map을 사용하기!! */}
      <ul>
        {todos.map((todo, index) => <TodoListItem todo={todo} index={index}/>)}
      </ul>
    </div>
  )
}

export default TodoList