import { ThemeProvider } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import Post from "./components/Post";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

// the main app is mounted here

function App() {
  //setting material tailwind theme
  const customTheme = {
    card: {
      defaultProps: {
        variant: "filled",
        color: "light-green",
        shadow: true,
        className: "",
      },
      valid: {
        variants: ["filled", "gradient"],
        colors: [
          "transparent",
          "white",
          "blue-gray",
          "gray",
          "brown",
          "deep-orange",
          "orange",
          "amber",
          "yellow",
          "lime",
          "light-green",
          "green",
          "teal",
          "cyan",
          "light-blue",
          "blue",
          "indigo",
          "deep-purple",
          "purple",
          "pink",
          "red",
        ],
      },
      styles: {
        base: {
          initial: {
            position: "relative",
            display: "flex",
            flexDirection: "flex-col",
            backgroundClip: "bg-clip-border",
            borderRadius: "rounded-xl",
          },
          shadow: {
            boxShadow: "shadow-md",
          },
        },
        variants: {
          filled: {
            transparent: {
              backgroud: "bg-transparent",
              color: "text-gray-700",
              shadow: "shadow-none",
            },
            white: {
              backgroud: "bg-white",
              color: "text-gray-700",
            },
            "blue-gray": {
              backgroud: "bg-blue-gray-500",
              color: "text-white",
              shadow: "shadow-blue-gray-500/40",
            },
            gray: {
              backgroud: "bg-gray-500",
              color: "text-white",
              shadow: "shadow-gray-500/40",
            },
            brown: {
              backgroud: "bg-brown-500",
              color: "text-white",
              shadow: "shadow-brown-500/40",
            },
            "deep-orange": {
              backgroud: "bg-deep-orange-500",
              color: "text-white",
              shadow: "shadow-deep-orange-500/40",
            },
            orange: {
              backgroud: "bg-orange-500",
              color: "text-white",
              shadow: "shadow-orange-500/40",
            },
            amber: {
              backgroud: "bg-amber-500",
              color: "text-gray-700",
              shadow: "shadow-amber-500/40",
            },
            yellow: {
              backgroud: "bg-yellow-500",
              color: "text-gray-700",
              shadow: "shadow-yellow-500/40",
            },
            lime: {
              backgroud: "bg-lime-500",
              color: "text-gray-700",
              shadow: "shadow-lime-500/40",
            },
            "light-green": {
              backgroud: "bg-light-green-500",
              color: "text-white",
              shadow: "shadow-light-green-500/40",
            },
            green: {
              backgroud: "bg-green-500",
              color: "text-white",
              shadow: "shadow-green-500/40",
            },
            teal: {
              backgroud: "bg-teal-500",
              color: "text-white",
              shadow: "shadow-teal-500/40",
            },
            cyan: {
              backgroud: "bg-cyan-500",
              color: "text-white",
              shadow: "shadow-cyan-500/40",
            },
            "light-blue": {
              backgroud: "bg-light-blue-500",
              color: "text-white",
              shadow: "shadow-light-blue-500/40",
            },
            blue: {
              backgroud: "bg-blue-500",
              color: "text-white",
              shadow: "shadow-blue-500/40",
            },
            indigo: {
              backgroud: "bg-indigo-500",
              color: "text-white",
              shadow: "shadow-indigo-500/40",
            },
            "deep-purple": {
              backgroud: "bg-deep-purple-500",
              color: "text-white",
              shadow: "shadow-deep-purple-500/40",
            },
            purple: {
              backgroud: "bg-purple-500",
              color: "text-white",
              shadow: "shadow-purple-500/40",
            },
            pink: {
              backgroud: "bg-pink-500",
              color: "text-white",
              shadow: "shadow-pink-500/40",
            },
            red: {
              backgroud: "bg-red-500",
              color: "text-white",
              shadow: "shadow-red-500/40",
            },
          },
          gradient: {
            transparent: {
              backgroud: "bg-transparent",
              color: "text-gray-700",
              shadow: "shadow-none",
            },
            white: {
              backgroud: "bg-white",
              color: "text-gray-700",
            },
            "blue-gray": {
              backgroud:
                "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
              color: "text-white",
              shadow: "shadow-blue-gray-500/40",
            },
            gray: {
              backgroud: "bg-gradient-to-tr from-gray-600 to-gray-400",
              color: "text-white",
              shadow: "shadow-gray-500/40",
            },
            brown: {
              backgroud: "bg-gradient-to-tr from-brown-600 to-brown-400",
              color: "text-white",
              shadow: "shadow-brown-500/40",
            },
            "deep-orange": {
              backgroud:
                "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
              color: "text-white",
              shadow: "shadow-deep-orange-500/40",
            },
            orange: {
              backgroud: "bg-gradient-to-tr from-orange-600 to-orange-400",
              color: "text-white",
              shadow: "shadow-orange-500/40",
            },
            amber: {
              backgroud: "bg-gradient-to-tr from-amber-600 to-amber-400",
              color: "text-gray-700",
              shadow: "shadow-amber-500/40",
            },
            yellow: {
              backgroud: "bg-gradient-to-tr from-yellow-600 to-yellow-400",
              color: "text-gray-700",
              shadow: "shadow-yellow-500/40",
            },
            lime: {
              backgroud: "bg-gradient-to-tr from-lime-600 to-lime-400",
              color: "text-gray-700",
              shadow: "shadow-lime-500/40",
            },
            "light-green": {
              backgroud:
                "bg-gradient-to-tr from-light-green-600 to-light-green-400",
              color: "text-white",
              shadow: "shadow-light-green-500/40",
            },
            green: {
              backgroud: "bg-gradient-to-tr from-green-600 to-green-400",
              color: "text-white",
              shadow: "shadow-green-500/40",
            },
            teal: {
              backgroud: "bg-gradient-to-tr from-teal-600 to-teal-400",
              color: "text-white",
              shadow: "shadow-teal-500/40",
            },
            cyan: {
              backgroud: "bg-gradient-to-tr from-cyan-600 to-cyan-400",
              color: "text-white",
              shadow: "shadow-cyan-500/40",
            },
            "light-blue": {
              backgroud:
                "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
              color: "text-white",
              shadow: "shadow-light-blue-500/40",
            },
            blue: {
              backgroud: "bg-gradient-to-tr from-blue-600 to-blue-400",
              color: "text-white",
              shadow: "shadow-blue-500/40",
            },
            indigo: {
              backgroud: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
              color: "text-white",
              shadow: "shadow-indigo-500/40",
            },
            "deep-purple": {
              backgroud:
                "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
              color: "text-white",
              shadow: "shadow-deep-purple-500/40",
            },
            purple: {
              backgroud: "bg-gradient-to-tr from-purple-600 to-purple-400",
              color: "text-white",
              shadow: "shadow-purple-500/40",
            },
            pink: {
              backgroud: "bg-gradient-to-tr from-pink-600 to-pink-400",
              color: "text-white",
              shadow: "shadow-pink-500/40",
            },
            red: {
              backgroud: "bg-gradient-to-tr from-red-600 to-red-400",
              color: "text-white",
              shadow: "shadow-red-500/40",
            },
          },
        },
      },
    },
  };
  const [post, setPost] = useState(null);
  // variable to determine which post to display in the main view based on what the user last clicked on in the list
  const [selectedId, setSelectedId] = useState(1);

  // fetches post that matches the id of last clicked-on post in the list
  async function fetchPost(id) {
    await fetch(`http://localhost:5000/post?id=${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data[0]);
      });
  }

  // callback function to update last clicked post and rerender the component
  function updateId(id) {
    setSelectedId(id);
    fetchPost(selectedId);
  }

  useEffect(() => {
    fetchPost(selectedId);
  }, []);

  return (
    <ThemeProvider value={customTheme}>
      <>
        <h1>Thane's Blog Site</h1>
        <div className="main-content">
          {post ? (
            <Post
              body={post.body}
              author={post.author}
              title={post.title}
              createdat={post.createdat}
            />
          ) : (
            <p>loading posts...</p>
          )}
          <div className="post-list">
            <PostList updateId={updateId} />
          </div>
        </div>

        <CreatePost />
      </>
    </ThemeProvider>
  );
}

export default App;
