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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter(blog => blog.author === 'hikmet')} title="Hikmet's Blogs" />
    </div>
  );
}

export default Home;