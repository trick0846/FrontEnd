import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
      if (gender == '') {
        alert("성별을 선택하세요");
        event.preventDefault();
      } else {
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault();
        setName("")
        setGender("")
      // 위의 코드의 진행은 작성 순서에 맞게 적용되고 있음
      // alert 화면이 뜬다 -> 새로고침 X -> input들의 value 초기값으로 업데이트
      }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="" >선택하기</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;

// select 다른 코드
{/* <select defaultValue="" onChange={handleChangeGender}>
  <option value="" disabled>선택하세요</option>
  <option value="남자">남자</option>
  <option value="여자">여자</option>
</select> */}

    