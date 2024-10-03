import { useState } from "react";

export default function CreatePost() {
  const [message, setMessage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

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

    const NEWPOST = {
      title: event.target.title.value.replace("'", "''"),
      body: event.target.body.value.replace("'", "''"),
      author: event.target.author.value.replace("'", "''"),
    };
    submitPost(NEWPOST);
    setSubmitted(true);
  }

  // {message ? (<p>{message}</p>) : (<p>Submit your post.</p>)}

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create a new post
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {submitted ? (
                  <p>{message}</p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title " type="text"></input>
                    <label htmlFor="body">Body</label>
                    <input id="body" name="body " type="text"></input>
                    <label>Name</label>
                    <input id="author" name="author" type="text"></input>
                    <button type="submit">Create Post</button>
                  </form>
                )}
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false),
                        setSubmitted(false),
                        location.reload();
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
