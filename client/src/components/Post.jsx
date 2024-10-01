export default function Post({ id, body, author, createdat }) {
  return (
    <li key={id}>
      <p>{body}</p>
      <p>
        Posted by {author} at {createdat}
      </p>
    </li>
  );
}
