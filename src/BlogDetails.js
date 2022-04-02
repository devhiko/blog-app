import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, isPending, error } =
    useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      {error && <div className="error">{error}</div>}
      {isPending && <div>Fetching data...</div>}
      {blog && (
        <article>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p>Author: {blog.author}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;