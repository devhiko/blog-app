import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>Author: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;