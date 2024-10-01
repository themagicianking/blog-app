import { useState } from "react";

export default function CreatePost() {
  const [message, setMessage] = useState(null);

  async function submitPost(post) {
    await fetch("http://localhost:5000/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    const NEWPOST = {
      body: event.target.body.value,
      author: event.target.body.value,
    };
    submitPost(NEWPOST);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="body">Create post</label>
        <input id="body" name="body " type="text"></input>
        <label>Name</label>
        <input id="author" name="author" type="text"></input>
        <button type="submit">Create Post</button>
      </form>
      {message ? <p>{message}</p> : <p>Submit your post.</p>}
    </>
  );
}
