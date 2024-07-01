import React from "react";

const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: {
    marginRight: 8,
  },
};

function Toolbar(props) {
  // props에 있는 변수들을 개별로 지정 => props.isLoggendIn처럼 사용할 필요 X
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  
  // 변수를 넣고 싶은 부분에는 모두 중괄호"{}" 사용하기 
  return (
    <div style={styles.wrapper}>
      {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
      {!isLoggedIn && <span>반대요!</span>}
      {isLoggedIn ? (
        <button onClick={onClickLogout}>로그아웃</button>
      ) : (
        <button onClick={onClickLogin}>로그인</button>
      )}
    </div>
  );
}
// 마지막에는 반환해주기!
export default Toolbar;
