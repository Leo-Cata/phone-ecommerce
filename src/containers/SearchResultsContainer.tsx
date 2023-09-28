import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchDataArray } from "../types/types";
import SearchResultsCards from "../components/SearchResultsCards";
import CustomCardsSkeleton from "../components/Skeletons/CustomCardsSkeleton";
import CustomTypography from "../components/CustomTypography";

const SearchResultsContainer = () => {
  // gets the string to search from the params, passed when pressing enter in the search bar
  const { searchQuery } = useParams();
  const [searchResults, setSearchResults] = useState<SearchDataArray | null>(
    null
  );
  // state to track if in which point of the fetch we are, after the data is set, isLoading will become false and display the cards
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        //exporting the api from phoneApis as arrow func passing the search query will return the url and not the fetch
        const resp = await axios.get(
          `https://phonewise.onrender.com/api/search?q=${searchQuery}`
        );
        if (resp.status === 200) {
          setSearchResults(resp.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <>
      {searchResults && !isLoading ? (
        <SearchResultsCards searchResults={searchResults} />
      ) : (
        <>
          {/* {\u200B' zero width space character from unicode to have the same distance when the data is being fetched and rendered */}
          <CustomTypography textVariant="h4" displayedText={"\u200B"} />
          <CustomCardsSkeleton />
        </>
      )}
    </>
  );
};

export default SearchResultsContainer;
