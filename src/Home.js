import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const { data: blogs, isPending, error } =
    useFetch('http://localhost:8000/blogss');

  return (
    <div className="home">
      {error && <div className="error">{error}</div>}
      {isPending && <div>Fetching data...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;