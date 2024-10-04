// component for adding information to the post list component

export default function ItemContent({ title, body, createdat }) {
  // creates short preview of body text
  function trimBody(body) {
    let trimmedBody = body.slice(0, 50);
    return trimmedBody.length < body.length ? trimmedBody + "..." : trimmedBody;
  }

  // formats the date so it is more readable
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
