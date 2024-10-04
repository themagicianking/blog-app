export default function ItemContent({ title, body, createdat }) {
  function trimBody(body) {
    let trimmedBody = body.slice(0, 50);
    return trimmedBody.length < body.length ? trimmedBody + "..." : trimmedBody;
  }

  function createDate(date) {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <>
      <h4>{title}</h4>
      <p>{createDate(createdat)}</p>
      <p>{trimBody(body)}</p>
    </>
  );
}
