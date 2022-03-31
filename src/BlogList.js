

const BlogList = ({ blogs, title }) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <a href="/blogs/">{blog.title}</a>
          <p>{blog.content}</p>
          <p>Author: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;