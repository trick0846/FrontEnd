import {useState, useEffect} from "react"


// chapter 05
import Button from './components/05/Button'

// chapter 06
// 출력이 두 번 되는 오류 잡아야한다!!
import CleanUp from './components/06/CleanUp'

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

      <CleanUp/>
      {/* 6.4 */}

    </div>
  )
}

export default App;
