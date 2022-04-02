// Custom hook
import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, SetBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  // dont use timeout at real app. only for simulation. use only fetch.
  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
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
          if (err.name === 'AbortError') {
            console.log('Fetch aborted !');
          } else {
            setPending(false);
            setError(err.message);
          }
        });
    }, 500);

    // at other routing, pauses the fetch.
    // actually, there is no need to this for now.
    return () => abortCont.abort();

  }, [url]);

  return { data, isPending, error };
};

export default useFetch;