import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {

  // 초기 isLoggedIn의 값은 false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event Handler 선언
  const onClickLogin = () => {
    setIsLoggedIn(true);
  }

  const onClickLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Toolbar 
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
