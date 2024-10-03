import { useEffect, useState } from "react";
import Post from "./Post";

// reformat created at so it is a more readable date
// add js that cuts preview text off at a certain character length
// add link in post that takes you to lightbox view of post by itself
// add photo preview?
// add post title

export default function PostList() {
  const [posts, setPosts] = useState(null);

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
    <>
      {posts ? (
        <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
            <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
              <div className="w-full max-w-3xl mx-auto">
                <div className="-my-6">
                  {posts.map((post) => (
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      <div className="font-medium text-indigo-500 mb-1 sm:mb-0">
                        {post.author}
                      </div>

                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                          {post.createdat}
                        </time>
                        <div className="text-xl font-bold text-slate-900">
                          {post.title}Title
                        </div>
                      </div>

                      <div className="text-slate-500">{post.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}
