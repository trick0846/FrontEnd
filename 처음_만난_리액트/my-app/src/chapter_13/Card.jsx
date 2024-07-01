import React from 'react';

// 하위 컴포넌트 : 재사용이 가능한 카드
function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px grey",
        backgroundColor: backgroundColor || "white",
      }}
    >
      {/* props로 전달받은 title, backgroundColor, children 를 사용한다 */}
      {title && <h1>{title}</h1>}
      <h2>{backgroundColor}</h2>
      {children}
    </div>
  );
}

export default Card;
