import React from "react";

function CommentDetail({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2>Comments</h2>
          <p>{comment.name}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
         </div>
        ))}
    </div>
  )
}

export default CommentDetail;