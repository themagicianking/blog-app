import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// component for the display view of a post

export default function Post({ src, alt, author, title, body, createdat }) {
  // formats the date so it is more readable
  function createDate(date) {
    return new Date(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <Card className="w-full max-w-[48rem] flex-row">
      {src ? (
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </CardHeader>
      ) : (
        <p></p>
      )}
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {author}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {body}
          <p><i>Created on {createDate(createdat)}</i></p>
        </Typography>
      </CardBody>
    </Card>
  );
}

// export default function Post({ id, body, author, createdat }) {
//   return (
//     <li key={id}>
//       <p>{body}</p>
//       <p>
//         Posted by {author} at {createdat}
//       </p>
//     </li>
//   );
// }
