export default function Post({ id, title, body, author, createdat }) {
  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>
        Posted by {author} at {createdat}
      </p>
    </li>
  );
}
