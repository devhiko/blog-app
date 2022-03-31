import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, SetBlogs] = useState([
    {
      title: 'hello',
      content: 'hello blog',
      author: 'hikmet',
      id: 1
    },
    {
      title: 'bye',
      content: 'bye blog',
      author: 'hikmet',
      id: 2
    },
    {
      title: 'goodbye',
      content: 'goodbye blog',
      author: 'veli',
      id: 3
    }
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    SetBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All Blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;