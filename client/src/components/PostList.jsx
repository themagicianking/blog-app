import { useEffect, useState } from "react";
import ItemContent from "./ItemContent";
import { List, ListItem, Card } from "@material-tailwind/react";

export default function PostList({ updateId }) {
  const [posts, setPosts] = useState(null);
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (value) => {
    setSelected(value);
    updateId(selected);
  };

  async function loadPosts() {
    try {
      await fetch("http://localhost:5000/posts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        }, []);
    } catch {
      setPosts(["there was an error."]);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Card className="w-96">
      {posts ? (
        <List>
          {posts.map((post) => (
            <ListItem
              selected={selected === post.id}
              onClick={() => {
                setSelectedItem(post.id);
              }}
              key={post.id}
            >
              <ItemContent
                key={post.id}
                body={post.body}
                title={post.title}
                createdat={post.createdat}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <></>
      )}
    </Card>
  );
}
