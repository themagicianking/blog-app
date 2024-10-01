import { useEffect, useState } from "react";
import Post from "./Post";

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
            <Post
              key={post.id}
              body={post.body}
              author={post.author}
              createdat={post.createdat}
            />
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
