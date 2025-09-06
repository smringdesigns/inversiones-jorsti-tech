import BlogCard from "../components/BlogCard";
import posts from "../data/posts"; // Array de posts simulados

export default function Blog() {
  return (
    <section className="blog-container">
      <div className="text-center">
        <h1>Blog de JorSti Tech</h1>
        <p>Últimas novedades, consejos tecnológicos y noticias de la empresa.</p>
      </div>

      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
