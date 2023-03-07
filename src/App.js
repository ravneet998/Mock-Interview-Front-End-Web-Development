import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import CommentDetail from "./CommentDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);
  
  async function loadComments(postId) {
  try {
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    )
    .then(response => response.json())
    .then(setComments)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <PostDetail posts={posts} comments={comments} loadComments={loadComments} />
      <CommentDetail comments={comments} />
    </div>
  );
}

export default App;
