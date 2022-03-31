const BlogList = ({ blogs, title, handleDelete }) => {

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div className="blog" key={blog.id}>
          <a href="/blogs/">{blog.title}</a>
          <p>{blog.content}</p>
          <p>Author: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;