import { useEffect } from "react";

export default function Post() {
  async function loadPosts() {
    fetch("http://localhost:5000")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    loadPosts();
  }, []);
}
