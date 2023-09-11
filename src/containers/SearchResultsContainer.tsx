import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchDataArray } from "../types/types";

const SearchResultsContainer = () => {
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState<SearchDataArray | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `https://phonewise.onrender.com/api/search?q=${searchQuery}`
        );
        if (resp.status === 200) {
          setSearchResults(resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchQuery]);

  console.log(searchResults);

  return <div></div>;
};

export default SearchResultsContainer;
