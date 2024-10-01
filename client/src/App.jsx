import "./App.css";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <>
      <p>I am a blog app.</p>
      <PostList />
      <CreatePost />
    </>
  );
}

export default App;
