import React from "react"
import Comment from "./Comment"

// 여러개의 데이터를 값에 넣기! => map 사용하기
const comments = [
  {
    name: "이름1",
    comment: "댓글1",
  },
  {
    name: "이름2",
    comment: "댓글2",
  },
  {
    name: "이름3",
    comment: "댓글3",
  },
]


function CommentList(props) {
  return (
    <div>
      {comments.map((comment)=>{
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}

export default CommentList;