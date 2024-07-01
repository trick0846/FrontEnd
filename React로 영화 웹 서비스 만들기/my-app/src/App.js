import {useState, useEffect} from "react"


// chapter 05
import Button from './components/05/Button'

// chapter 06
// 출력이 두 번 되는 오류 잡아야한다!!
import CleanUp from './components/06/CleanUp'

// chapter 07
import TodoList from './components/07/TodoList'
import CoinTracker from './components/07/CoinTracker'
import Home from "./components/07/Home"
import Detail from './components/07/Detail'

  // Route 연습하기
import {
  // hash Router를 사용하면 /#/을 추가해야한다.
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  // chapter 05
  // return (
  //   <div>
  //     <h1>Hello</h1>
  //     <Button text="Click"/>
  //   </div>
  // );

  // chapter 06
  return (
    <div>
      {/* 6.0 ~ 6.3 */}
      {/* <UseEffect /> */}

      {/* 6.4 */}
      {/* <CleanUp/> */}

      {/* 7.1 */}
      {/* <TodoList/> */}

      {/* 7.2 */}
      {/* <CoinTracker/> */}

      {/* 7.3 */}
      {/* <Home/> */}

      {/* 7.5 React Router */}
      <Router>
        {/* Switch의 역할 : Route를 찾아준다. */}
        <Switch>
          <Route path="/movie/:id">
          {/* parameter를 넣는 방법은 vue와 유사하다!! */}
            <Detail/>
          </Route>
          {/* <Route path={`${process.env.PUBLIC_URL}/`}> */}
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default App;
