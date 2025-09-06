import { Link } from "react-router-dom";
import "../styles/blog.css";

export default function BlogCard({ id, title, date, excerpt }) {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <small className="blog-date">{date}</small>
      <p>{excerpt}</p>
      <Link to={`/blog/${id}`} className="blog-button">
        Leer más
      </Link>
    </div>
  );
}
