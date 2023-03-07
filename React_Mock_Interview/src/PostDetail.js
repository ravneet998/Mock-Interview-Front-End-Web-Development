import React from "react";

function PostDetail ({ posts, comments, loadComments }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p onClick={() => loadComments(post.id)}>{post.body}</p>
          </div>
      ))}
      </div>
  )
};
          
export default PostDetail;
