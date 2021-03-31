import { useState, useEffect } from 'react';
console.log('render Hooks useFetch.js');
// https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
// https://www.youtube.com/watch?v=vfrEAz0BSbA
// https://www.robinwieruch.de/conditional-rendering-react
// https://codewithnico.com/react-wait-axios-to-render/

export const useFetch = (url, initialValue) => {
    
    const [result, setResult] = useState(initialValue);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      
      async function fetchData() {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setResult(data);
            setLoading(false);
          })
          .catch((e) => {
            console.log(e);
          });
        };
        fetchData();
    }, [url])

    return [isLoading,result];
  };


  