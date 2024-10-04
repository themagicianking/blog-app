import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export default function CreatePost() {
  const [message, setMessage] = useState(null);
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);
  }

  const handleOpen = () => {
    setIsSubmitted(false);
    setOpen(!open);
  };

  return (
    <>
      <Button onClick={handleOpen}>Create New Post</Button>
      <Dialog open={open} size="xs" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            <Typography className="mb-1" variant="h4">
              Create New Post
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isSubmitted ? (
          <>
            <DialogBody>
              <div className="grid gap-6">
                <Typography className="mb-1" variant="h5">
                  Thank you!
                </Typography>
                <p>Your post has been submitted.</p>
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="gradient" color="gray" onClick={handleOpen}>
                exit
              </Button>
            </DialogFooter>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <DialogBody>
              <div className="grid gap-6">
                <Input id="title" label="Post Title" />
                <Input id="author" label="Your Name" required/>
                <Textarea id="body" label="Post text goes here." required/>
              </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="gray" onClick={handleOpen}>
                cancel
              </Button>
              <Button variant="gradient" color="gray" type="submit">
                create
              </Button>
            </DialogFooter>
          </form>
        )}
      </Dialog>
    </>
  );
}
// return (
//   <>
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="body">Create post</label>
//       <input id="body" name="body " type="text"></input>
//       <label>Name</label>
//       <input id="author" name="author" type="text"></input>
//       <button type="submit">Create Post</button>
//     </form>
//     {message ? <p>{message}</p> : <p>Submit your post.</p>}
//   </>
// );
