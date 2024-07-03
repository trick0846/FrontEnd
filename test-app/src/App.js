// import logo from './logo.svg';
// import './App.css';
// import {useState, useEffect} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
function App() {

  // define router
  // path와 element를 지정
  // 변수를 사용할 때에는 : 사용
  // element에는 해당 컴포넌트
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>,
    },
    {
      path:`/detail/:id`,
      element: <Detail/>,
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
