import React from "react";
import axios from "axios";

function Posts() {
  const [todos, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios
      //.get("http://jsonplaceholder.typicode.com/posts")
      //.get("https://aws.random.cat/meow")
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <ul className="posts">
    Another List
      {todos.map((post) => (
        <li className="post" key={post.id}>
          <h4>{post.title}</h4>
          <h1>{post.userId}</h1>
          <p>{post.id}</p>
          <p> {post.completed}</p>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
