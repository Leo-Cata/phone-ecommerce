import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchDataArray } from "../types/types";
import SearchResultsCards from "../components/SearchResultsCards";

const SearchResultsContainer = () => {
  // gets the string to search from the params, passed when pressing enter in the search bar
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState<SearchDataArray | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        //exporting the api from phoneApis as arrow func passing the search query will return the url and not the fetch
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

  return (
    <>{searchResults && <SearchResultsCards searchResults={searchResults} />}</>
  );
};

export default SearchResultsContainer;
