import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">Oops, there is no page like this.
      <Link to="/" ><b>Back to home</b> </Link>
    </div>

  );
}

export default NotFound;