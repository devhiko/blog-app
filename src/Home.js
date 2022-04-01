import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, SetBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
        .then(res => {
          if (!res.ok) {
            throw Error('Error while fetching data !')
          }
          return res.json();
        })
        .then(data => {
          SetBlogs(data);
          setPending(false);
          setError(null);
        })
        .catch(err => {
          setPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div>Fetching data...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;