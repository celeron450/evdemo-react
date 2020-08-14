// https://www.robinwieruch.de/react-hooks-fetch-data

import {useState, useEffect} from 'react';
import axios from 'axios';


export default function useFetchApi(initialUrl, initialData) {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
   
    useEffect(() => {
      const fetchData = async () => {
        setError(false);
        setIsLoading(true);
   
        try {
          const result = await axios(url);
   
          setData(result.data);
        } catch (error) {
          setError(error);
        }
   
        setIsLoading(false);
      };
   
      fetchData();
    }, [url]);
   
    return [{ data, isLoading, error }, setUrl];
  }
