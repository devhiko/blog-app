const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Filan Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">Create Blog</a>
        <a href="all">All Blogs</a>
      </div>
    </nav>
  );
}

export default Navbar;