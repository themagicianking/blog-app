import { useState } from "react";

export default function CreatePost() {
  const [message, setMessage] = useState(null);

  async function submitPost(post) {
    await fetch("http://localhost:5000/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      setMessage("Post created successfully.");
      return res.json();
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // replacing all single quotes with two single quotes so they are escaped for the SQL table
    let initialBody = event.target.body.value;
    let newBody = initialBody.replace("'", "''");
    const NEWPOST = {
      body: newBody,
      author: event.target.author.value,
    };
    submitPost(NEWPOST);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="body">Create post</label>
        <input id="body" name="body " type="text"></input>
        <label>Name</label>
        <input id="author" name="author" type="text"></input>
        <button type="submit">Create Post</button>
      </form>
      {message ? <p>{message}</p> : <p>Submit your post.</p>}
    </>
  );
}
