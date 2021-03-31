import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// https://www.youtube.com/watch?v=RZG0iRfUaY0&
export const useAxios = (url) => {

  const [responseData, setResponseData] = useState('');
  
  function fetchData -(){
    axios({
      "method": "GET",
      "url": url,
      "headers": {
        "content-type": "application/octet-stream"
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  };

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return responseData;
}