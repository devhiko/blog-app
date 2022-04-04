import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [author, setAuthor] = useState('hikmet');
  // refactored to advanced code :)
  // multiple inputs form (then always that's it.)

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {

    const { target: { name, value } } = e;

    setInputs(val => ({ ...val, [name]: value }));
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const blog = { author: 'hikmet', ...inputs };

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log("Added Blog !");
        navigate('/');
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
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <label >Content: </label>
        <textarea
          placeholder="Write some content"
          name="content"
          value={inputs.content}
          onChange={handleChange}
          required
        ></textarea>
        <label >Author: </label>
        <select
          name="author"
          value={inputs.author}
          onChange={handleChange}
        >
          <option>hikmet</option>
          <option>mehmet</option>
        </select> <br />
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;