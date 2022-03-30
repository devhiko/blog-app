import { useState } from "react";

const Home = () => {

  let [name, setName] = useState('hikmet');

  const handleClick = () => {
    setName('mehmet');
  };

  return (
    <nav className="home">
      <h2>Home Sweet home !</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>Author name is: {name}</p>
    </nav>
  );
}

export default Home;