import { useParams } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Post no encontrado</h2>;
  }

  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <p>{post.content}</p>
    </article>
  );
}
