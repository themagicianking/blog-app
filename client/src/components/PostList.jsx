import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState(null);

  async function loadPosts() {
    try {
      await fetch("http://localhost:5000/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        }, []);
    } catch {
      setPosts(["there was an error."]);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
