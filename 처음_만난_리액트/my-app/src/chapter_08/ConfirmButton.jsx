// function component로 작성
import React, {useState} from "react"

function ConfirmButton(props) {
  const [isConfirmed, setIsConfirned] = useState(false);

  const handleConfirm = () => {
    setIsConfirned((prevIsConfirmed) => !prevIsConfirmed);
  }

  return (
    // 확인이 되는 순간 button 기능 중지
    <button onClick={handleConfirm} disabled={isConfirmed}> 
      {isConfirmed ? "확인됨":"확인하기"}
    </button>
  );
}

export default ConfirmButton