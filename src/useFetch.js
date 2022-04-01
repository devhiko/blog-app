// Custom hook
import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, SetBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;