import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('hikmet');
  const history = useHistory();

  const handleSubmit = (e) => {

    e.preventDefault();

    const blog = { title, content, author };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log("Added Blog !");
        history.push('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Title: </label>
        <input
          type="text"
          placeholder="Write some title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <p>Written title: {title}</p>
        <label >Content: </label>
        <textarea
          placeholder="Write some content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <p>Written content: {content}</p>
        <label >Author: </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option>hikmet</option>
          <option>mehmet</option>
        </select> <br />
        <p>Selected author: {author}</p>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;