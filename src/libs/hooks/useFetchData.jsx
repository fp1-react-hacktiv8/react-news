import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (endpoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/${endpoint}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setIsLoading(false);
        setNews(response.data.articles);
        setMaxPages(response.data.totalResults);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchData();
  }, [endpoint]);

  return { news, isLoading, maxPages };
};

export default useFetchData;
