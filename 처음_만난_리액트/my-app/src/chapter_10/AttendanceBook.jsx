import React from "react";

let id = 0
// 일반적으로는 보통 어딘가에 존재하는 파일을 컴포넌트 내에 표시하는 경우가 많기 때문에,
// 이와 같이 사용할 데이터를 밖에서 정의하고 이를 내부에 넣어주어서 사용
const students = [
  { id: id++, name: "Inje" },
  { id: id++, name: "Steve" },
  { id: id++, name: "Bill" },
  { id: id++, name: "Jeff" },
];

// 같은 파일 내에 있기때문에 따로 students에 대한 정의는 X
// 뭐든지 중괄호 안에 작성하자!
// key = {`student-id-${student.id}`} 이런 식으로!!
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.id}: {student.name}</li>
      ))}
    </ul>
  );
}

export default AttendanceBook;
